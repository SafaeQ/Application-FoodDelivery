const mongoose = require("mongoose");
const Category = require("./category.model");

const Schema = mongoose.Schema;

const repastSchema = new Schema(
  {
    name: { type: String, required: true, lowercase: true, trim: true },
    price: { type: Number, required: true, default: 0 },
    category: { type: String, required: true, lowercase: true, trim: true },
    size: { type: String, required: true },
    description: { type: String, required: true, lowercase: true, trim: true },
    image: { type: String, trim: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// repastSchema.statics.incrementRepastSales = function (repastName, quantity) {
//   this.findOneAndUpdate(
//     { name: repastName },
//     { $inc: { sold: quantity } },
//     { new: true }
//   );
// };
const Repast = mongoose.model("Repast", repastSchema);

module.exports = Repast;
