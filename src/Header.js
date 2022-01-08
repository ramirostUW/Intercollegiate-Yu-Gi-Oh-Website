import React from 'react';
import {  Link } from "react-router-dom";
import './css/index.css';
/*

li {
  display: inline;
}
*/
export const Header = () => {
      
    return (
        <div className='Header'>
          <li>
            <Link to="/link1">link1</Link>
          </li>
          <li>
            <Link to="/link2">link2</Link>
          </li>
          <li>
            <Link to="/link3">link3</Link>
          </li>
          <li>
            <Link to="/link4">link4</Link>
          </li>
        </div>
        );
};