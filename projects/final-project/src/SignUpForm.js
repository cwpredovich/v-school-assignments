import React, { Component } from 'react';


class SignUpForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            password: ''
        }
    }

    handleChange(event) {
        this.setState({name: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <h1> Sign Up for Avocado!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        New Username:
                        <input type='text' value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        New Password:
                        <input type='text' value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <input type='submit' value='Creat Account' /> 
                </form>
            </div>
        )
    }

}

export default SignUpForm