// Importing express and assigning it the name app
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');

// STEPS:  E.M.M.R.L.
// Mock db
// Middleware
// Routes
// Listen

// Mock Database
const bountyList = [
    {
        firstName: 'Obi Wan',
        lastName: 'Kenobi',
        living: true,
        bounty: 400,
        type: 'jedi',
        id: '1234'
    },
    {
        firstName: 'Mace',
        lastName: 'Windu',
        living: true,
        bounty: 400,
        type: 'jedi',
        id: '2234'
    },{
        firstName: 'Qui Gon',
        lastName: 'Jinn',
        living: true,
        bounty: 400,
        type: 'jedi',
        id: '3234'
    },
]

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/bounties', (req, res) => {
    res.send(bountyList);
})

app.post('/bounties', (req, res) => {
    const newBounty = req.body;
    newBounty.id = uuid();
    bountyList.push(newBounty);
    res.send(newBounty);
})

// Listen
app.listen(4564);