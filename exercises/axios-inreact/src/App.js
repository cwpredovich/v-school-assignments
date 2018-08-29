import React, {Component} from 'react';
import axios from 'axios';
import Person from './Person';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: []        // saving the data from the axios request to the array called this.state.data
    }
  }

  componentDidMount(){    // when the page successfully loads, do this...
    axios.get('https://www.swapi.co/api/people/').then(response => {
      this.setState({
        data: response.data.results     // response.data is automatic, and results is the piece we found using Postman
      })
    }).catch(err => {
        console.log(err)
    })
  }

  render(){
    // next, we'll map through the array of data
    const mappedStarWarsFolk = this.state.data.map(person => {
      return (
          <Person 
            {...person}   // ??
            key={person.url}/>    // this is necessary when using axios and .map()
        )
      }
    )
    return(
      <div>
        { mappedStarWarsFolk }
      </div>
    )
}
}

export default App;