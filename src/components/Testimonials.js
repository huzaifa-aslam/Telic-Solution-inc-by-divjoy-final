import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import Avatar from "./Avatar";

function Testimonials(props) {
  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col xs={12} md={4} className="py-3" key={index}>
          <Card>
            <Card.Body className="p-4">
              <Card.Text>"{item.testimonial}"</Card.Text>
              <Media className="align-items-center mt-auto">
                <Avatar src={item.avatar} alt={item.name} size="56px" />
                <Media.Body className="ml-2">
                  <h6 className="font-weight-bold mb-0">{item.name}</h6>
                  <small>{item.company}</small>
                </Media.Body>
              </Media>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Testimonials;
