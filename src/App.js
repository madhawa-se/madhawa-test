import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie year="1999"  genre="Sci-Fi" title="Matrix" description="A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war aagainstits controllers"/>
      </div>
    );
  }
}

export default App;
