import React from 'react';
import logo from './logo.svg';
import Click from './Click.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Click />
      </header>
    </div>
  );
}

export default App;
