import "panic-overlay";
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from 'react-router-dom'
import "./bootstrap.min.css";
import { App } from "./App";

// HashRouter for github page compatibility
// https://stackoverflow.com/questions/58228017/react-router-v4-cant-load-page-on-github-pages

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>);