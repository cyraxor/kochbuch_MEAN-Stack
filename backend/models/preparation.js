const mongoose = require('mongoose')

const preparationsSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.ObjectId,
    select: false
   },
   description: {
     type: String,
     required: true,
     trim: true
   },
   type: {
     type: String,
     required: true,
     trim: true
   }
})

module.exports = preparationsSchema
