import React from "react";
import '../../css/index.css';
import '../../css/tournament20xx.css';
import { Tiles } from "../customElements/fastFactTiles";
import images2021 from "../../media/tournaments/2021";
import {CustomCarousel} from "../customElements/carousel";

export const Tournament2021 = () => {
    let tiles =  [
        {
          "title": "15",
          "text": "Total teams"
        },
        {
          "title": "45",
          "text": "Participants"
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

    let venueCarousel = [
        {
            "source": images2021.Venue1,
            "caption":""
        },
        {
            "source": images2021.Venue2,
            "caption":""
        }
    ];
    const venueLabel = "Venue: Duelingbook";

    let winnerCarousel = [
        {
            "source":images2021.Winner1,
            "caption":"Champions: Ohio State University (Team Scarlet)"
        },
        {
            "source":images2021.Winner2,
            "caption":"2nd Place: University of Washington (Team Beetron 2 - Electric Boogaloo)"
        },
        {
            "source":images2021.Winner3,
            "caption":"Semi-finalists: Kent State University (Team Blue)"
        },
        {
            "source":images2021.Winner4,
            "caption":"Semi-finalists: Miami University (Team MUGO)"
        }
    ];
    const winnerLabel= "2021 Winners";

    return (
        <div className="tournament-20xx" id="tournament2021">
            <div className={`carouselsPast`}>
                <CustomCarousel carouselType="venue" genre="past" data={venueCarousel} carouselLabel={venueLabel}/>
                <CustomCarousel carouselType="winner" genre="past" data={winnerCarousel} carouselLabel={winnerLabel}/>
            </div>
            <Tiles data={tiles} />
            <div className="text-information">
                <div className="description">
                    <h2>Description:</h2>
                    <p>
                        The 2021 Intercollegiate Championship was held remotely by Club Yu-Gi-Ohio from Ohio State
                        University, replacing the 2020 event that was canceled due to the COVID-19 pandemic.
                        It was held online on October 16th, 2021. This Event followed the October 1st, 2021 Yu-Gi-Oh TCG
                         Banlist, and was played with teams of 3.
                    </p>
                </div>
                <div className="sponsors">
                    <h2>List of Sponsors</h2>
                    <ul>
                        <li>No Limit Gaming</li>
                        <li>Refined Gaming</li>
                        <li>TCG-Con</li>
                        <li>Heroes and Games</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};