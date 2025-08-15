import { Button } from "react-bootstrap";
import DotIndicator from "./DotIndicator";

const ButtonWithIndicator = ({ children, ...bootstrapButtonProps }) => {
  return (
    <Button {...bootstrapButtonProps}>
      <span className="position-relative">
        {children}
        <span className="position-absolute top-0 start-100 translate-middle">
          <DotIndicator />
        </span>
      </span>
    </Button>
  );
};

export default ButtonWithIndicator;
