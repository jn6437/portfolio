import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameBox from './components/game_container'
//import Player from './components/player'

class App extends Component {
  render() {
    return (
      <div className="App">

          <GameBox /> 

      </div>
    );
  }
}

export default App;
