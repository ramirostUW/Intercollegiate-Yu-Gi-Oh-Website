import React from "react";
import './css/index.css';
import { Link } from "react-router-dom";

export const Link1 = () => {

  //&#8209; is a non-line-breaking dash
  return (
    <div>
      <h1>Link1</h1>
      <Link to="/">Return to home page</Link>
    </div>
  );
};