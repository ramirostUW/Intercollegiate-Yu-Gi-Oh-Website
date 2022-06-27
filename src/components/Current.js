import React from "react";
import '../css/index.css';
import '../css/current.css';
import {Carousels} from "./customElements/carousels";
import images2022 from "../media/tournaments/2022";

export const Current = () => {
    let venueCarousel = [
        {
            "source": images2022.Venue1,
            "caption":""
        },
        {
            "source": images2022.Venue2,
            "caption":""
        },
        {
            "source": images2022.Venue3,
            "caption":""
        },
        {
            "source": images2022.Venue4,
            "caption":""
        },
        {
            "source": images2022.Venue5,
            "caption":""
        }
    ];
    const venueLabel = "Venue: UW's Husky Union Building Lyceum Ballroom";

    let personalityCarousel = [
        {
            "source":images2022.Personality1,
            "caption":"TheRJB0"
        }
    ];
    const personalityLabel= "Personalities";

    return (
    <div id="current">
        <div className="banner">
            <img src={images2022.Banner} alt="Intercollegiate 2022 Banner"/>
        </div>
        <Carousels venues={venueCarousel} venueLabel={venueLabel}
            winners={personalityCarousel} winnerLabel={personalityLabel}
            current={true}/>
        <div className="text-information">
            <div className="description">
                <h2>Description:</h2>
                <p>
                    The 2022 Intercollegiate Championship will be held by UW Dueling Dawgz from University of Washington
                    on October 29, 2022, 11:00 AM PST. This Event will follow the latest TCG Banlist at the time of the
                    event, and will played with teams of 3 (up to three teams per school). The tournament structure will
                    be Swiss, followed by a Top 4 Single-Elimination Top Cut.
                </p>
            </div>
            <div className="sponsors">
                <h2>List of Sponsors</h2>
                <ul>
                    <li>Soon</li>
                </ul>
            </div>
        </div>
    </div>
    );
};