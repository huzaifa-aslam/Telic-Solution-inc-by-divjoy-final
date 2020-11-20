import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import TeamBios from "./TeamBios";

function TeamBiosSection(props) {
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
          className="text-center text-white"
        />
        <TeamBios
          items={[
            {
              headerImage: "https://source.unsplash.com/pe_R74hldW4/1080x360",
              avatarImage: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
              name: "Wajeeh Misbah Khan",
              role: "Mean Stack Developer",
              bio:
                "I am a programming enthusiast and I've been coding small games from back in 2012. I learned JavaScript back then as well and have been professionally working in the field of Web Development since 2017.",
            },
            {
              headerImage: "https://source.unsplash.com/uwPBAlQyIag/1080x360",
              avatarImage:
                "https://boysprofilepics.yolasite.com/resources/Attitude%20Boy%20Pic%20HD.png",
              name: "Bilal Khan",
              role: "Software Engineer",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
            },
            {
              headerImage: "https://source.unsplash.com/pJ_DCj9KswI/1080x360",
              avatarImage: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
              name: "Zujaj Misbah Khan",
              role: "Designer",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default TeamBiosSection;
