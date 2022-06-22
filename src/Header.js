import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './css/Header.css';
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from './media/logo.png';
import {NavLink} from "react-bootstrap";

export const Header = () => {
  return (
    <div id="header">
      <HeaderOffset />
      <Navbar className="navbar" fixed="top" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav"><FontAwesomeIcon icon={faBars} /></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="links">
            <LinkContainer to="/">
              <NavLink activeClassName="active" bsPrefix="link">Home </NavLink>
            </LinkContainer>
            <LinkContainer to="/tournament2019">
              <NavLink activeClassName="active" bsPrefix="link">2019 Intercollegiate Tournament</NavLink>
            </LinkContainer>
            <LinkContainer to="/tournament2021">
              <NavLink activeClassName="active" bsPrefix="link">2021 Intercollegiate Tournament</NavLink>
            </LinkContainer>
            <LinkContainer to="/Competitors">
              <NavLink activeClassName="active" bsPrefix="link">Competitors</NavLink>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>

        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Intercollegiate Yugioh logo"
            />
          </Navbar.Brand>
        </LinkContainer>
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