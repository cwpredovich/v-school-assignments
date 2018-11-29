const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const stockRoutes = require('./routes/stockRoutes')
const app = express()
// const cors = require('cors')
const PORT = process.env.PORT || 5000

app.use(morgan('dev'))
app.use(express.json())

// app.use(cors({METHODS: 'GET,PUT,POST,DELETE'}))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

mongoose.connect('mongodb://localhost:27017/stocksapp', {useNewUrlParser: true}, () => {
    console.log('Connected to the database')
}).catch(err => {console.log(err) })

app.use('/stocks', stockRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})