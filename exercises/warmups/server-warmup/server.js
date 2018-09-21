// Steps for server.js are summarized by E.M.M.R.L.

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mockData = [];

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello world')
});

app.get('/mockData/:id', (req, res) => {
    const foundData = mockData.find(data => data.id === req.params.id)
    res.send(foundData)
})

app.listen(5000, () => {
    console.log(`the server is running on port 5000`)
})