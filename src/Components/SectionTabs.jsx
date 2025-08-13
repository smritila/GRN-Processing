import { Button, ButtonGroup } from "react-bootstrap";

const SectionTabs = () => {
  const baseStyle = {
    borderRadius: 8,
  };

  return (
    <ButtonGroup className="gap-2">
      <Button
        variant="success"
        className="fw-semibold px-4 text-white"
        style={{ ...baseStyle, background: "#1e8e3e", borderColor: "#1e8e3e" }}
      >
        GRN
      </Button>
      <Button
        variant="dark"
        className="fw-semibold px-4 text-white"
        style={{ ...baseStyle, background: "#000", borderColor: "#000" }}
      >
        Putaway
      </Button>
      <Button
        variant="dark"
        className="fw-semibold px-4 text-white"
        style={{ ...baseStyle, background: "#000", borderColor: "#000" }}
      >
        Picking
      </Button>
      <Button
        variant="dark"
        className="fw-semibold px-4 text-white"
        style={{ ...baseStyle, background: "#000", borderColor: "#000" }}
      >
        Packing &amp; Shipping
      </Button>
    </ButtonGroup>
  );
};

export default SectionTabs;
