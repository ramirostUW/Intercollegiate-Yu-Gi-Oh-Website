import React, { useState, useEffect }  from "react";
import './css/index.css';
import { Link } from "react-router-dom";
import { Tiles } from "./fastFactTiles";
export const Link1 = () => {
  let dataF =  [
    {
      "icon": "fa fa-comments-o",
      "title": "7",
      "text": "Total teams"
    },
    {
      "icon": "fa fa-bullhorn",
      "title": "35",
      "text": "participants"
    },
    {
      "icon": "fa fa-group",
      "title": "1500",
      "text": "Viewers on Twitch"
    }
  ]
  /*
  ,
    {
      "icon": "fa fa-magic",
      "title": "Lorem ipsum",
      "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    }
  */
  //&#8209; is a non-line-breaking dash
  return (
    <div>
      <h1>Link1</h1>
      <Tiles data={dataF} />
      <Link to="/">Return to home page</Link>
    </div>
  );
};