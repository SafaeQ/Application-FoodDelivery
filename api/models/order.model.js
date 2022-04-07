const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
    {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "User",
        }, 
        name: { 
          type: String, 
          required: true
        },
        qty: { 
          type: Number, 
          required: true 
        },
        price: { 
          type: Number, 
          required: true 
        },
        food: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Repast",
        },
        isDelivered: {
          type: Boolean,
          default: false,
        },
        isAccepted: {
          type: Boolean,
          default:false
        },
        deliveredAt: {
          type: Date,
        },
      },
      {
        timestamps: true,
      }
);


const Order = mongoose.model("Order", orderSchema);

module.exports = { Order };
