import React from 'react'

export const NavBar = (props) => {
    return (
            <ul id="nav" class="nav nav-pills nav-stacked fixed-top" data-offset-top="0">
                <li>
                    <a class="nav-link" href="#home">Home</a>
                </li>
                <li>
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li>
                    <a class="nav-link" href="#work">My Work</a>
                </li>
                <li>
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
    )
}