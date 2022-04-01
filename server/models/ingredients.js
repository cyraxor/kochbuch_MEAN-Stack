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
  receptId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Recept'
  }
})

const Ingredient = mongoose.model('Ingredient', ingredientsSchema)

module.exports = Ingredient
