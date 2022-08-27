const express = require("express");
const app = express();
const foodModel = require("../models/Food");

app.use(express.json());

app.get("/foods", async(req, res) => {
    // return all data
    const foods = await foodModel.find({})
    try {
        res.send(foods)
    } catch (err) {
        res.status(500).send(err)
    }
});

app.post("/food", async (req, res) => {
    const food = new foodModel(req.body);
    //console.log(req.body);
  
    try {
      await food.save();
      res.send(food);
    } catch (error) {
      res.status(500).send(error);
    }
  });
module.exports = app