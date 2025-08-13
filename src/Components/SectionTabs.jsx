import React from "react";

const SectionTabs = () => {
  return (
    <div className="btn-group" role="group" aria-label="Section tabs">
      <button
        type="button"
        className="btn btn-success fw-semibold px-4"
        style={{
          borderRadius: 10,
          borderColor: "#1e8e3e",
          background: "#1e8e3e",
        }}
      >
        GRN
      </button>
      <button
        type="button"
        className="btn btn-outline-dark fw-semibold px-4 bg-white"
        style={{
          borderRadius: 10,
          borderColor: "#d9dee7",
          color: "#2c333a",
        }}
      >
        Putaway
      </button>
      <button
        type="button"
        className="btn btn-outline-dark fw-semibold px-4 bg-white"
        style={{
          borderRadius: 10,
          borderColor: "#d9dee7",
          color: "#2c333a",
        }}
      >
        Picking
      </button>
      <button
        type="button"
        className="btn btn-outline-dark fw-semibold px-4 bg-white"
        style={{
          borderRadius: 10,
          borderColor: "#d9dee7",
          color: "#2c333a",
        }}
      >
        Packing &amp; Shipping
      </button>
    </div>
  );
};

export default SectionTabs;
