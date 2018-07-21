import React, { Component } from 'react';
import Navigation from './modules/Navigation';
import LandingImage from './modules/LandingImage';
import Register from './modules/Register';
import Motivation from './modules/Motivation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="Header">
            <Navigation />
          </header>
        <LandingImage />
        <Register id="Register"/>
        <Motivation id="Motivation"/>
      </div>
    );
  }
}

export default App;
