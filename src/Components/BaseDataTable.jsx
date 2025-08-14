import { DataGrid } from "react-data-grid";

/* ---------- Cell Editors / Formatters ---------- */
// function NumberEditor({ row, column, onRowChange }) {
//   return (
//     <input
//       type="number"
//       min="0"
//       className="form-control form-control-sm"
//       value={row[column.key] ?? 0}
//       onChange={(e) =>
//         onRowChange({ ...row, [column.key]: Number(e.target.value) || 0 })
//       }
//       autoFocus
//     />
//   );
// }
// function TextEditor({ row, column, onRowChange }) {
//   return (
//     <input
//       type="text"
//       className="form-control form-control-sm"
//       value={row[column.key] ?? ""}
//       onChange={(e) => onRowChange({ ...row, [column.key]: e.target.value })}
//       autoFocus
//     />
//   );
// }
// function DateEditor({ row, column, onRowChange }) {
//   return (
//     <input
//       type="date"
//       className="form-control form-control-sm"
//       value={row[column.key] ?? ""}
//       onChange={(e) => onRowChange({ ...row, [column.key]: e.target.value })}
//       autoFocus
//     />
//   );
// }
// function CurrencyEditor({ row, column, onRowChange }) {
//   const val = row[column.key] ?? 0;
//   return (
//     <div className="input-group input-group-sm">
//       <span className="input-group-text px-2">₹</span>
//       <input
//         type="number"
//         step="0.01"
//         min="0"
//         className="form-control"
//         value={val}
//         onChange={(e) =>
//           onRowChange({
//             ...row,
//             [column.key]: parseFloat(e.target.value || "0"),
//           })
//         }
//         autoFocus
//       />
//     </div>
//   );
// }
// function ConditionFormatter({ row }) {
//   const isGood = row.condition === "GOOD";
//   return (
//     <Badge bg={isGood ? "success" : "danger"}>{row.condition || "GOOD"}</Badge>
//   );
// }
// function ConditionEditor({ row, onRowChange }) {
//   return (
//     <select
//       className="form-select form-select-sm"
//       value={row.condition || "GOOD"}
//       onChange={(e) => onRowChange({ ...row, condition: e.target.value })}
//       autoFocus
//     >
//       <option value="GOOD">GOOD</option>
//       <option value="BAD">BAD</option>
//     </select>
//   );
// }

const BaseDataTable = ({ columns }) => {};

export default BaseDataTable;
