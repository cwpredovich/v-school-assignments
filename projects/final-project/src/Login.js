import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import './login.css';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            // when loginVisible is true, the user can login but not signup
            // when loginVisible is false, the user can signup but not login
            loginVisible: true
        }
    }

    toggleSignUpForm = () => {
        this.setState(prevState => ({
            loginVisible: !prevState.loginVisible
        }))
    }

    render() {
        return (
            <div className='loginContent'>
                { 
                    this.state.loginVisible 
                    ?
                    <div>
                        <LoginForm />
                        <input type='button' className='Login' value="Don't have an account? Sign Up!" onClick={this.toggleSignUpForm}></input>
                    </div>
                    : 
                    <div>
                        <SignUpForm />
                        <input type='button' className='Login' value="Already have an account? Log in!" onClick={this.toggleSignUpForm}></input>
                    </div> 
                }
            </div>
        )
    }
}
    
                
export default Login