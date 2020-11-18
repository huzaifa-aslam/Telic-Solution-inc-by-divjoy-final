import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AspectRatio from "./AspectRatio";
import Image from "react-bootstrap/Image";
import Avatar from "./Avatar";
import "./TeamBios.scss";

function TeamBios(props) {
  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col
          xs={12}
          md={6}
          lg={4}
          className="py-3 d-flex align-items-stretch"
          key={index}
        >
          <Card>
            <AspectRatio ratio={3 / 1}>
              <Image src={item.headerImage} fluid={true} />
            </AspectRatio>
            <Card.Body className="d-flex flex-column text-center align-items-center p-4">
              <div className="TeamBios__avatar-wrapper">
                <Avatar src={item.avatarImage} alt={item.name} size="128px" />
              </div>
              <h6 className="font-weight-bold mb-0 mt-4">{item.name}</h6>
              <small>{item.role}</small>
              <Card.Text className="mt-4">{item.bio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default TeamBios;
