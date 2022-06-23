import "panic-overlay";
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Link, Navigate, Route, Routes} from 'react-router-dom'
import "./bootstrap.min.css";
import { App } from "./App";
import {Home} from "./Home";
import {Tournament2019} from "./tournament2019";
import {Tournament2021} from "./tournament2021";
import {Competitors} from "./Competitors";


const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="tournament2019" element={<Tournament2019 />} />
                <Route path="/tournament2019" element={<Navigate to="tournament2019" />} />
                <Route path="tournament2021" element={<Tournament2021 />} />
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
        </Router>
    </React.StrictMode>);