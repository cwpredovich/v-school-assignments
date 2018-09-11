const express = require("express");
const app = express();
const bodyParser = require('body-parser');


// Mock Database
const sockStore = [
    {
        type: 'plain',
        cost: 200
    },
    {
        type: 'polka-dot',
        cost: 1000
    }
]

// Middleware
app.use(bodyParser.json());
// need to npm install body-parser
// have to do this because the request is received and axios changes it into a json string
// we need to change this json string into an indexed object

/////////////
// Routes //
///////////
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.post('/socks', (req, res) => {
    sockStore.push(req.body);
    res.send(sockStore);
})


// GET A SINGLE STOCK
app.get('/socks/:id', (req, res) => {
    const foundSock = sockStore.find(sock => sock.id === req.params.id)
    res.send(foundSock)
})

app.put('/socks/:id', (req,res) => {

})

app.delete('/socks/:id', (req, res) => {

})



// Listen
app.listen(4000, () => {
    console.log('Server is now running on port 4000.')
})