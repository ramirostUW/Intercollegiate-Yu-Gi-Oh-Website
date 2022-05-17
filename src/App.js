// App.js
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./Header";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Tournament2019 } from "./tournament2019";
import { Tournament2021 } from "./tournament2021";
import { Competitors } from "./Competitors";

export function App() {
  return (
    <div>
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