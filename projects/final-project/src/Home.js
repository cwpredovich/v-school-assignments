import React, { Component } from 'react';
// import LoginForm from './LoginForm';

class Home extends Component {
    constructor(){
        super()
        this.state = {
            loginVisible: false
        }
    }

    // toggleLoginForm = () => {
    //     this.setState(prevState => ({
    //         loginVisible: true
    //     }))
    // }

    render() {
        return(
            <div className="homeContent">
                <h1>Avocado Notes</h1>
                <h2>What is Avocado?</h2>
                <p>Glad you asked! Avocado is an organic web application for taking and storing notes online. Create a free account and give it a try!</p>
                {/* <input type='button' className='login' onClick={this.toggleLoginForm}></input>
                {
                    this.state.loginVisible ?
                    <LoginForm />
                    :
                    <div></div>
                } */}
            </div>
        )
    }

}

export default Home