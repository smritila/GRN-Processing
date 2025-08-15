import DataTable from "react-data-table-component";

import { ButtonGroup, Button, Badge } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

/* ---------- Main Component ---------- */
function GrnRecords() {
  const mode = "scan"; // 'scan' | 'manual'
  const buttonGroups = [
    { key: "scan", label: "SCAN" },
    { key: "manual", label: "MANUAL ENTRY" },
  ];

  const rows = [
    {
      id: 1,
      item: "TMT Bar",
      expectedQty: 2,
      rejectedQty: 4,
      batch: "B-114",
      unitPrice: 45000,
      expiry: "2030-05-12",
      condition: "GOOD",
    },
    {
      id: 2,
      item: "Steel Pipes",
      expectedQty: 3,
      rejectedQty: 3,
      batch: "B-475",
      unitPrice: 50000,
      expiry: "2035-08-19",
      condition: "BAD",
    },
    {
      id: 3,
      item: "Aluminium Coils",
      expectedQty: 4,
      rejectedQty: 5,
      batch: "B-688",
      unitPrice: 65000,
      expiry: "2035-09-09",
      condition: "GOOD",
    },
    {
      id: 4,
      item: "Plugs",
      expectedQty: 5,
      rejectedQty: 8,
      batch: "B-123",
      unitPrice: 50000,
      expiry: "2035-10-09",
      condition: "GOOD",
    },
  ];

  const columns = [
    {
      name: "Item",
      width: "220px",
      cell: (row) => <span className="fw-semibold text-dark">{row.item}</span>,
    },
    {
      name: "Expected Qty",
      cell: (row) => <span className="text-secondary">{row.expectedQty}</span>,
    },
    {
      name: "Rejected Qty",
      cell: (row) => <span className="text-secondary">{row.rejectedQty}</span>,
    },
    {
      name: "Batch / LOT",
      cell: (row) => <span className="fw-semibold">{row.batch}</span>,
    },
    {
      name: "Actual Unit Price",
      cell: (row) => (
        <span className="text-success fw-bold">
          ₹{row.unitPrice.toLocaleString()}
        </span>
      ),
    },
    {
      name: "Expiry",
      width: "150px",
      cell: (row) => <span className="text-muted">{row.expiry}</span>,
    },
    {
      name: "Condition",
      width: "140px",
      cell: (row) => {
        const isGood = row.condition === "GOOD";
        return (
          <Button
            className="w-100"
            variant={isGood ? "success" : "danger"}
            size="sm"
          >
            {row.condition}
          </Button>
        );
      },
    },
    {
      name: "Actions",
      width: "90px",
      cell: (row) => (
        <div className="d-flex justify-content-center w-100">
          <Button variant="outline-danger" size="sm">
            <Trash size={16} />
          </Button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <div
      style={{ background: "#f3f6ed", borderRadius: 8 }}
      className="py-4 px-3"
    >
      {/* Toolbar before the table */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <ButtonGroup className="gap-2">
          {buttonGroups.map(({ key, label }) => (
            <Button
              key={key}
              role="tab"
              aria-selected={mode === key}
              aria-controls={`panel-${key}`}
              className="fw-semibold px-3 border rounded"
              variant={mode === key ? "secondary" : "outline-light"}
              style={{
                backgroundColor: mode === key ? "#6C7059" : "transparent",
                color: mode === key ? "#fff" : "#6C7059",
                borderColor: mode === key ? "#6C7059" : "#F5F6F1",
              }}
            >
              {label}
            </Button>
          ))}
        </ButtonGroup>
        <Badge bg="light" text="dark" className="border"></Badge>
      </div>

      {/* Content */}

      <div className="bg-white p-3">
        <DataTable
          columns={columns}
          data={rows}
          dense
          highlightOnHover
          fixedHeader
          fixedHeaderScrollHeight="360px"
          customStyles={{
            rows: {
              style: {
                minHeight: "72px", // Row height
                padding: "6px 0", // Vertical padding
              },
            },
            headCells: {
              style: {
                fontWeight: 600,
                minHeight: "72px", // Header height
                padding: "6px 0", // Vertical padding
              },
            },
            cells: {
              style: {
                padding: "6px", // Cell padding
              },
            },
          }}
        />

        {/* Footer bar directly under the last row */}
        <div className="mt-2 d-flex align-items-center">
          <Button
            variant="light"
            className="border d-flex align-items-center gap-2"
          >
            <span className="fw-bold">+</span>
            <span className="fw-semibold">Add Item</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GrnRecords;
