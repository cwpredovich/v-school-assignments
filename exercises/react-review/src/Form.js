import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            isAlive: false,
            favFood: ''
        }
    }

    handleChange = e => {
        const value = e.target.type === "checkbox" 
                                    ? e.target.checked 
                                    : e.target.value
        this.setState({
            [e.target.name]: value,
            // the square brackets around e.target.name make it dynamically handle changes to whichever input box you type in.
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        alert(`First Name: ${this.state.firstName}\nLast Name: ${this.state.lastName}\nIs Alive: ${this.state.isAlive}`)
    }

    // handleSelect = e => {
    //     this.setState({ [e.tar]})
    // }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    onChange={this.handleChange} 
                    name="firstName" 
                    placeholder="First Name" 
                    value={this.state.firstName}/>
                <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    placeholder="Last Name" />
                <input 
                    type="checkbox"
                    name="isAlive"
                    checked={this.state.isAlive}
                    onChange={this.handleChange}
                    />
                <select onChange={this.handleSelect} value={this.state.favFood}>
                    <option value="Steak">Steak</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Vegetables">Vegetables</option>
                </select>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;