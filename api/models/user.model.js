const mongoose = require('mongoose')

const RoleSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      enum: ['admin', 'leader', 'delivery_man', 'client']
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
          role: RoleSchema
        },
        {
          timestamps: true,
          versionKey: false,
        }
    )
)

module.exports = {User}