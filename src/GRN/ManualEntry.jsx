import { Card } from "react-bootstrap";
import ItemsTableRDG from "./ItemsTableRDG";

const ManualEntry = () => {
  return (
    <Card className="border-0" style={{ background: "transparent" }}>
      <Card.Body className="p-0">
        <ItemsTableRDG />
      </Card.Body>
    </Card>
  );
};

export default ManualEntry;
