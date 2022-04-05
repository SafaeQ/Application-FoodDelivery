const mongoose = require('mongoose')


const Restaurant = mongoose.model(
    'Restaurant', 
    new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        city: {
            type: String,
        },
        adress: {
            type: String
        },
        date: {
            type: Date.now()
        }
    })
)