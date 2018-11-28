const express = require('express');
const stockRouter = express.Router();
const Stocks = require ('../models/stock');

stockRouter.route('/')
    .get((req, res) => {
        Stocks.find((err, stocks) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(stocks)
        })
    })
    .post((req, res) => {
        const newStock = new Stocks(req.body)
        console.log(req.body)
        newStock.save((err, newSavedStock) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(newSavedStock)
        })
    })

stockRouter.route('/:id')
    .get((req, res) => {
        Stocks.findOne({ _id: req.params.id }, (err, foundStock) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(foundStock)
        })
    })
    .put((req, res) => {
        Stocks.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true },
            (err, updatedStock) => {
                if (err) return res.status(500).send(err)
                return res.status(201).send(updatedStock)
            }
        )
    })
    .delete((req, res) => {
        Stocks.findOneAndRemove({ _id: req.params.id }, (err, deletedStock) => {
            if (err) return res.status(500).send(err)
            return res.status(202).send({ deletedStock: deletedStock, msg: "Stock successfully removed"})
            }
        )
    })


module.exports = stockRouter