import "panic-overlay";
import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router} from 'react-router-dom'
import "./bootstrap.min.css";
import { App } from "./App";


const app = document.getElementById("app");
ReactDOM.render(
    <React.StrictMode>
        <Router><App /></Router>
    </React.StrictMode>,
app);