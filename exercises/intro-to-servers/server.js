const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send("Hello world")
})
    // arg1:  what page is the request to
    // arg2:  request, response
    // arg3:  the fat arrow function to run








app.listen(8989, () => {
    console.log(`Hi, your server is running on port 8989`)
    // the port can be anything between 3001 and 9000
});