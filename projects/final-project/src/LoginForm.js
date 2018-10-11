import React, { Component } from 'react';


class LoginForm extends Component {
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
            <div className='loginFrame'>
                <h1>Log in to use Avocado!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type='text' value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                        <input type='text' value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <input type='submit' value='Log In' />
                </form>
            </div>
        )
    }

}

export default LoginForm