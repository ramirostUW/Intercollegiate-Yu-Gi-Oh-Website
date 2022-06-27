import React from "react";
import '../../css/index.css';
import '../../css/tournament20xx.css';
import { Tiles } from "./fastFactTiles";
import {Carousels} from "./carousels";
import images2019 from "../../media/tournaments/2019";

export const Tournament2019 = () => {
    let tiles =  [
        {
          "title": "7",
          "text": "Total teams"
        },
        {
          "title": "35",
          "text": "Participants"
        },
        {
          "title": "1500",
          "text": "Viewers on Twitch"
        },
        {
          "title": "$2000",
          "text": "In Prize Support"
        }
    ];

    let venueCarousel = [
        {
            "source": images2019.Venue1,
            "caption":""
        },
        {
            "source": images2019.Venue2,
            "caption":""
        },
        {
            "source": images2019.Venue3,
            "caption":""
        },
        {
            "source": images2019.Venue4,
            "caption":""
        },
        {
            "source": images2019.Venue5,
            "caption":""
        }
    ];
    const venueLabel = "Venue: OSU's Recreation and Physical Activity Center (RPAC)";

    let winnerCarousel = [
        {
            "source":images2019.Winner1,
            "caption":"Champions: Ohio State University (Team Scarlet)"
        },
        {
            "source":images2019.Winner2,
            "caption":"2nd Place: Indiana University Bloomington (Team IU)"
        },
        {
            "source":images2019.Winner3,
            "caption":"Semi-finalists: Miami University (Team MUGO)"
        },
        {
            "source":images2019.Winner4,
            "caption":"Semi-finalists: Kent State University (Team KSU)"
        }
    ];
    const winnerLabel= "2019 Winners";

    return (
        <div className="tournament-20xx" id="tournament2019">
            <Carousels venues={venueCarousel} venueLabel={venueLabel} winners={winnerCarousel} winnerLabel={winnerLabel}/>
            <Tiles data={tiles} />
            <div className="text-information">
                <div className="description">
                    <h2>Description:</h2>
                    <p>
                        The inaugural 2019 Intercollegiate Championship was held by Club Yu-Gi-Ohio from Ohio State
                        University on October 19th, 2019. This Event followed the July 15th, 2019 Yu-Gi-Oh TCG Banlist, and
                        was played with teams of 5 (up to two teams per school).
                    </p>
                </div>
                <div className="sponsors">
                    <h2>List of Sponsors</h2>
                    <ul>
                        <li>No Limit Gaming </li>
                        <li>Pixel Palace Games</li>
                        <li>Heroes and Games</li>
                        <li>Worthy Financial</li>
                    </ul>
                </div>
            </div>
        </div>
    );
    };