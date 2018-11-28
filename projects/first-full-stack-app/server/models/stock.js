const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true
    },
    numberOfShares: String,
    averageCost: String
})

module.exports = mongoose.model("Stocks", stockSchema)