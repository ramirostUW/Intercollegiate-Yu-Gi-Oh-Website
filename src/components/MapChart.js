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
import MapMarkers from "./MapMarkers";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"
//const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";


const projection = geoAlbersUsa().translate([400, 240])


const MapChart = (props) => {

  const [content, setTooltipContent] = useState("");
  const markers = MapMarkers();
  
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
      },
      "& h1": {
        fontSize: "15vmin"
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
          <ZoomableGroup>
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
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;