const mongoose = require('mongoose')

const ingredientsSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
    trim: true
  },
  unit: {
    type: String,
    required: true,
    trim: true
  },
  ingredient: {
    type: String,
    required: true,
    trim: true
  },
  _id: {
    type: mongoose.Schema.ObjectId,
    select: false
   }
})


module.exports = ingredientsSchema
