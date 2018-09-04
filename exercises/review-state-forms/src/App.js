import React, { Component } from 'react';
import './App.css';
// import Form from './Form'
// import InfoCard from './InfoCard'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ssn: '',
      mothersMaidenName: '',
      firstPet: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {

  }

  render() {
    return (
      <div>
        <Form />
        <InfoCard />
      </div>
    );
  }
}

export default App;
