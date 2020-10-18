import React from "react";
import { Loader, Dimmer, SemanticSIZES } from "semantic-ui-react";

interface ILoadingProps {
  dimmer?: boolean;
  size?: SemanticSIZES;
  inline?: boolean;
}
const Loading: React.FC<ILoadingProps> = ({
  children,
  dimmer,
  size = "huge",
  inline,
}) => (
  <>
    {dimmer ? (
      <Dimmer active inverted className={inline ? "inline" : ""}>
        <Loader size={size} active>
          {children}
        </Loader>
      </Dimmer>
    ) : (
      <Loader size={size} active inline={inline}>
        {children}
      </Loader>
    )}
  </>
);

export default Loading;
