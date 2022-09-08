import React, {useEffect, useState} from "react";
import '../css/index.css';
import '../css/home.css'
import imagesHome from "../media/home";
import MapChart from "./MapChart";

export const Home = () => {
	// Resize code: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
	const [fitDescription, setFitDescription] = useState(!(window.innerWidth < 800))

	const handleResize = () => {
		if (window.innerWidth < 800) {
			setFitDescription(false)
		} else {
			setFitDescription(true)
		}
	}

	useEffect(() => {
		window.addEventListener("resize", handleResize)
	})

	//&#8209; is a non-line-breaking dash
	// <h1 className="home-text">Intercollegiate Yu&#8209;Gi&#8209;Oh!</h1>
	// <img id="home-background" src={logo} alt="Intercollegiate Logo" />
	return (
	<div id="home">
		<img className="title" src={imagesHome.title} alt="Intercollegiate Tournament Series"/>
		<div className="cover">
			<img className="cover-image" src={imagesHome.coverImage} alt="Intercollegiate Students Dueling"/>
			{fitDescription &&
			<div className="cover-description">
				<h2>What is Intercollegiate Yu-Gi-Oh?</h2>
				<p className="description">
					Intercollegiate Yu-Gi-Oh is an annual team-based Yu-Gi-Oh! competition between representatives from
					various colleges, created by Brendan Outlaw of Ohio State University in 2019. Tournaments follow the
					latest TCG banlist and are typically played in multiple rounds of Swiss followed by a Top 4 Top-Cut.
				</p>
			</div>}
		</div>
		{!fitDescription &&
		<div className="cover-description">
			<h2>What is Intercollegiate Yu-Gi-Oh?</h2>
			<p className="description">
				Intercollegiate Yu-Gi-Oh is an annual team-based Yu-Gi-Oh! competition between representatives from
				various colleges, created by Brendan Outlaw of Ohio State University in 2019. Tournaments follow the
				latest TCG banlist and are typically played in multiple rounds of Swiss followed by a Top 4 Top-Cut.
			</p>
		</div>}
		<MapChart/>
		<a className="invite-link" href={"https://discord.gg/M3KMYppbRm"}>
			Click to join our Discord!
		</a>
		<img className="invite-QR" src={imagesHome.QRInvite}/>
	</div>
	);
};