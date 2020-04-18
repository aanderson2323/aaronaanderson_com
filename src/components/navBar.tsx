import React from 'react';
import { Link } from 'react-router-dom';
export const NavBar = () => {
    return <>
        <ul id="nav">
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/writing">Writing</Link>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/aaron-anderson-21230199/" target="_blank">CV (linkedIn)</a>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </>;
}