import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Writing from './Writing';

export default () =>
    <Switch>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/writing">
            <Writing />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
        <Route path="/">
            <hr/>
        </Route>
    </Switch>;