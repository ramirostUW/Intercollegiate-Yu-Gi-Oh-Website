import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import {geoAlbersUsa} from "d3-composite-projections"

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"


const projection = geoAlbersUsa().translate([600, 240])

const MapChart = (props) => {

  //{ setTooltipContent }
  return (
    <div>
      <ComposableMap data-tip=""
        width={1200}
        height={485}
        style={{ width: "auto", height: "auto", display: "inline-block", margin: "auto" }}
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
                  fill: "#005B67",
                  outline: "none"
                },
                pressed: {
                  fill: "#005B67",
                  outline: "none"
                }
              }
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    //const { NAME, POP_EST } = geo.properties;
                    //setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                  }}
                  onMouseEnter={() => {
                    //const { NAME, POP_EST } = geo.properties;
                    //setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                  }}
                  onMouseLeave={() => {
                    //setTooltipContent("");
                  }}
                  style={style}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapChart;