import React, { useState, useEffect }  from "react";
import './css/index.css';
import { Link } from "react-router-dom";
import { Tiles } from "./fastFactTiles";
export const Tournament2021 = () => {
  let dataF =  [
    {
      "title": "15",
      "text": "Total teams"
    },
    {
      "title": "45",
      "text": "participants"
    },
    {
      "title": "2000",
      "text": "Viewers on Twitch"
    },
    {
      "title": "$1050",
      "text": "In Prize Support"
    }
  ]

  //&#8209; is a non-line-breaking dash
  return (
    <div id="tournament2021">
      <h1>2021 Intercollegiate Championship</h1>
      <h2>Tournament Statistics:</h2>
      <Tiles data={dataF} />
      <h2>Description:</h2>
      <p>
        The 2021 Intercollegiate Championship was the second tournament, organized and hosted
        by Club Yu-Gi-Ohio from Ohio State University and following the inaugural 2019 championship, 
        as well as replacing the 2020 event that was canceled due to the COVID-19 pandemic. 
        It was held online (due to the ongoing pandemic) on October 16th, 2021. 
      </p>
      <h2>List of Sponsors</h2>
      <ul>
        <li>No Limit Gaming</li>
        <li>Refined Gaming</li>
        <li>TCG-Con</li>
        <li>Heroes and Games</li>
      </ul>
      <h2>Rules and Procedures</h2>
      <p>
        This Event followed the October 1st, 2021 Yu-Gi-Oh TCG Banlist. 
        All standard Konami Tournament Rules and Procedures in effect at that 
        moment applied. The event served as a soft reboot of the Championship by 
        transitioning to Konami's official 3v3 ruleset, with each school having the
        option of submitting up to 3 teams each (for a maximum of 9 players). 
        <br />
      </p>
      <h2>Results</h2>
      <ul>
        <li>Champions: Ohio State University (Team Scarlet)</li>
        <li>2nd Place: University of Washington (Team Beetron 2 - Electric Boogaloo)</li>
        <li>Semi-finalists: Kent State University (Team Blue)</li>
        <li>Semi-finalists: Miami University (Team MUGO)</li>
      </ul>
      <Link to="/">Return to home page</Link>
    </div>
  );
};