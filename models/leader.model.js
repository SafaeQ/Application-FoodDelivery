const mongoose = require('mongoose')

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
          roles: [
            {
              type: Schema.Types.ObjectId,
              ref: "Role",
            },
          ],
        //   subscribed: {
        //     type: Boolean,
        //     default: false,
        //   },
        //   profileState: {
        //     type: String,
        //     default: "incomplete",
        //     trim: true,
        //     lowercase: true,
        //   },
          orders: [
            {
              type: Schema.Types.ObjectId,
              ref: "Order",
            },
          ],
        //   client: { type: Boolean, default: false },
        },
        {
          timestamps: true,
          versionKey: false,
        }
    )
)

module.exports = Leader