import * as React from 'react'
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
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </>;
}