const { MongoServerClosedError } = require('mongodb')
const mongoose = require('mongoose')

const preparationsSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.ObjectId,
    select: false
   },
   step: {
     type: String,
     required: true,
     trim: true
   },
   type: {
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


// module.exports = preparationsSchema
const Preparation = mongoose.model('Preparation', preparationsSchema)
module.exports = Preparation
