import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Features2 from "./Features2";

function FeaturesSection2(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <h3>OUR SERVICES</h3>
        <Features2
          items={[
            {
              title: "Uber for X",
              subtitle:
                "Do you have an idea which follows the 'Uber for X' business model? Do you want to make the next Careem, Bykea or AirBNB? Well look no further! Tell us about your requirements and application ideas and we will help turn your idea into a reality!",
              iconClass: "fas fa-gem",
              iconColor: "warning",
            },
            {
              title: "Social Media",
              subtitle:
                "Websites like Facebook, Instagram and Snapchat are used daily by literally billions of users. If you have an idea similar to these companies, you can discuss them with us and we will help you create your own social media platform.",
              iconClass: "fas fa-charging-station",
              iconColor: "danger",
            },
            {
              title: "Online Store & Delivery",
              subtitle:
                "We can help create an online presence for your business or restaurant. Whether it be a delivery service application or an online store or both, we will help you to expand your customer reach.",
              iconClass: "fas fa-adjust",
              iconColor: "primary",
            },
            {
              title: "Virtual Classroom",
              subtitle:
                "If you are an educational institute or teacher looking to teach to a wider audience or create a network of teachers, we can help you create an online virtual system for your classes.",
              iconClass: "fas fa-adjust",
              iconColor: "primary",
            },
            {
              title: "Freelance Market Place",
              subtitle:
                "Freelance websites offer a market place for clients and service providers to meet. The services can range from website development to plumbing and painting. We can help you create the entire system for the marketplace to function well.",
              iconClass: "fas fa-adjust",
              iconColor: "primary",
            },
            {
              title: "Million Dollar Idea",
              subtitle:
                "If you have the next unique million dollar idea and you are willing to invest your time and money into it, you can contact us and we will make sure that your idea will turn into a reality! Providing the best route for you to take in order to introduce your application to the World.",
              iconClass: "fas fa-adjust",
              iconColor: "primary",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default FeaturesSection2;
