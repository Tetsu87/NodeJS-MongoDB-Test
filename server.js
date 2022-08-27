const express = require("express");
const app = express();
const mongoose = require("mongoose");
var config = require("./config");

const foodRouter = require("./routes/foodRoutes")

app.use(foodRouter)

mongoose.connect(
    `mongodb+srv://Polymath:${config.mongoPW}@polymath.7dzdr87.mongodb.net/food?retryWrites=true&w=majority`
    )
    .then(()=> console.log("Database Connected!!"))
    .catch((err) => console.log(err))


app.listen(3000, ()=> {
    console.log("server is runninng!!!");
})