import React from 'react';
import './App.css';
import { NavBar } from './components/navBar'
import Hero from './components/Hero';
import Sections from './components/Sections';

export default () => 
  <div classNameName="App">
    <NavBar />
    <Hero />
    <Sections/>
  </div>;
