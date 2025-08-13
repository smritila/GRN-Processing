import React from "react";
import { Card } from "react-bootstrap";
import GrnHeader from "./GrnHeader";
import GrnMetaForm from "./GrnMetaForm";

const GrnPage = () => {
  return (
    <Card className="border-0 shadow-sm">
      <Card.Body className="p-4">
        <GrnHeader />
        <GrnMetaForm />
      </Card.Body>
    </Card>
  );
};

export default GrnPage;
