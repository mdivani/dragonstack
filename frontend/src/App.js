import React, { Component } from 'react';
import './App.css';
import Generation from "./components/Generation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dragon Stack from React</h1>
          <Generation />
        </header>
      </div>
    );
  }
}

export default App;
