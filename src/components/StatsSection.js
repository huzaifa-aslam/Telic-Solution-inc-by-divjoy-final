import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Stats from "./Stats";

function StatsSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <Stats
          items={[
            {
              title: "Companies Engaged",
              stat: "10",
            },
            {
              title: "Happy Customers",
              stat: "123",
            },
            {
              title: "Project Complete",
              stat: "15",
            },
            {
              title: "Project in Progess",
              stat: "5",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default StatsSection;
