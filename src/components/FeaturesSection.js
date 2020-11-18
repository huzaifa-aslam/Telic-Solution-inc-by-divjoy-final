import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Card from "react-bootstrap/Card";
import Features from "./Features";

function FeaturesSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        />
        <Card>
          <Features
            columns={2}
            imageRatio="4by3"
            items={[
              {
                title: "Lorem Ipsum",
                body:
                  "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
                image: "https://uploads.divjoy.com/undraw-fish_bowl_uu88.svg",
              },
              {
                title: "Lorem Ipsum",
                body:
                  "Nunc nulla mauris, laoreet vel cursus lacinia, consectetur sit amet tellus.",
                image: "https://uploads.divjoy.com/undraw-directions_x53j.svg",
              },
              {
                title: "Lorem Ipsum",
                body:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, metus et mattis ullamcorper",
                image:
                  "https://uploads.divjoy.com/undraw-stability_ball_b4ia.svg",
              },
              {
                title: "Lorem Ipsum",
                body:
                  "Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo",
                image:
                  "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg",
              },
            ]}
          />
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
