const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
    {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "User",
        },
        orderItems: [
          {
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: Number, required: true },
            food: {
              type: mongoose.Schema.Types.ObjectId,
              required: true,
              ref: "Repast",
            },
          },
        ],
        shippingAddress: {
          address: { type: String, required: true },
          city: { type: String, required: true },
        },
        shippingPrice: {
          type: Number,
          default: 0.0,
        },
        phoneNumber: {
          type: String,
          required: true,
        },
        totalPrice: {
          type: Number,
          required: true,
          default: 0.0,
        },
        isDelivered: {
          type: Boolean,
          default: false,
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

module.exports = { 
    Order, STATES 
};
