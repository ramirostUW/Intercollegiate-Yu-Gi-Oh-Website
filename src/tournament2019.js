import React, { useState, useEffect }  from "react";
import './css/index.css';
import { Link } from "react-router-dom";
import { Tiles } from "./fastFactTiles";
export const Tournament2019 = () => {
  let dataF =  [
    {
      "title": "7",
      "text": "Total teams"
    },
    {
      "title": "35",
      "text": "participants"
    },
    {
      "title": "1500",
      "text": "Viewers on Twitch"
    },
    {
      "title": "$2000",
      "text": "In Prize Support"
    }
  ]

  //&#8209; is a non-line-breaking dash
  return (
    <div id="tournament2019">
      <h1>2019 Intercollegiate Championship</h1>
      <h2>Tournament Statistics:</h2>
      <Tiles data={dataF} />
      <h2>Description:</h2>
      <p>
        The 2019 Intercollegiate Championship was the inaugural tournament, organized and hosted
        by Club Yu-Gi-Ohio from Ohio State University. It was held on October 19th, 2019 in OSU's 
        Recreation and Physical Activity Center (RPAC). 
      </p>
      <h2>List of Sponsors</h2>
      <ul>
        <li>No Limit Gaming </li>
        <li>Pixel Palace Games</li>
        <li>Heroes and Games</li>
        <li>Worthy Financial</li>
      </ul>
      <h2>Rules and Procedures</h2>
      <p>
        This Event followed the Monday, July 15th, 2019 Yu-Gi-Oh TCG Banlist. 
        All standard Konami Tournament Rules and Procedures in effect at that 
        moment applied, with exception of allowing digital tracking of life 
        points (although paper records would take priority in the event of 
        disputes). Additionally, instead of being an individual player tournament,
        the tournament was played in teams of 5, with each school getting the chance to 
        submit up to 2 teams. Each team would designate each player with a letter from 
        A to E. Each of the 5 players would then participate in different tournament 
        brackets with other players of the same letter, known as “Heats” (All Player A's
        would play in Heat A, all Player B's in Heat B, and so on). Each Heat played 3 rounds 
        of Swiss, and the top 4 teams with the highest points moved on to Single Elimination
        Top Cut.
        <br />
      </p>
      <h2>Results</h2>
      <ul>
        <li>Champions: Ohio State University (Team Scarlet)</li>
        <li>2nd Place: Indiana University Bloomington (Team IU)</li>
        <li>Semi-finalists: Miami University (Team MUGO)</li>
        <li>Semi-finalists: Kent State University (Team KSU)</li>
      </ul>
      <Link to="/">Return to home page</Link>
    </div>
  );
};