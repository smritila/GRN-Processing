import { Card, Row, Col, Form, InputGroup, Button } from "react-bootstrap";

const ScanMode = () => {
  return (
    <Card className="border-0">
      <Card.Body className="d-flex flex-column gap-2">
        <div className="text-muted">
          Scan UI coming soon — connect your barcode scanner/camera here.
        </div>
        <Row className="g-3">
          <Col md={6}>
            <Form.Label className="fw-semibold">Scan Barcode</Form.Label>
            <InputGroup>
              <InputGroup.Text>EAN/UPC</InputGroup.Text>
              <Form.Control placeholder="Scan here..." />
              <Button variant="secondary">Simulate</Button>
            </InputGroup>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ScanMode;
