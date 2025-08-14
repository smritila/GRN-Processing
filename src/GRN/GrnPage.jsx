import { Card } from "react-bootstrap";
import GrnHeader from "./GrnHeader";
import GrnMetaForm from "./GrnMetaForm";
import GrnRecords from "./GrnRecords";
import FooterActions from "./FooterActions";

const GrnPage = () => {
  return (
    <Card className="border-0 shadow-sm">
      <Card.Body className="p-4">
        <GrnHeader />
        <GrnMetaForm />
        <GrnRecords />
        <FooterActions />
      </Card.Body>
    </Card>
  );
};

export default GrnPage;
