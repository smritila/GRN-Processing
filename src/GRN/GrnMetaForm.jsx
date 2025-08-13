// src/Component/GRN/GrnMetaForm.jsx
import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const GrnMetaForm = () => {
  return (
    <Form className="mb-3">
      <Row className="g-3">
        {/* PO */}
        <Col md={4}>
          <Form.Group controlId="grn-po">
            <Form.Label>PO</Form.Label>
            <Form.Select defaultValue="1001" aria-label="Select PO">
              <option value="1001">1001</option>
              <option value="1002">1002</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group controlId="grn-Vehicle">
            <Form.Label>Vehicle</Form.Label>
            <Form.Select
              defaultValue="MH-09ED-7318"
              aria-label="Select Vehicle"
            >
              <option value="MH-09ED-7318">MH-09ED-7318</option>
              <option value="MH-09ED-7567">MH-09ED-7567</option>
            </Form.Select>
          </Form.Group>
        </Col>

        {/* Carrier */}
        <Col md={4}>
          <Form.Group controlId="grn-carrier">
            <Form.Label>Carrier</Form.Label>
            <Form.Select defaultValue="internal" aria-label="Select carrier">
              <option value="internal">Internal Fleet</option>
              <option value="3pl">3PL</option>
            </Form.Select>
          </Form.Group>
        </Col>

        {/* Additional Notes */}
        <Col xs={12}>
          <Form.Group controlId="grn-notes">
            <Form.Label>Additional Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder=""
              className="form-control"
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default GrnMetaForm;
