const mongoose = require('mongoose')
const ingredientsSchema = require('./incredients')
const preparationsSchema = require('./preparation')


const receptSchema = new mongoose.Schema({
  // Name of recept
  title: {
    type: String,
    required: true,
    trim: true
  },
  // steps of preparation
  description: {
    type: String
  },
  // origin Url where recept came from
  sourceUrl: {
    type: String
  },
  // Url of related picture
  pictureUrl: {
    type: String
  },
  // time in minutes for preparation
  duration: {
    type: Number
  },
  // recept category - eg. cake, bread, cereals
  category: {
    type: String
  },
  // counting up when click on recept
  clicks: {
    type: Number
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'category'
  },
  //  Sub-Schema for ingegredients of recept
  ingredients: [ingredientsSchema],
  preparation: [preparationsSchema]
}, {
  timestamps: true
})

receptSchema.methods.toJSON = function() {
  const recepts = this
  const receptObject = recepts.toObject()

  // delete receptObject.ingredients
  return receptObject
}

const Recept = mongoose.model('recept', receptSchema)

module.exports = Recept
