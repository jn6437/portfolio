import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameBox from './components/game_container/GameBox'
import Player from './components/player'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started hi , edit <code>src/App.js</code> and save to reload.
        </p>
        <GameBox />
        <Player />
      </div>
    );
  }
}

export default App;
