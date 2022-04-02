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
            required: true,
          },
          email: {
            type: String,
            required: true,
            unique: true,
            index: 1,
          },
          address: {
            type: String,
            required: false,
          },
          number: {
            type: Number,
            required: false,
          },
          role: {
            type: String,
            default: 'leader'
          }
        },
        {
          timestamps: true,
          versionKey: false,
        }
    )
)

module.exports = Leader