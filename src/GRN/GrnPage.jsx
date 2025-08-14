import { Card } from "react-bootstrap";
import GrnHeader from "./GrnHeader";
import GrnMetaForm from "./GrnMetaForm";
import ItemsTableRDG from "./ItemsTableRDG";
//import EntryModeTabs from "./EntryModeTabs";

const GrnPage = () => {
  return (
    <Card className="border-0 shadow-sm">
      <Card.Body className="p-4">
        <GrnHeader />
        <GrnMetaForm />
        <ItemsTableRDG />
      </Card.Body>
    </Card>
  );
};

export default GrnPage;
