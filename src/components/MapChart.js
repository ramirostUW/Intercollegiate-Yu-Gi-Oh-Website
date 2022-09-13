import React, { memo, useState } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import { Popover, ClickAwayListener } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { geoAlbersUsa } from "d3-composite-projections";
import ReactTooltip from "react-tooltip";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"
//const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";


const projection = geoAlbersUsa().translate([400, 240])


const MapChart = (props) => {

  const [content, setTooltipContent] = useState("");
  const markers = [
    {
      markerOffset: 25, xmarkerOffSet: 0, name: "UW", fullname: "University of Washington", coordinates: [-122.303200, 47.655548],
      popoverContent: (
        <div>
          <h1>UW Dueling Dawgz</h1>
          <p>Competed in:</p>
          <ul>
            <li>2019 Intercollegiate Championship</li>
            <li>2021 Intercollegiate Championship</li>
          </ul>
          <p>Description:</p>
          <p>The Dueling Dawgz are the University of Washington's resident Yu-Gi-Oh! Club.
            They meet regularly on Fridays at UW's Husky Union Building. Meeting room announcements
            can be found on their <a href="https://discord.gg/aMzMMt2nS7">Discord Server</a>.
          </p>
        </div>
      ),
      cardEnabled: true
    },
    {
      markerOffset: 20, xmarkerOffSet: 38, name: "Ohio State", fullname: "Ohio State Unversity", coordinates: [-83.0305, 40.0067],
      popoverContent: (
        <div>
          <h1>Club Yu-Gi-Ohio</h1>
          <p>Competed in:</p>
          <ul>
            <li>2019 Intercollegiate Championship</li>
            <li>2021 Intercollegiate Championship</li>
          </ul>
          <p>Description:</p>
          <p>Yu-Gi-Ohio is Ohio State University’s resident Yugioh club and one of the largest collegiate 
             TCG communities in the country. They meet Fridays at 5:30 in the Enarson Building Basement.</p>
        </div>
      ),
      cardEnabled: true
    },
    {
      markerOffset: 25, xmarkerOffSet: 0, name: "UNT", fullname: "University of North Texas", coordinates: [-97.1526, 33.2075],
      popoverContent: (<div>Popover Content Placeholder</div>)
    },
    {
      markerOffset: 5, xmarkerOffSet: 23, name: "UCR", fullname: "University of California - Riverside", coordinates: [-117.3281, 33.9737],
      popoverContent: (<div>Popover Content Placeholder</div>)
    },
    {
      markerOffset: -10, xmarkerOffSet: 0, name: "UCLA", fullname: "University of California - Los Angeles", coordinates: [-118.4452, 34.0689],
      popoverContent: (<div>Popover Content Placeholder</div>)
    },
    {
      markerOffset: 5, xmarkerOffSet: 26, name: "UCSD", fullname: "University of California - San Diego", coordinates: [-117.2340, 32.8801],
      popoverContent: (<div>Popover Content Placeholder</div>)
    },
    {
      markerOffset: 18, xmarkerOffSet: 15, name: "Arizona State", fullname: "Arizona State University", coordinates: [-111.9281, 33.4242],
      popoverContent: (<div>Popover Content Placeholder</div>)
    },
    {
      markerOffset: -10, xmarkerOffSet: 0, name: "UF", fullname: "University of Florida", coordinates: [-82.3549, 29.6436],
      popoverContent: (<div>Popover Content Placeholder</div>)
    },
    {
      markerOffset: 20, xmarkerOffSet: -30, name: "MUOH", fullname: "Miami University of Ohio", coordinates: [-84.7345, 39.5087],
      popoverContent: (<div>Popover Content Placeholder</div>)
    },
    {
      markerOffset: 0, xmarkerOffSet: 46, name: "Kent State", fullname: "Kent State University", coordinates: [-81.3433, 41.1498],
      popoverContent: (<div>Popover Content Placeholder</div>)
    }
  ];


  const useStyles = makeStyles(theme => ({
    popoverRoot: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: "10%",
      marginBottom: "10%",
      marginRight: "10%",
      marginLeft: "10%",
      minHeight: "100px",
      "& a": {
        color: "#00ADB5"
      }
    },
    backDrop: {
      backdropFilter: "blur(3px)",
      backgroundColor: 'rgba(0,0,30,0.4)'
    },
    testOne: {
      backgroundColor: "#045caf",
      color: "white",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: "15px",
      borderStyle: "solid",
      borderWidth: "thick",
      borderColor: "#EEEEEE",
      padding: "10px"
    }
  }));
  //backdropFilter: "grayscale(30%)",

  let [popoverDisplayed, setPopoverDisplayed] = useState(false);
  let [popoverContent, setPopoverContent] = useState((<div>Popover Content Placeholder</div>));

  const MoreDetailsPopover = ({ open }) => {

    const classes = useStyles();
    return (
      popoverDisplayed && <Popover
        open
        anchorReference={"none"}
        BackdropProps={{
          onClick: function () { setPopoverDisplayed(false) },
          classes: {
            root: classes.backDrop,
          }
        }}
        classes={{
          root: classes.popoverRoot

        }}
      >
        <div className={`${classes.testOne}`} >
          {popoverContent}
        </div>
      </Popover>
    )
  }

  //yeah i made a separate func for the popover stuff
  //so i didnt fuck up the map code
  return (
    <div id="map">
      <MoreDetailsPopover />
      <ReactTooltip>{content}</ReactTooltip>
      <ComposableMap data-tip=""
        projection={projection} >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {

              const { NAME, POP_EST } = geo.properties;
              let restingColor = "#E2EDEA";
              let style = {
                default: {
                  fill: restingColor,
                  stroke: "#005B67",
                  outline: "none",
                  strokeWidth: "0.4"
                },
                hover: {
                  //fill: "#005B67",
                  fill: restingColor,
                  outline: "none",
                  stroke: "#005B67",
                  strokeWidth: "0.4"
                },
                pressed: {
                  /*
                  fill: "#005B67",
                  outline: "none"
                  */
                  fill: restingColor,
                  outline: "none",
                  stroke: "#005B67",
                  strokeWidth: "0.4"
                }
              }
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => { }}
                  onMouseEnter={() => { }}
                  onMouseLeave={() => { }}
                  style={style}
                />
              )
            })
          }
        </Geographies>
        {markers.map(({ name, fullname, coordinates, markerOffset, xmarkerOffSet, popoverContent, cardEnabled }) => (
          <Marker key={name} coordinates={coordinates}
            onMouseEnter={() => {
              setTooltipContent(fullname);
            }}
            onMouseLeave={() => {
              setTooltipContent("");
            }}>
            <circle r={7.5} fill="#F00" stroke="#fff" strokeWidth={2}
              onClick={function () {
                if(cardEnabled){
                  setPopoverContent(popoverContent)
                  setPopoverDisplayed(true)
                }
                
              }} />
            <text
              textAnchor="middle"
              x={xmarkerOffSet}
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default MapChart;