import axios from "axios";
import { HubConnection } from "@microsoft/signalr";
import { toast } from "react-toastify";
import _ from "lodash";

const TIMEOUT_IN_SECONDS = 8;

const client = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: TIMEOUT_IN_SECONDS * 1000,
});

// generate a unique callback method name
const generateCallbackMethodName = (key: string) =>
  `${key}-${_.times(8, () => ((Math.random() * 0xf) << 0).toString(16)).join("")}`;

const handleError = (
  onError?: (errors: string[]) => void,
  errors?: string[],
  errorCode?: string,
) => {
  if (!(errors && errors.length > 0)) {
    errors = ["Oops! Something unexpected occurred. Please try again later."];
  }

  if (process.env.NODE_ENV === "development") {
    errors.forEach((e) => toast.error(`${e} (error code: ${errorCode})`));
  }

  onError && onError(errors);
};

const handlePayloadEventReceived = <T>(
  response: IPayloadEvent<T>,
  errorCode: string,
  onSuccess?: (response: T) => void,
  onError?: (errors: string[]) => void,
) => {
  if (onSuccess && response.payload) {
    onSuccess(response.payload);
  } else if (onError) {
    handleError(onError, response.errors, errorCode);
  }
};

const handleTimeout = (
  receivedReply: boolean,
  connection: HubConnection,
  callback: string,
  key: string,
  onError?: (errors: string[]) => void,
) => {
  if (!receivedReply) {
    connection.off(callback);
    handleError(onError, ["Request timed out. Please try again later."], key);
  }
};

const Api = {
  invokeHub: <T>(
    connection: HubConnection | null,
    action: string,
    args?: any[],
    onSuccess?: (response: T) => void,
    onError?: (errors: string[]) => void,
  ): void => {
    if (!connection) {
      handleError(onError, ["Your connection has been lost. Please try again later."]);
      return;
    }

    const callback = generateCallbackMethodName(action);
    let receivedReply = false;

    connection.on(callback, (response: IPayloadEvent<T>) => {
      receivedReply = true;
      connection.off(callback);
      handlePayloadEventReceived(response, callback, onSuccess, onError);
    });

    // clean up arguments to send to the server
    if (args && args.length > 0) {
      args = args.filter((a) => a !== undefined || null);
    }

    if (!args || args.length === 0) {
      connection.invoke(action, callback);
    } else {
      connection.invoke(action, callback, ...args);
    }

    // handle timeouts
    setTimeout(() => {
      handleTimeout(receivedReply, connection, callback, action, onError);
    }, TIMEOUT_IN_SECONDS * 1000);
  },

  post: <T>(
    connection: HubConnection | null,
    url: string,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    data: any,
    token?: string,
    onSuccess?: (payload: T) => void,
    onError?: (errors: string[]) => void,
  ): void => {
    if (!token) {
      handleError(onError, [
        "You must be logged in to perform that action. Please log in and try again.",
      ]);
      return;
    }

    if (!connection) {
      handleError(onError, ["Your connection has been lost. Please try again later."]);
      return;
    }

    (async () => {
      let receivedReply = false;
      const callback = generateCallbackMethodName(url);
      data.connectionId = connection.connectionId;
      data.callback = callback;

      connection.on(callback, (response: IPayloadEvent<T>) => {
        receivedReply = true;
        connection.off(callback);
        handlePayloadEventReceived(response, callback, onSuccess, onError);
      });

      await client
        .post<IApiResponse>(url, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // If post request fails validation early
          if (!(response.status === 202 && response.data.isValid)) {
            receivedReply = true;
            connection.off(callback);
            handleError(onError, [response.data.message], callback);
          }
        })
        .catch((reason) => {
          receivedReply = true;
          connection.off(callback);

          if (reason.response.data && reason.response.data.errors) {
            // errorInfo is an object of properties where each property value is a string array of errors.
            // Each property represents a form input key.
            const { errorInfo } = reason.response.data;

            _.forOwn(errorInfo, (errors: string[]) =>
              handleError(onError, errors, callback),
            );
          } else {
            const message =
              reason?.message ||
              "Oops! Something unexpected occured. Please try again later.";
            handleError(onError, [message], callback);
          }
        });

      setTimeout(() => {
        handleTimeout(receivedReply, connection, callback, url, onError);
      }, TIMEOUT_IN_SECONDS * 1000);
    })();
  },
};

export default Api;
