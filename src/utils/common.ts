import slugify from "slugify";
import firebase from "firebase/app";
import "firebase/analytics";

export const getSlug: (value: string) => string = (value) => {
  return slugify(value, { lower: true, remove: /[*+~.()'"!?:@]/g });
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc_-cKebQHCsf1fqpVmeFd-WJ2BFXxCEQ",
  authDomain: "mayronui.firebaseapp.com",
  databaseURL: "https://mayronui.firebaseio.com",
  projectId: "mayronui",
  storageBucket: "mayronui.appspot.com",
  messagingSenderId: "87138291328",
  appId: "1:87138291328:web:b5b14c36c5ea3b88b6a065",
  measurementId: "G-GK2Q047SE5",
};

let instance: firebase.analytics.Analytics | undefined;

const getFirebaseAnalytics: () => firebase.analytics.Analytics | undefined = () => {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    const app = firebase.initializeApp(firebaseConfig);
    instance = app.analytics();
  }

  return instance;
};

export default getFirebaseAnalytics;
