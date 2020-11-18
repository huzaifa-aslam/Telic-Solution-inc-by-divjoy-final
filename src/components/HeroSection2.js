import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "./SectionHeader";
import Button from "react-bootstrap/Button";
import StatsSection from "./StatsSection";

function HeroSection2(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="text-center text-lg-left">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={1}
              spaced={true}
            />
            <Button
              variant={props.buttonColor}
              size="lg"
              onClick={props.buttonOnClick}
            >
              {props.buttonText}
            </Button>
          </Col>
          <Col className="offset-lg-1 mt-5 mt-lg-0 ">
            <StatsSection
              bg="white"
              textColor="dark"
              size="md"
              bgImage=""
              bgImageOpacity={1}
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default HeroSection2;
