
const MapMarkers = () => {
    return [
        {
          markerOffset: 25, xmarkerOffSet: 0, name: "UW", fullname: "University of Washington", coordinates: [-122.303200, 47.655548],
          popoverContent: (
            <div>
              <h1>UW Dueling Dawgz</h1>
              <p>Competed in:</p>
              <ul>
                <li>2019 Intercollegiate Championship</li>
                <li>2021 Intercollegiate Championship (2nd Place)</li>
              </ul>
              <p>Description:</p>
              <p>The Dueling Dawgz are the University of Washington's resident Yu-Gi-Oh! Club.
                They meet regularly on Fridays at UW's Husky Union Building. Meeting room announcements, 
                as well as all other details, can be found on their 
                <a href="https://discord.gg/aMzMMt2nS7"> Discord Server</a>.
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
                <li>2019 Intercollegiate Championship (1st Place)</li>
                <li>2021 Intercollegiate Championship (1st Place)</li>
              </ul>
              <p>Description:</p>
              <p>Yu-Gi-Ohio is Ohio State University’s resident Yugioh club and one of the largest collegiate 
                 TCG communities in the country. They meet Fridays at 5:30 in the Enarson Building Basement. 
                 You can join their discord <a href="https://discord.gg/2VQ36P9S">here.</a></p>
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
}

export default MapMarkers;