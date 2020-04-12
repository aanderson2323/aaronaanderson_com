import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from './components/navBar'
import Hero from './components/Hero';
import Sections from './components/Sections';

export default () =>
  <div classNameName="App">
    <Hero />
    <Router>
      <NavBar />
      <Sections />
    </Router >
  </div>;
