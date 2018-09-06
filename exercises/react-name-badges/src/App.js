import React, { Component } from 'react';
import Form from './Form';
import Display from './Display';


class App extends Component {
  constructor() {
    super()
    this.state = {
      fName: "",
      lName: "",
      email: "",
      birthPlace: "",
      phone: "",
      favFood: "",
      about: "",
      nameCards: []
    }
  }

  // write 2 functions. 1st is for handleChange, and 2nd is for handleSubmit.
  // I MIGHT need to do handleSubmit here, as well
  // This website has helpful info for this project:
  // https://reactjs.org/docs/forms.html

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    
  }

    // Handle Submit Function:
    // I want to be able to click submit,
    // have the data all saved to an object
    // add that object to the array of name cards

  handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      fName: this.state.fName,
      lName: this.state.lName,
      email: this.state.email,
      birthPlace: this.state.birthPlace,
      phone: this.state.phone,
      favFood: this.state.favFood
    }
    this.setState(prevState => ({
      nameCards: [...prevState.nameCards, newContact],
      fName: '',
      lName: '',
      email: '',
      birthPlace: '',
      phone: '',
      favFood: ''
    }))
    
  }


  render() {
    return (
      <div>
        <Form {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Display />
        {console.log(this.state)}
      </div>
    )
  }

}

export default App;
