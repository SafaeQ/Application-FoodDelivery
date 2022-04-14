const mongoose = require('mongoose')

const Leader = mongoose.model(
    "Leader",
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
          role: RoleSchema,
          card: [
            quantity = {
              type: Number
            },
            foodId = {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Repast'
            }
          ]
        },
        {
          timestamps: true,
          versionKey: false,
        }
    )
)

module.exports = Leader