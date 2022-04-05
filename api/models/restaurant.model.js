const mongoose = require('mongoose')


const Restaurant = mongoose.model(
    'Restaurant', 
    new mongoose.Schema({
        restaurant_name: {
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
            type: Date,
            default: Date.now()
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
    )
)

module.exports = Restaurant