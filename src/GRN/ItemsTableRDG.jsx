import { useMemo, useState, useCallback } from "react";
import { DataGrid } from "react-data-grid";
import { Button, Badge } from "react-bootstrap";
// import { Trash } from "react-bootstrap-icons"; // optional if you want the icon
import EntryModeTabs from "./EntryModeTabs";

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
    <Badge bg={isGood ? "success" : "danger"}>{row.condition || "GOOD"}</Badge>
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
export default function ItemsTableRDG() {
  const [mode, setMode] = useState("manual"); // 'scan' | 'manual'
  const isScan = mode === "scan";

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

  const deleteRow = useCallback((id) => {
    setRows((rs) => rs.filter((r) => r.id !== id));
  }, []);

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

  const columns = useMemo(
    () => [
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
        width: 130,
        editable: true,
        renderEditCell: (p) => <NumberEditor {...p} />,
      },
      {
        key: "rejectedQty",
        name: "Rejected Qty",
        width: 130,
        editable: true,
        renderEditCell: (p) => <NumberEditor {...p} />,
      },
      {
        key: "batch",
        name: "Batch / LOT",
        width: 150,
        editable: true,
        renderEditCell: (p) => <TextEditor {...p} />,
      },
      {
        key: "unitPrice",
        name: "Actual Unit Price",
        width: 170,
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
              <span className="visually-hidden">Delete</span>✖
            </Button>
          </div>
        ),
      },
    ],
    [deleteRow]
  );

  return (
    <div style={{ background: "#f3f6ed", borderRadius: 8 }} className="p-3">
      <div className="border rounded overflow-hidden">
        {/* Toolbar */}
        <div
          className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom"
          style={{ background: "#f7f8f6" }}
        >
          <EntryModeTabs mode={mode} onChange={setMode} />
          <Badge bg="light" text="dark" className="border">
            <span className="me-1">Items</span>
            <strong>{rows.length}</strong>
          </Badge>
        </div>

        {/* Content */}
        <div className="p-3">
          {isScan ? (
            <div className="text-muted">
              Scan UI coming soon — connect your barcode scanner/camera here.
            </div>
          ) : (
            <>
              {/* Give the grid a real height via wrapper */}
              <div
                className="border rounded overflow-hidden"
                style={{ height: 360 }}
              >
                <DataGrid
                  className="rdg-light"
                  columns={columns}
                  rows={rows}
                  rowKeyGetter={(r) => r.id}
                  onRowsChange={setRows}
                  defaultColumnOptions={{ resizable: true }}
                  style={{ height: "100%" }}
                />
              </div>

              <div className="d-flex align-items-center gap-2 mt-3">
                <Button
                  variant="light"
                  className="border d-flex align-items-center gap-2"
                  onClick={addRow}
                >
                  <span className="fw-bold">+</span>
                  <span className="fw-semibold">Add Item</span>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
