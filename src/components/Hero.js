import React from 'react';
import { NavBar } from './navBar'

export default () => <div className="col-md-9 col-lg-10 col-xl-11 text-center">
    <div id="hero" className="flex-container">
        <div className="jumbotron">
            <h1 className="display-4">Hi, I'm Aaron!</h1>
            <hr className="my-4" />

            <p className="lead">What do you do Aaron?</p>
            <p>I read. I write. I code.</p>
        </div>
        <NavBar />
    </div>
</div>;