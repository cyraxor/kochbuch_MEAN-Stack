const mongoose = require('mongoose')
const Recept = require('./recepts')

const ingredientsSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.ObjectId,
    select: false
  },
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
  receptID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Recept'
  }
})

// module.exports = ingredientsSchema
const Ingredient = mongoose.model('Ingredient', ingredientsSchema)
module.exports = Ingredient
