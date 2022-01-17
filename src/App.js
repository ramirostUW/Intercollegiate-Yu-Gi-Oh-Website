// App.js
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Link1 } from "./Link1";

export function App() {
  return (
    <div>
      <Header />
      <div className="OffsetTheHeader"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Link1" element={<Link1 />} />
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