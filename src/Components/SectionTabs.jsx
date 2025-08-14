import { useState } from "react";
import { Nav } from "react-bootstrap";

const SectionTabs = () => {
  const menuItems = [
    { key: "grn", label: "GRN" },
    { key: "putaway", label: "Putaway" },
    { key: "picking", label: "Picking" },
    { key: "packing", label: "Packing & Shipping" },
  ];

  const [activeKey, setActiveKey] = useState("grn");

  return (
    <Nav
      variant="pills"
      activeKey={activeKey}
      onSelect={setActiveKey}
      className="gap-2 p-2 rounded"
      style={{ backgroundColor: "#1B1C1E" }}
    >
      {menuItems.map((item) => (
        <Nav.Item key={item.key}>
          <Nav.Link
            eventKey={item.key}
            className="fw-semibold px-4 rounded-2"
            style={{
              background: activeKey === item.key ? "#1e8e3e" : "transparent",
              borderColor: activeKey === item.key ? "#1e8e3e" : "transparent",
              color: activeKey === item.key ? "#fff" : "#969DAC",
            }}
          >
            {item.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default SectionTabs;
