import React, {useEffect, useState} from "react";
import '../css/index.css';
import '../css/current.css';
import images2022 from "../media/tournaments/2022";
import {CustomCarousel} from "./customElements/carousel";

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
	const venueLabel = "Venue: Husky Union Building — Lyceum Ballroom";

	let personalityCarousel = [
			{
				"source":images2022.Personality1,
				"caption":"TheRJB0"
			}
	];
	const personalityLabel= "Personalities";

	// Youtube embed code: https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2
// 											 https://support.google.com/youtube/answer/171780?hl=en
	return (
	<div id="current">
		<div className="banner">
				<img src={images2022.Banner} alt="Intercollegiate 2022 Banner"/>
		</div>
		<div className="carousels">
			<div className="carousel-column">
				<CustomCarousel carouselType="venue" data={venueCarousel} carouselLabel={venueLabel} labelPosition="above"/>
				<iframe src="https://www.youtube.com/embed/Sqh4I_3kqFk" title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								className="trailer"/>
			</div>
			<CustomCarousel carouselType="personality"
											data={personalityCarousel} carouselLabel={personalityLabel} labelPosition="above"/>
		</div>
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