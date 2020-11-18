import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Stats(props) {
  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col xs={12} md={6} className="py-3 px-4" key={index}>
          <div>
            <small className="text-uppercase">{item.title}</small>
            <h2 className="mt-2">{item.stat}</h2>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Stats;
