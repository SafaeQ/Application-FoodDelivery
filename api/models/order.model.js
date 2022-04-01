// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const STATES = ["enviado", "aceptado", "despachado", "entregado", "liquidado"];

// const orderSchema = new Schema(
//   {
//     orderID: { 
//         type: Number,
//         default: Date.now
//     },

//     client: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "User",
//       },
//     ],

//     description: [
//       {
//         product: {
//           name: {
//               type: String,
//               require: true,
//               lowercase: true
//             },
//           price: {
//             type: Number,
//             default: 0
//         },
//         },
//         quantity: { 
//             type: Number,
//             default: 1
//         },
//         total: { 
//             type: Number,
//             default: 0
//         },
//       },
//     ],

//     total: { 
//         type: Number,
//         default: 0 
//     },

//     states: [
//       {
//         name: { 
//             type: String,
//             default: "" 
//         },
//         confirmed: { 
//             type: Boolean,
//             default: false 
//         },
//         date: { 
//             type: Date,
//             default: Date.now()
//         },
//       },
//     ],
//     finished: { 
//         type: Boolean,
//         default: false
//     },
//   },

//   {
//     timestamps: true,
//     versionKey: false,
//   }
// );


// const Order = mongoose.model("Order", orderSchema);

// module.exports = { 
//     Order, STATES 
// };
