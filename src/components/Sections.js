import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Work from './Work';

export default () =>
    <Switch>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/work">
            <Work />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
    </Switch>;