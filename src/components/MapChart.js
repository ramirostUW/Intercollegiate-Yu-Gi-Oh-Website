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
const canadageoURL = "https://gist.githubusercontent.com/Saw-mon-and-Natalie/a11f058fc0dcce9343b02498a46b3d44/raw/e8afc74f791169a64d6e8df033d7e88ff85ba673/canada.json"
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
      )
    },
    {
      markerOffset: 20, xmarkerOffSet: 38, name: "Ohio State", fullname: "Ohio State Unversity", coordinates: [-83.0305, 40.0067],
      popoverContent: (<div>Popover Content Placeholder</div>)
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
    //University of Illinois Urbana-Champaign/Coordinates40.1020° N, 88.2272° W
    {
      markerOffset: -10, xmarkerOffSet: 0, name: "UIUC", fullname: "University of Illinois Urbana-Champaign", coordinates: [-88.2272, 40.1020],
      popoverContent: (<div>Popover Content Placeholder</div>)
    },
    //Georgia Institute of Technology 33.7756° N, 84.3963° W
    {
      markerOffset: -10, xmarkerOffSet: 0, name: "Georgia Tech", fullname: "Georgia Institute of Technology", coordinates: [-84.3963, 33.7756],
      popoverContent: (<div>Popover Content Placeholder</div>)
    },
    //Mount St. Mary's University/Coordinates 39.6800° N, 77.3487° W
    {
      markerOffset: -10, xmarkerOffSet: -30, name: "M. Saint Mary", fullname: "Mount St. Mary's University", coordinates: [-77.3487, 39.6800],
      popoverContent: (<div>Popover Content Placeholder</div>)
    },
    //University of South Florida/Coordinates 28.0587° N, 82.4139° W
    {
      markerOffset: 8, xmarkerOffSet: 20, name: "USF", fullname: "University of South Florida", coordinates: [-82.4139, 28.0587],
      popoverContent: (<div>Popover Content Placeholder</div>)
    },
    //Florida International University/Coordinates 25.7562° N, 80.3755° W
    {
      markerOffset: -10, xmarkerOffSet: -10, name: "FIU", fullname: "Florida International University", coordinates: [-80.3755, 25.7562],
      popoverContent: (<div>Popover Content Placeholder</div>)
    },
    {
      markerOffset: 20, xmarkerOffSet: -30, name: "MUOH", fullname: "Miami University of Ohio", coordinates: [-84.7345, 39.5087],
      popoverContent: (<div>Popover Content Placeholder</div>)
    },
    //44.3148° N, 85.6024
    {
      markerOffset: 20, xmarkerOffSet: 16, name: "Mich St", fullname: "Michigan State University", coordinates: [-85.6024, 44.3148],
      popoverContent: (<div>Popover Content Placeholder</div>)
    },
    //University of Pennsylvania/Coordinates 39.9522° N, 75.1932
    {
      markerOffset: 20, xmarkerOffSet: -00, name: "UPenn", fullname: "University of Pennsylvania", coordinates: [-75.1932, 43.4738],
      popoverContent: (<div>Popover Content Placeholder</div>)
    },
    //43.4738° N, 80.5275° W
    {
      markerOffset: -15, xmarkerOffSet: 20, name: "WLU", fullname: "Wilfrid Laurier University", coordinates: [-80.5275, 43.4738],
      popoverContent: (<div>Popover Content Placeholder</div>)
    },
    {
      markerOffset: 20, xmarkerOffSet: -30, name: "MS&T", fullname: "Missouri University of Science and Technology", coordinates: [-91.7756, 37.9537],
      popoverContent: (<div>Popover Content Placeholder</div>)
    },
    {
      markerOffset:-10, xmarkerOffSet: 35, name: "Cal Poly", fullname: "California Polytechnic State University", coordinates: [-120.6625, 35.3050],
      popoverContent: (<div>Popover Content Placeholder</div>)
    }//,
    //{
     // markerOffset: 0, xmarkerOffSet: 46, name: "Kent State", fullname: "Kent State University", coordinates: [-81.3433, 41.1498],
     // popoverContent: (<div>Popover Content Placeholder</div>)
    //},
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
        <Geographies geography={canadageoURL}>
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
        {markers.map(({ name, fullname, coordinates, markerOffset, xmarkerOffSet, popoverContent }) => (
          <Marker key={name} coordinates={coordinates}
            onMouseEnter={() => {
              setTooltipContent(fullname);
            }}
            onMouseLeave={() => {
              setTooltipContent("");
            }}>
            <circle r={7.5} fill="#F00" stroke="#fff" strokeWidth={2}
              onClick={function () {
                if(name == "UW"){
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