import React from "react";
import { Stack } from "react-bootstrap";

const GrnHeader = () => {
  return (
    <Stack className="mb-4">
      <h5 className="mb-1 fw-semibold">Goods Receipt Entry</h5>
      <small className="text-muted">
        Record received items against a purchase order
      </small>
    </Stack>
  );
};

export default GrnHeader;
