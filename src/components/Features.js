import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AspectRatio from "./AspectRatio";
import Image from "react-bootstrap/Image";
import "./Features.scss";

function Features(props) {
  return (
    <Row className="no-gutters overflow-hidden">
      {props.items.map((item, index) => (
        <Col
          xs={12}
          lg={6}
          style={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: "center",
            boxShadow: "1px 1px 0 0 #efefef",
          }}
          key={index}
        >
          <div className="Features__item has-text-centered">
            <div className="Features__image-container">
              <AspectRatio ratio={4 / 3}>
                <Image src={item.image} alt={item.title} fluid={true} />
              </AspectRatio>
            </div>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Features;
