const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CATEGORIES = [
  "pizzas",
  "hamburguesas",
  "sandwiches",
  "hot dogs",
  "tacos",
  "sushi",
];

const categorySchema = new Schema(
  {
    name: { 
        type: String,
        require: true,
        lowercase: true
        },
    quantity: {
        type: Number,
        default: 0 
        },
    active: { 
        type: Boolean,
        default: true
        },
    repast: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Repast'
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = { Category, CATEGORIES };
