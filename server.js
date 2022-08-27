const express = require("express");
const app = express();
const mongoose = require("mongoose");
var config = require("./config");

mongoose.connect(
    `mongodb+srv://Polymath:${config.mongoPW}@polymath.7dzdr87.mongodb.net/?retryWrites=true&w=majority`
    );

app.listen(3000, ()=> {
    console.log("server is runninng!!!");
})