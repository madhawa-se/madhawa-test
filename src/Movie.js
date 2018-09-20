import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.year} - {this.props.genre} - {this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default App;
