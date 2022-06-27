import React from "react";
import '../css/index.css';
import '../css/home.css'
import logo from '../media/logo.png';
import imagesHome from "../media/home";
import MapChart from "./MapChart";

export const Home = () => {

    //&#8209; is a non-line-breaking dash
    // <h1 className="home-text">Intercollegiate Yu&#8209;Gi&#8209;Oh!</h1>
    return (
    <div id="home">
        <div id="home-background-container">
            <img id="home-background" src={logo} alt="Intercollegiate Logo" />
        </div>
        <img id="home-title" src={imagesHome.title} alt="Intercollegiate Tournament Series"/>
        <img id="home-cover-image" src={imagesHome.coverImage} alt="Intercollegiate Students Dueling"/>
        <h2 className="home-text" id="home-h2">What is Intercollegiate Yu-Gi-Oh?</h2>
        <p className="home-text" id="home-description">
            Intercollegiate Yu-Gi-Oh is an annual team-based Yu-Gi-Oh! competition between representatives from
            various colleges, created by Brendan Outlaw of Ohio State University in 2019. Tournaments follow the
            latest TCG banlist and are typically played in multiple rounds of Swiss followed by a Top 4 Top-Cut.
        </p>
        <MapChart/>
        <a className="home-text" id="home-invite-link" href={"https://discord.gg/M3KMYppbRm"}>
            Click to join our Discord!
        </a>
        <img id="home-invite-QR" src={imagesHome.QRInvite}/>
    </div>
    );
};