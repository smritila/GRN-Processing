import { useState } from "react";
import { DataGrid } from "react-data-grid";
import { ButtonGroup, Button, Badge } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

import ScanMode from "./ScanMode";

/* ---------- Cell Editors / Formatters ---------- */
function NumberEditor({ row, column, onRowChange }) {
  return (
    <input
      type="number"
      min="0"
      className="form-control form-control-sm"
      value={row[column.key] ?? 0}
      onChange={(e) =>
        onRowChange({ ...row, [column.key]: Number(e.target.value) || 0 })
      }
      autoFocus
    />
  );
}
function TextEditor({ row, column, onRowChange }) {
  return (
    <input
      type="text"
      className="form-control form-control-sm"
      value={row[column.key] ?? ""}
      onChange={(e) => onRowChange({ ...row, [column.key]: e.target.value })}
      autoFocus
    />
  );
}
function DateEditor({ row, column, onRowChange }) {
  return (
    <input
      type="date"
      className="form-control form-control-sm"
      value={row[column.key] ?? ""}
      onChange={(e) => onRowChange({ ...row, [column.key]: e.target.value })}
      autoFocus
    />
  );
}
function CurrencyEditor({ row, column, onRowChange }) {
  const val = row[column.key] ?? 0;
  return (
    <div className="input-group input-group-sm">
      <span className="input-group-text px-2">₹</span>
      <input
        type="number"
        step="0.01"
        min="0"
        className="form-control"
        value={val}
        onChange={(e) =>
          onRowChange({
            ...row,
            [column.key]: parseFloat(e.target.value || "0"),
          })
        }
        autoFocus
      />
    </div>
  );
}
function ConditionFormatter({ row }) {
  const isGood = row.condition === "GOOD";
  return (
    <Button className="w-100" variant={isGood ? "success" : "danger"} size="sm">
      {row.condition}
    </Button>
  );
}
function ConditionEditor({ row, onRowChange }) {
  return (
    <select
      className="form-select form-select-sm"
      value={row.condition || "GOOD"}
      onChange={(e) => onRowChange({ ...row, condition: e.target.value })}
      autoFocus
    >
      <option value="GOOD">GOOD</option>
      <option value="BAD">BAD</option>
    </select>
  );
}

/* ---------- Main Component ---------- */
function GrnRecords() {
  const [mode, setMode] = useState("manual"); // 'scan' | 'manual'
  const buttonGroups = [
    { key: "manual", label: "MANUAL ENTRY" },
    { key: "scan", label: "SCAN" },
  ];

  const [rows, setRows] = useState([
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
  ]);

  const deleteRow = (id) => {
    setRows((rs) => rs.filter((r) => r.id !== id));
  };

  const addRow = () => {
    setRows((rs) => [
      ...rs,
      {
        id: Date.now(),
        item: "",
        expectedQty: 0,
        rejectedQty: 0,
        batch: "",
        unitPrice: 0,
        expiry: "",
        condition: "GOOD",
      },
    ]);
  };

  const columns = [
    {
      key: "item",
      name: "Item",
      width: 220,
      editable: true,
      renderEditCell: (p) => <TextEditor {...p} />,
    },
    {
      key: "expectedQty",
      name: "Expected Qty",
      editable: true,
      renderEditCell: (p) => <NumberEditor {...p} />,
    },
    {
      key: "rejectedQty",
      name: "Rejected Qty",
      editable: true,
      renderEditCell: (p) => <NumberEditor {...p} />,
    },
    {
      key: "batch",
      name: "Batch / LOT",
      editable: true,
      renderEditCell: (p) => <TextEditor {...p} />,
    },
    {
      key: "unitPrice",
      name: "Actual Unit Price",
      editable: true,
      renderEditCell: (p) => <CurrencyEditor {...p} />,
    },
    {
      key: "expiry",
      name: "Expiry",
      width: 150,
      editable: true,
      renderEditCell: (p) => <DateEditor {...p} />,
    },
    {
      key: "condition",
      name: "Condition",
      width: 140,
      editable: true,
      renderCell: (p) => <ConditionFormatter row={p.row} />,
      renderEditCell: (p) => <ConditionEditor {...p} />,
    },
    {
      key: "actions",
      name: "Actions",
      width: 90,
      renderCell: ({ row }) => (
        <div className="d-flex justify-content-center">
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => deleteRow(row.id)}
          >
            <Trash size={16} />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div
      style={{ background: "#f3f6ed", borderRadius: 8 }}
      className="py-4 px-3"
    >
      {/* Toolbar before the grid */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <ButtonGroup className="gap-2">
          {buttonGroups.map(({ key, label }) => (
            <Button
              key={key}
              role="tab"
              aria-selected={mode === key}
              aria-controls={`panel-${key}`}
              onClick={() => setMode(key)}
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

      {mode === "scan" ? (
        <ScanMode />
      ) : (
        <div className="bg-white p-3">
          {/* Give the grid a real height via wrapper so it renders */}

          <DataGrid
            className="rdg-light"
            columns={columns}
            rows={rows}
            rowKeyGetter={(r) => r.id}
            rowHeight={40}
            onRowsChange={setRows}
            defaultColumnOptions={{ resizable: true }}
            style={{ height: "100%" }}
          />

          {/* Footer bar directly under the last row */}
          <div className="mt-2 d-flex align-items-center">
            <Button
              variant="light"
              className="border d-flex align-items-center gap-2"
              onClick={addRow}
            >
              <span className="fw-bold">+</span>
              <span className="fw-semibold">Add Item</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
export default GrnRecords;
