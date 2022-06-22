// App.js
import * as React from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Tournament2019 } from "./tournament2019";
import { Tournament2021 } from "./tournament2021";
import { Competitors } from "./Competitors";



export function App() {
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(0);
  const pages = ["/", "/tournament2019", "/tournament2021", "/Competitors"];
  // useNavigate code: https://stackoverflow.com/questions/68613526/react-router-dom-usehistory-not-working
  // useLocation code: https://stackoverflow.com/questions/45373742/detect-route-change-with-react-router
  let navigate = useNavigate();
  let location = useLocation();

  React.useEffect(() => {
    setCurrentPage(pages.findIndex((e) => e === location.pathname));
  }, [location])

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleMouseDown(e) {
    setTouchStart(e.clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleMouseMove(e) {
    setTouchEnd(e.clientX);
  }

  function handleMoveEnd() {
    // If user swiped
    if (Math.abs(touchEnd - touchStart) > 50) {
      let nextPage = currentPage;

      // right swipe
      if (touchEnd - touchStart > 50 && currentPage < pages.length - 1) {
        ++nextPage;

      // left swipe
      } else if (touchEnd - touchStart < -50 && currentPage > 0) {
        --nextPage;
      }

      if (nextPage !== currentPage) {
        setTouchStart(touchEnd);
        //location.
        navigate(pages.at(nextPage), {state: true});
        setCurrentPage(nextPage);
      }
    }
  }

  return (
    <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleMoveEnd}
      onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMoveEnd}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Tournament2019" element={<Tournament2019 />} />
        <Route path="Tournament2021" element={<Tournament2021 />} />
        <Route path="Competitors" element={<Competitors />} />
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
  );
}



export default App;