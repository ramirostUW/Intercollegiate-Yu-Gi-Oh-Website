import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";


export const Header = () => {
  return (
    <div>
      <HeaderOffset />
      <Navbar className="nav header" fixed="top" expand="lg" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand>Intercollegiate YGO</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/link1">
              <Nav.Link>2021 Intercollegiate Tournament</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/link2">
              <Nav.Link>2019 Intercollegiate Tournament</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/link3">
              <Nav.Link>Competitors</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

function HeaderOffset(props) {
  let offsetStyling = {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    padding: "1.5em",
    marginBottom: "1em",
    top: "0",
    left: "0",
    right: "0"
  }
  return (
    <div style={offsetStyling}></div>
  )
}