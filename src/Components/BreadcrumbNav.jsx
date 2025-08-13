import React from "react";
const BreadcrumbNav = () => {
  return (
    <nav aria-label="breadcrumb" className="mb-0">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item text-muted">
          <span>Inventory</span>
        </li>
        <li className="breadcrumb-item active fw-medium" aria-current="page">
          GRN Processing
        </li>
      </ol>
    </nav>
  );
};

export default BreadcrumbNav;
