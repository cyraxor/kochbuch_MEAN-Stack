const mongoose = require('mongoose')
const Ingredients = require('./ingredients')
const Preparation = require('./preparation')

const receptSchema = new mongoose.Schema({
  // Name of recept
  title: {
    type: String,
    required: true,
    trim: true
  },
  // date of import
  created: {
    type: Date
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
  // counting up when click on recept
  clicks: {
    type: Number
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Category'
  },
  ingredients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ingredient'
  }],
  preparation: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Preparation'
  }]
}, {
  timestamps: {
    createdAt: 'created_on',
    updatedAt: 'updated_on'
  }
})

// receptSchema.virtual('ingredient', {
//   ref: 'ingredient',
//   localField: '_id',
//   foreignField: 'receptId'
// })

// receptSchema.virtual('preparation', {
//   ref: 'preparation',
//   localField: '_id',
//   foreignField: 'receptId'
// })

receptSchema.methods.toJSON = function() {

  const recepts = this
  const receptObject = recepts.toObject()

  // delete receptObject.sourceUrl
  // delete receptObject.pictureUrl
  // delete receptObject.clicks
  // delete receptObject.duration
  // delete receptObject.categoryId
  // delete receptObject.title
  // delete receptObject.created

  return receptObject
}

const Recept = mongoose.model('Recept', receptSchema)

module.exports = Recept
