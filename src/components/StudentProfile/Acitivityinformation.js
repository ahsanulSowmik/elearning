import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const Acitivityinformation = () => {
  return (
    <div>
      <Card className="mt-3">
        <Card.Text as="h5" className="mt-4">
          Activity Information
        </Card.Text>
        <Card.Body className="cardbodydesign">
          <div>
            <Row>
              <Col xs={6} style={{ borderRight: "3px solid blue" }}>
                30000 <br /> Total Paid
              </Col>

              <Col xs={6}>
                3 <br /> Course{" "}
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Acitivityinformation;