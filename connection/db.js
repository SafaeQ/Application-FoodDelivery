const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

async function db (){
    await mongoose.connect(process.env.DATABASE || "mongodb://127.0.0.1:27017/food_delivery",
        {useNewUrlParser:true,useUnifiedTopology:true },
        err =>{
    console.log(" 😊 it's connected");
})
}

module.exports = db;