import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App/App.css';
import Nav from './App/Layout/Header/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CoastCRM</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
