import * as React from 'react';
import { NavBar } from './navBar'

export default () =>
    <div>
        <div id="hero" className="flex-container">
            <h1>Hi, I'm Aaron!</h1>
            <p>What do you do Aaron?</p>
            <p><i>read. write. code.</i></p>
        </div>
        <NavBar />
    </div>