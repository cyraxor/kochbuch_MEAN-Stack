const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
      trim: true
   }
}, {
   timestamps: true
})

categorySchema.virtual('recepts', {
  ref: 'recepts',
  localField: '_id',
  foreignField: 'categoryId'
})

const Category = mongoose.model('category', categorySchema)

module.exports = Category
