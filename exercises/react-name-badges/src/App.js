import React, { Component } from 'react';
import './App.css';
import './Form.js';


class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <Display />
      </div>
    );
  }
}

export default App;
