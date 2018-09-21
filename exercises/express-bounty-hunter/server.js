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


// Middleware
app.use(bodyParser.json());

// Mongoos/MongoDB
// app.use(express.json());


// Routes
app.use('/bounties', require('./bountyRoutes'))

// Listen
app.listen(5555, ()=>{
    console.log('server is running on port ' + 5555)
});