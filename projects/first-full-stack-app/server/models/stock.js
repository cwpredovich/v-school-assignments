const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true
    },
    numberOfShares: Number,
    averageCost: Number
})

module.exports = mongoose.model("Stock", stockSchema)