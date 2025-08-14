import { Container, Row, Col, Button } from "react-bootstrap";

const FooterActions = () => {
  return (
    <footer
      className="py-3"
      style={{
        backgroundColor: "transparent",
        borderTop: "1px solid #fff",
      }}
    >
      <Container>
        <Row className="justify-content-end">
          <Col xs="auto" className="d-flex gap-3">
            <Button
              variant="outline-light"
              className="fw-semibold px-4"
              style={{
                borderRadius: 8,
                borderColor: "none",
                color: "#6C7059",
                background: "#F5F6F1",
              }}
            >
              Cancel
            </Button>
            <Button
              className="fw-semibold px-4 text-white"
              style={{
                borderRadius: 6,
                background: "#000",
                borderColor: "none",
              }}
            >
              Submit GRN
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterActions;
