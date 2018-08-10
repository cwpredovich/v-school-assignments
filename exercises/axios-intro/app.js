// Axios
    // 1. An event (page load)
    // 2. XMLHttpRequest object is created
    // 3. The request object sends the request to the server. xhr.save()
    // 4. The server processes the request
    // 5. The server sends a response back to the web page
    // 6. The response is then read by javascript

var axios = require("axios");

axios.get("https://swapi.co/api/people/5").then(function(response){
    console.log(response.data);
}).catch(function(error){
    console.log(error);
});

// From the code above, the main steps were:  .get() .then() .catch() IN THAT ORDER!

// For my next trick, I will be performing a .post() 
axios.get("")