const mongoose = require('mongoose')

const Livreur = mongoose.model(
    'Livreur',
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
          number: {
            type: Number,
          },
        },
        {
          timestamps: true,
          versionKey: false,
        }
    )
)

module.exports = Livreur