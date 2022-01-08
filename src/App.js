import React from "react";
import './css/index.css';
import logo from './media/logo.png';
import { Header } from "./Header.js";

const App = () => {

//&#8209; is a non-line-breaking dash
  return (
    <div>
      <Header />
      <div className="OffsetTheHeader"></div>
      <h1>Intercollegiate Yu&#8209;Gi&#8209;Oh!</h1>
      <h2> Website coming soon!</h2>
	  <img className={"logoPic"} src={logo} alt="Logo" />
    </div>
  );

};

export default App;
