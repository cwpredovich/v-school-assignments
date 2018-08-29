// Axios
// import axios from 'axios';
const axios = require('axios')

// 4 HTTP Methods:

// C - Create - POST
// R - Read - GET
// U - Update - PUT
// D - Destroy - DELETE

// GET 
axios.get('https://www.swapi.co/api/people/').then(response => {
    console.log(response.data)
})

// POST
axios.post('https://www.swapi.co/api/people/', newObj).then(response => {

})


// PUT
axios.put('https://www.swapi.co/api/people/' + id, updatedObj).then(response => {

})

// DELETE
axios.delete('https://www.swapi.co/api/people/' + id).then(response => {
    
})



