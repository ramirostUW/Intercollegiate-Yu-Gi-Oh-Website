// App.js
import * as React from "react";
import {Routes, Route, Link, useLocation, useNavigate, Navigate} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './css/Navbar.css';
import { Home } from "./components/Home";
import { Tournaments } from "./components/Tournaments";
import { Competitors } from "./components/Competitors";
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
  const pages = ["/", "/Competitors", "/tournaments", ];
  // useNavigate code: https://stackoverflow.com/questions/68613526/react-router-dom-usehistory-not-working
  // useLocation code: https://stackoverflow.com/questions/45373742/detect-route-change-with-react-router
  // Translate code: https://javascript.plainenglish.io/how-to-make-a-simple-custom-drag-to-move-component-in-react-f67d5c99f925
  let navigate = useNavigate();
  let location = useLocation();


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
        nextPage = (nextPage + 1) % pages.length;

      // left swipe
      } else if (touchDistance < -MIN_TOUCH_DISTANCE) {
        nextPage = (nextPage - 1) % pages.length;
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

  function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
  }

  // Browser/Mobile Differentiation: https://stackoverflow.com/questions/39435395/reactjs-how-to-determine-if-the-application-is-being-viewed-on-mobile-or-deskto
  return (
    <div>
      <BrowserView>
        <div id="header">
          <Navbar className="navbar" fixed="top" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"><FontAwesomeIcon icon={faBars} /></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav id="links">
                <LinkContainer activeClassName="active-page" to="/">
                  <NavLink  bsPrefix="link" >Home </NavLink>
                </LinkContainer>
                <LinkContainer activeClassName="active-page" to="/competitors">
                  <NavLink bsPrefix="link">Competitors</NavLink>
                </LinkContainer>
                <LinkContainer activeClassName="active-page" to="/tournaments">
                  <NavLink bsPrefix="link">Past Tournaments</NavLink>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>

            <LinkContainer to="/">
              <Navbar.Brand>
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Intercollegiate Yugioh logo"
                />
              </Navbar.Brand>
            </LinkContainer>
          </Navbar>
        </div>
      </BrowserView>
      <MobileView>
        <div id="header">
          <Navbar className="navbar" fixed="top" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"><FontAwesomeIcon icon={faBars} /></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav id="links">
                <LinkContainer activeClassName="active-page" to="/">
                  <NavLink  bsPrefix="link" >Home </NavLink>
                </LinkContainer>
                <LinkContainer activeClassName="active-page" to="/competitors">
                  <NavLink bsPrefix="link">Competitors</NavLink>
                </LinkContainer>
                <LinkContainer activeClassName="active-page" to="/tournaments">
                  <NavLink bsPrefix="link">Past Tournaments</NavLink>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>

            <LinkContainer to="/">
              <Navbar.Brand>
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Intercollegiate Yugioh logo"
                />
              </Navbar.Brand>
            </LinkContainer>
          </Navbar>
        </div>
      </MobileView>
      <div id="current-page" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleMoveEnd}
            style={{transform: `translateX(${touchDistance}px)`}} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competitors" element={<Competitors />} />
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
        </Routes>
      </div>
    </div>
  );
}

export default App;