import React from 'react';
import { Link } from "react-router-dom";
import './css/index.css';

export const Header = () => {
  const OFFSET_HEADER = true;


  let divStyling = {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    padding: "0.7em",
    marginBottom: "1em",
    backgroundColor: "rgb(14, 21, 43)",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0"
  }
  return (
    <div>
      {OFFSET_HEADER && <HeaderOffset />}
      <div style={divStyling} className='Header'>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/link1">2021 Intercollegiate Tournament</StyledLink>
        <StyledLink to="/link2">2019 Intercollegiate Tournament</StyledLink>
        <StyledLink to="/link3">Competitors</StyledLink>
      </div>
    </div>
  );
};



function StyledLink(props) {
  let liStyling = {
    paddingLeft: "1em",
    paddingRight: "1em",
    listStyleType: "none"
  }
  let LinkStyling = {
    color: "rgb(78, 133, 133)"
  }
  return (
    <li style={liStyling}>
      <Link to={props.to} style={LinkStyling}>{props.children}</Link>
    </li>
  );
}

function HeaderOffset(props) {
  let offsetStyling = {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    padding: "0.7em",
    marginBottom: "1em",
    top: "0",
    left: "0",
    right: "0"
  }
  return (
    <div style={offsetStyling}></div>
  )
}
