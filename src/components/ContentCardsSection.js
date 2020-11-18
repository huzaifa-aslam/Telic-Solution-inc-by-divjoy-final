import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import ContentCards from "./ContentCards";

function ContentCardsSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <ContentCards
          items={[
            {
              image: "https://source.unsplash.com/aHrxrT1q2h0/800x600",
              title: "Faucibus turpis in",
              body:
                "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
              url: "/post/golden-gate",
            },
            {
              image: "https://source.unsplash.com/BkmdKnuAZtw/800x600",
              title: "Faucibus turpis in",
              body:
                "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
              url: "/post/beach",
            },
            {
              image: "https://source.unsplash.com/3XN-BNRDUyY/800x600",
              title: "Faucibus turpis in",
              body:
                "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
              url: "/post/road",
            },
            {
              image: "https://source.unsplash.com/eOcyhe5-9sQ/800x600",
              title: "Faucibus turpis in",
              body:
                "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
              url: "/post/ballons",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default ContentCardsSection;
