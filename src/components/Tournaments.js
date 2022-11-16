import React from "react";
import {Accordion} from "react-bootstrap";
import '../css/tournaments.css';
import { Tournament2019 } from "./tournaments/tournament2019";
import { Tournament2021 } from "./tournaments/tournament2021";
import { Tournament2022 } from "./tournaments/tournament2022";
import CaratUp from "../media/tournaments/CaratUp.png";
import CaratDown from "../media/tournaments/CaratDown.png";

export const Tournaments = () => {
  return (
    <div id="tournaments">
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header className="tournament">
                    <text className="accordion-label">2019</text>
                    <div className="accordion-arrow"/>
                </Accordion.Header>
                <Accordion.Body>
                    <Tournament2019/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header className="tournament">
                    <text className="accordion-label">2021</text>
                    <img className="accordion-arrow" src={CaratUp}/>
                </Accordion.Header>
                <Accordion.Body>
                    <Tournament2021/>
                </Accordion.Body>
            </Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header className="tournament">
								<text className="accordion-label">2022</text>
								<img className="accordion-arrow" src={CaratUp}/>
							</Accordion.Header>
							<Accordion.Body>
								<Tournament2022/>
							</Accordion.Body>
						</Accordion.Item>
        </Accordion>
    </div>
  );
};