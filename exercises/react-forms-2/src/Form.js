import React from 'react';

class Form extends React.Component {
    constructor() {
        super()

        this.state = {
            myName: '',
            age: '',
            names: []
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState(prevState => {
            return {
                names: [...prevState.names, prevState.myName]
            }
        })
    }

    render() {
        const displayPeople = this.state.names.map(person => <li>{person}</li>)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="myName" placeholder="Full Name" value={this.state.myName} onChange={this.handleChange} />
                    <input type="text" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} />
                    <button>Submit</button>
                    {displayPeople}
                    
                </form>

            </div>
        );
    }

}

export default Form