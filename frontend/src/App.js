import React, { Component } from 'react';
import './App.css';
import Generation from "./components/Generation";
import Dragon from "./components/Dragon";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dragon Stack from React</h1>
          <Generation />
          <Dragon />
        </header>
      </div>
    );
  }
}

export default App;
