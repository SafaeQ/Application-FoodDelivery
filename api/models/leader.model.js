const mongoose = require('mongoose')
// const {Role} = require('./role.model')
const Leader = mongoose.model(
    'Leader',
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
            lowercase: true,
          },
      
          password: {
            type: String,
          },
          email: {
            type: String,
            unique: true,
          },
          address: {
            type: String,
          },
          number: {
            type: Number,
          },
        },
        {
          timestamps: true,
          versionKey: false,
        }
    )
)

module.exports = Leader