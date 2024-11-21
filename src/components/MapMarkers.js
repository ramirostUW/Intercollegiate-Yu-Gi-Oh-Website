
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
                <li>2022 Intercollegiate Championship (2nd Place)</li>
              </ul>
              <br />
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
                <li>2022 Intercollegiate Championship</li>
              </ul>
              <br />
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
        //Mount St. Mary's College/Coordinates 41.5114° N, 74.0131° W
        {
          markerOffset: -10, xmarkerOffSet: -30, name: "M. Saint Mary", fullname: "Mount St. Mary's College", coordinates: [-74.0131, 41.5114],
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
        //University of Pennsylvania/Coordinates 39.9515° N, 75.1910° W
        {
          markerOffset: 20, xmarkerOffSet: 1, name: "UPenn", fullname: "University of Pennsylvania", coordinates: [-75.1910, 39.9515],
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
}

export default MapMarkers;