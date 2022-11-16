import React, {useEffect, useState} from "react";
import '../../css/index.css';
import '../../css/tournament20xx.css';
import { Tiles } from "../customElements/fastFactTiles";
import images2022 from "../../media/tournaments/2022";
import {CustomCarousel} from "../customElements/carousel";

export const Tournament2022 = () => {
	// Render tiles differently based on screen width
	// Resize code: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
	const [fitTiles, setFitTiles] = useState(!(window.innerWidth < 1320))

	const handleResize = () => {
		if (window.innerWidth < 1320) {
			setFitTiles(false)
		} else {
			setFitTiles(true)
		}
	}

	useEffect(() => {
		window.addEventListener("resize", handleResize)
	})

	let tiles =  [
			{
				"title": "6",
				"text": "Teams"
			},
			{
				"title": "18",
				"text": "Participants"
			},
			{
				"title": "520",
				"text": "Cumulative Viewers"
			},
			{
				"title": "$1145",
				"text": "Prize Support"
			}
	]

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
				"caption":"Sweaters/Patches provided by Millenium Threads"
			},
			{
				"source": images2022.Venue5,
				"caption":"Ya Boi RJ"
			}
	];
	const venueLabel = "Venue: UW's Lyceum";

	let winnerCarousel = [
			{
					"source":images2022.Winner1,
					"caption":"Champions: University of Washington (Team Pog)"
			},
			{
					"source":images2022.Winner2,
					"caption":"2nd Place: University of California - Riverside (The MTG Club)"
			},
			{
					"source":images2022.Winner3,
					"caption":"University of Washington (Team GT)"
			},
			{
					"source":images2022.Winner4,
					"caption":"University of Washington (Team Beetron 2: Electric Boogaloo)"
			},
			{
				"source":images2022.Winner5,
				"caption":"Ohio State University (Team Scarlet)"
			},
			{
				"source":images2022.Winner6,
				"caption":"Cal Poly University(Team Super Poly)"
			}
	];
	const winnerLabel= "2022 Teams";

	return (
			<div className="tournament-20xx" id="tournament2022">
				<div className={`carousels`}>
					<div className={`carousels`}>
						<CustomCarousel carouselType="venue" data={venueCarousel} carouselLabel={venueLabel}/>
						{fitTiles && <Tiles data={tiles} />}
						<CustomCarousel carouselType="winner" data={winnerCarousel} carouselLabel={winnerLabel}/>
					</div>
				</div>
				{!fitTiles && <Tiles data={tiles} />}
				<div className="text-information">
					<div className="description">
						<h2>Description:</h2>
						<p>
							The 2022 Intercollegiate Championship was held remotely by the Dueling Dawgz from University of
							Washington on October 29th, 2022. This Event followed the October 3st, 2022 Yu-Gi-Oh TCG
							Banlist, and was played with teams of 3. The event was commented by RJB0 and Ben Dang, and streamed
							on the former's twitch channel.
						</p>
					</div>
					<div className="sponsorLogos">
						<img src={images2022.HUBLogo}/>
						<img src={images2022.MilleniumLogo}/>
					</div>
					<div className="sponsors">
						<h2>List of Sponsors</h2>
						<ul>
							<li>Husky Union Building(HUB)</li>
							<li>Millenium Threads</li>
							<li>Refined Gaming</li>
						</ul>
					</div>
				</div>
			</div>
	);
};