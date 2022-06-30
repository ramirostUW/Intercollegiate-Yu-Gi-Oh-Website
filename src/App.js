// App.js
import * as React from "react";
import {Routes, Route, Link, useLocation, useNavigate, Navigate} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './css/navbar.css';
import { Home } from "./components/Home";
import { Tournaments } from "./components/Tournaments";
import { Current } from "./components/Current";
import Navbar from "react-bootstrap/Navbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";
import {NavLink} from "react-bootstrap";
import logo from "./media/logo.png";
import {BrowserView, MobileView} from 'react-device-detect';

export function App() {
  /**
   * Contains:
   *  NAVBAR
   *  PAGE ROUTING
   */

  const [swiping, setSwiping] = React.useState(false);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchDistance, setTouchDistance] = React.useState(0);
  const TOUCH_SENSITIVITY_DISTANCE = 40;
  const MIN_TOUCH_DISTANCE = 100;
  const [currentPage, setCurrentPage] = React.useState(0);
  const pages = ["/home", "/current", "/tournaments"];
	const pageTitles = ["Home", "Current Tournament", "Past Tournaments"];
  // useNavigate code: https://stackoverflow.com/questions/68613526/react-router-dom-usehistory-not-working
  // useLocation code: https://stackoverflow.com/questions/45373742/detect-route-change-with-react-router
  // Translate code: https://javascript.plainenglish.io/how-to-make-a-simple-custom-drag-to-move-component-in-react-f67d5c99f925
  let navigate = useNavigate();
  let location = useLocation();

	function prevPageIndex(currPageIndex) {
		return (currPageIndex - 1) % pages.length;
	}

	function nextPageIndex(currPageIndex) {
		return (currPageIndex + 1) % pages.length;
	}

  // Track current page when user changes currently viewed page
  React.useEffect(() => {
    setCurrentPage(pages.findIndex((e) => e === location.pathname));
  }, [location])

  /**
   * MOBILE SWIPE NAVIGATION TOUCH HANDLERS
   */
  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
    setSwiping(true);
  }


  function handleTouchMove(e) {
    const currentTouchDistance = e.targetTouches[0].clientX - touchStart;
    if (swiping && Math.abs(currentTouchDistance) > TOUCH_SENSITIVITY_DISTANCE) {
      setTouchDistance(currentTouchDistance);
    }
  }


  function handleMoveEnd() {
    setSwiping(false);
    setTouchDistance(0);
    // If user swiped
    if (Math.abs(touchDistance) > MIN_TOUCH_DISTANCE) {
      let nextPage = currentPage;

      // right swipe
      if (touchDistance > MIN_TOUCH_DISTANCE) {
				nextPage = prevPageIndex(nextPage);

      // left swipe
      } else if (touchDistance < -MIN_TOUCH_DISTANCE) {
				nextPage = nextPageIndex(nextPage);
      }

      if (nextPage !== currentPage) {
        navigate(pages.at(nextPage), {state: true});
        setCurrentPage(nextPage);
      }
    }
  }


  /*
  // Mouse swipe functionality currently disabled,
  // add onMouseDown and onMouseMove to browser's div

  function handleMouseDown(e) {
    setTouchStart(e.clientX);
    setSwiping(true);
  }

  function handleMouseMove(e) {
    if (swiping) {
      setTouchDistance(e.clientX - touchStart);
    }
  }*/

  // Browser/Mobile Differentiation: https://stackoverflow.com/questions/39435395/reactjs-how-to-determine-if-the-application-is-being-viewed-on-mobile-or-deskto
  // Navbar collapse disable: https://stackoverflow.com/questions/42012446/bootstrap-4-disable-navbar-collapse-in-container
	// Redirect: https://stackabuse.com/redirects-in-react-router/
	/* Corner Logo
							<BrowserView>
							<LinkContainer to="/">
								<Navbar.Brand>
									<img
										src={logo}
										className="d-inline-block align-top"
										alt="Intercollegiate Yugioh logo"
									/>
								</Navbar.Brand>
							</LinkContainer>
						</BrowserView>
	 */
	/* Redirect route
	<Route path="/" element={ <Navigate to="/home" /> } />
						<Route path="/home" element={<Home />} />
          <Route path="/current" element={<Current />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="*"
                 element={
                   <main>
                     <h1>404 Error</h1>
                     <p>There's nothing here!</p>
                     <Link to="/">Return to home page</Link>
                   </main>
                 }
          />
	 */
	return (
    <div>
        <div id="header">
          <Navbar className="navbar navbar-expand" fixed="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav"><FontAwesomeIcon icon={faBars} /></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
							<BrowserView>
								<Nav id="links">
									<LinkContainer activeClassName="active-page" to="/home">
										<NavLink  bsPrefix="link" >Home</NavLink>
									</LinkContainer>
									<LinkContainer activeClassName="active-page" to="/current">
										<NavLink bsPrefix="link">Current Tournament</NavLink>
									</LinkContainer>
									<LinkContainer activeClassName="active-page" to="/tournaments">
										<NavLink bsPrefix="link">Past Tournaments</NavLink>
									</LinkContainer>
								</Nav>
							</BrowserView>
							<MobileView>
								<Nav id="links">
									<LinkContainer className="prev-page" activeClassName="active-page" to={pages.at(prevPageIndex(currentPage))}>
										<NavLink  bsPrefix="link" >{pageTitles.at(prevPageIndex(currentPage))}</NavLink>
									</LinkContainer>
									<LinkContainer activeClassName="active-page" to={pages.at(currentPage)}>
										<NavLink bsPrefix="link">{pageTitles.at(currentPage)}</NavLink>
									</LinkContainer>
									<LinkContainer className="next-page" activeClassName="active-page" to={pages.at(nextPageIndex(currentPage))}>
										<NavLink bsPrefix="link">{pageTitles.at(nextPageIndex(currentPage))}</NavLink>
									</LinkContainer>
								</Nav>
							</MobileView>
            </Navbar.Collapse>
					</Navbar>
        </div>
      <div id="current-page" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleMoveEnd}
            style={{transform: `translateX(${touchDistance}px)`}} >
        <Routes>
					<Route path="/" element={<h1>/</h1>} />
					<Route path="/home" element={<h1>/home</h1>} />
					<Route path="/current" element={<h1>/current</h1>} />
					<Route path="/tournaments" element={<h1>/tournaments</h1>} />
					<Route path="*"
								 element={
									 <main>
										 <h1>404 Error</h1>
										 <p>There's nothing here!</p>
										 <Link to="/">Return to home page</Link>
									 </main>
								 }
					/>
        </Routes>
      </div>
    </div>
  );
}

export default App;