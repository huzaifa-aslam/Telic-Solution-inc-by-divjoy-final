import React from "react";
import CarouselSection from "./../components/CarouselSection";
import About from "./../components/About";
import FeaturesSection2 from "./../components/FeaturesSection2";
import HeroSection2 from "./../components/HeroSection2";
import TeamBiosSection from "./../components/TeamBiosSection";
import FaqSection from "./../components/FaqSection";
import ContactSection from "./../components/ContactSection";
import { useRouter } from "./../util/router.js";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <CarouselSection
        items={[
          {
            image:
              "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            caption: "",
          },
          {
            image:
              "https://images.unsplash.com/photo-1598965402089-897ce52e8355?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            caption: "",
          },
          {
            image:
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            caption: "",
          },
        ]}
      />
      <About
        bg="info"
        textColor="white"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="About Us"
        subtitle=" We build bold Mobile and Web Apps since 2010 Just like action speaks louder than words, our work is the best way to get to know about us. The name itself suggests we're proficient in Web and Mobile App development tailed with providing best IT solution for various sectors.!"
      />
      <FeaturesSection2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
      />
      <HeroSection2
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Allow us to introduce ourselves"
        subtitle="We would love to work on your idea as our next project. Here is a list of ideas that we have already turned into a realit."
        buttonText="Work History"
        buttonColor="primary"
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/work-history");
        }}
      />
      <TeamBiosSection
        bg="info"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
      <FaqSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Frequently Asked Questions"
        subtitle=""
      />
      <ContactSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Contact Us"
        subtitle="We strive to make our customers happy! And no, we didn't know about the similarly titled movie. Please stop asking about that."
        buttonText="Send message"
        buttonColor="primary"
        showNameField={false}
        inputSize="md"
        embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955.8932582903226!2d-83.77055904956015!3d42.19534975337887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cbace02a3540d%3A0xfa5385eebaa449b5!2s2072%20Windmill%20Way%2C%20Saline%2C%20MI%2048176%2C%20USA!5e0!3m2!1sen!2s!4v1605606943816!5m2!1sen!2s"
      />
    </>
  );
}

export default IndexPage;
