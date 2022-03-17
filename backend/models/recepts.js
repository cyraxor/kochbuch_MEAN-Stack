const mongoose = require('mongoose')


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
   }
}, {
   timestamps: true
})

const Recept = mongoose.model('recept', receptSchema)

module.exports = Recept