import React, { Component } from 'react';

import PlayerList from './components/PlayerList'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayerList />
      </div>
    );
  }
}

export default App;
