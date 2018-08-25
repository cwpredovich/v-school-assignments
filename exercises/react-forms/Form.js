import React, {Component} from 'react';

class Form extends React.Component {
    constructor() {
        super()

        this.state = {
            myName: '',
            age: '',
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        alert(`Name: ${this.state.myName}\nAge: ${this.state.age}`)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="myName" placeholder="Full Name" value={this.state.myName} onChange={this.handleChange} />
                <input type="text" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        );
    }

}

export default Form