import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import './NavbarCustom.css'

function NavbarCustom(props) {
  
  return (
    <Navbar className="fixedNavbar" bg={props.bg} variant={props.variant} expand={props.expand}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src={props.logo}
              alt="Logo"
              height="30"
            />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="mr-1 ">
            <LinkContainer to="#about">
              <Nav.Link active={false}>About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="#features">
              <Nav.Link active={false}>Features</Nav.Link>
            </LinkContainer>

            <LinkContainer to="#services">
              <Nav.Link active={false}>Services</Nav.Link>
            </LinkContainer>

            <LinkContainer to="#contact">
              <Nav.Link active={false}>Contact</Nav.Link>
            </LinkContainer>

            <LinkContainer to="#workHistory">
              <Nav.Link active={false}>Work History</Nav.Link>
            </LinkContainer>

            <LinkContainer to="#FAQ">
              <Nav.Link active={false}>FAQ</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/all-blogs">
              <Nav.Link active={false}>Blogs</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
