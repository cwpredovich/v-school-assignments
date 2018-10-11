const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const stockRoutes = require('./routes/stockRoutes')
const app = express()
const PORT = process.env.PORT || 5000

app.use(morgan('dev'))
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/stocksapp', {useNewUrlParser: true}, () => {
    console.log('Connectedto the database')
}).catch(err => {console.log(err) })

app.use('/stocks', stockRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})