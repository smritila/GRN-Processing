// src/GRN/EntryModeTabs.jsx
import { ButtonGroup, Button } from "react-bootstrap";

const EntryModeTabs = ({ mode, onChange }) => {
  const isScan = mode === "scan";
  const isManual = mode === "manual";

  return (
    <ButtonGroup className="gap-2" role="tablist" aria-label="Entry mode">
      <Button
        role="tab"
        aria-selected={isScan}
        className="fw-semibold px-3 text-white"
        style={{ borderRadius: 8 }}
        variant={isScan ? "success" : "dark"}
        onClick={() => onChange("scan")}
      >
        SCAN
      </Button>
      <Button
        role="tab"
        aria-selected={isManual}
        className="fw-semibold px-3"
        style={{ borderRadius: 8 }}
        variant={isManual ? "success" : "outline-success"}
        onClick={() => onChange("manual")}
      >
        MANUAL ENTRY
      </Button>
    </ButtonGroup>
  );
};

export default EntryModeTabs;
