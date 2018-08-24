import React from 'react';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      counter: 0
    }
  }

  addNum = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    })
  }

  subtractNum = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1
      }
    })
  }

  resetNum = () => {
    this.setState({counter: 0})
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.addNum}>+</button>
        <button onClick={this.subtractNum}>-</button>
        <button onClick={this.resetNum}>Reset</button>
      </div>
    );
  }
}

export default App;
