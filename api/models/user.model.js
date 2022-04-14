const mongoose = require('mongoose')

const RoleSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      enum: ['admin', 'leader', 'delivery man', 'client']
  },
  status: {
      type: Boolean
  }
});


const User = mongoose.model(
    'User',
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

module.exports = {User} 
module.exports = RoleSchema