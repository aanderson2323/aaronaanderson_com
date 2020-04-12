import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Sections from './components/Sections';

export default () =>
  <div className="App">
    <Router>
      <Hero />
      <Sections />
    </Router >
  </div>;
