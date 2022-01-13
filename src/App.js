import React from "react";
import './css/index.css';
import { Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./Header.js";
import { Home } from "./Home.js";
import { Link1 } from "./Link1.js";

const App = () => {

  return (
    <div>
      <Header />
      <div className="OffsetTheHeader"></div>
      <Home />
    </div>
  );

};



export default App;
