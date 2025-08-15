import { Button } from "react-bootstrap";
import DotIndicator from "./DotIndicator";

const ButtonWithIndicator = ({ children, ...bootstrapButtonProps }) => {
  return (
    <span className="position-relative">
      <Button {...bootstrapButtonProps}>{children}</Button>
      <span className="position-absolute top-0 start-100 translate-middle">
        <DotIndicator />
      </span>
    </span>
  );
};

export default ButtonWithIndicator;
