import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from 'react-router-dom'
import "./bootstrap.min.css";
import { App } from "./App";

// BrowserRouter must be implemented with 404.html
// https://stackoverflow.com/questions/50058820/components-not-re-rendering-on-route-change-react-hashrouter
// https://stackoverflow.com/questions/36296012/is-there-a-configuration-in-github-pages-that-allows-you-to-redirect-everything

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>);