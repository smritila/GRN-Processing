import { Breadcrumb } from "react-bootstrap";

const BreadcrumbNav = () => {
  return (
    <Breadcrumb className="mb-0">
      <Breadcrumb.Item linkAs="span" className="text-muted">
        Inventory
      </Breadcrumb.Item>
      <Breadcrumb.Item active className="fw-medium">
        GRN Processing
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbNav;
