import React from "react";

const SectionTabs = () => {
  const baseStyle = {
    borderRadius: 8,
  };

  return (
    <div className="d-flex gap-2">
      <button
        type="button"
        className="btn btn-success fw-semibold px-4 text-white"
        style={{
          ...baseStyle,
          background: "#1e8e3e",
          borderColor: "#1e8e3e",
        }}
      >
        GRN
      </button>
      <button
        type="button"
        className="btn fw-semibold px-4 text-white"
        style={{
          ...baseStyle,
          background: "#000",
          borderColor: "#000",
        }}
      >
        Putaway
      </button>
      <button
        type="button"
        className="btn fw-semibold px-4 text-white"
        style={{
          ...baseStyle,
          background: "#000",
          borderColor: "#000",
        }}
      >
        Picking
      </button>
      <button
        type="button"
        className="btn fw-semibold px-4 text-white"
        style={{
          ...baseStyle,
          background: "#000",
          borderColor: "#000",
        }}
      >
        Packing &amp; Shipping
      </button>
    </div>
  );
};

export default SectionTabs;
