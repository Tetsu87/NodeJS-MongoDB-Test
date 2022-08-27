const express = require("express")
const app = express();
const foodModel = require("../models/Food")

app.get("/foods", async(req, res) => {
    // return all data
    const foods = await foodModel.find({})
    try {
        res.send(foods)
    } catch (err) {
        res.status(500).send(err)
    }
});

module.exports = app