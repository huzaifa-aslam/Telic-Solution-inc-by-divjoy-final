import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import AspectRatio from "./AspectRatio";
import Nav from "react-bootstrap/Nav";

function ContentCards(props) {
  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col xs={12} md={6} lg={6} className="py-3" key={index}>
          <LinkContainer to={item.url}>
            <Card as="a" text="dark" className="text-decoration-none">
              <AspectRatio ratio={1 / 0.75}>
                <Card.Img src={item.image} alt={item.title} variant="top" />
              </AspectRatio>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.body}</Card.Text>

                <LinkContainer to="/all-blogs/blogID/">
                  <Nav.Link>Read more...</Nav.Link>
                </LinkContainer>
              </Card.Body>
            </Card>
          </LinkContainer>
        </Col>
      ))}
    </Row>
  );
}

export default ContentCards;
