import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "./../util/router.js";
import "./Footer.scss";

function Footer(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className="footer"
    >
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <Link to="/">
              <div>
                <img
                  className="FooterComponent__logo"
                  src={props.logo}
                  alt="Logo"
                />
              </div>
            </Link>

            {props.description && (
              <p className="FooterComponent__description">
                {props.description}
              </p>
            )}

            {props.copyright && (
              <p className="FooterComponent__copyright">{props.copyright}</p>
            )}
          </Col>
          <Col xs={12} md={8} lg={{ span: 6, offset: 2 }}>
            <div className="FooterComponent__menus">
              <Row>
                <Col xs={12} md={4} className="mt-3 mt-md-0">
                  <h5>Site Map</h5>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="FooterComponent__no-classname"
                        to="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://medium.com"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col xs={12} md={4} className="mt-3 mt-md-0">
                  <h5>Social</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://facebook.com"
                      >
                        <img
                          src="https://uploads.divjoy.com/icon-facebook.svg"
                          alt="Facebook"
                        />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://instagram.com"
                      >
                        <img
                          src="https://uploads.divjoy.com/icon-instagram.svg"
                          alt="Instagram"
                        />
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com"
                      >
                        <img
                          src="https://uploads.divjoy.com/icon-twitter.svg"
                          alt="Twitter"
                        />
                        Twitter
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col xs={12} md={4} className="mt-3 mt-md-0">
                  <h5>Phone</h5>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="tel:+1 (734) 474-0243">+1 (734) 474-0243</Link>
                    </li>
                  </ul>
                  <h5>Address</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.2611213426026!2d67.08993634994223!3d24.923172948802208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fafefe6db01%3A0xf0b757f6e732813b!2sMisbah%20Khan%20%26%20Associates!5e0!3m2!1sen!2s!4v1605437679653!5m2!1sen!2s">
                        2072 Windmill Court, Saline, MI 48176, USA
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default Footer;
