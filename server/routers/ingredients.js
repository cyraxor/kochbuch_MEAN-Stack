const express = require('express')
const { default: mongoose } = require('mongoose')
const { Ingredient } = require('../models')
const router = new express.Router()

const receptUrl = 'recepts'

// create new Ingredient
router.post(`/${receptUrl}/:receptId/ingredients`, async(req, res) => {
  const ingredient = new Ingredient({
    ...req.body
  })

  try {
    await ingredient.save()
    res.status(201).send(ingredient)
  } catch (error) {
    res.status(400).send({Error: `${error}`})
  }
})
//  read all ingredient
router.get(`/${receptUrl}/:receptId/ingredients`, async (req, res) => {
  // const match = {}

  // if (req.query.category) {
  //   match.category = req.query.category
  // }
  // if (req.query.title) {
  //   match.title = req.query.title
  // }

  try {
    // const ingredient = await Ingredient.find({})
    const ingredient = await Ingredient.find({receptID: req.params.receptId})
    .populate()
    res.send(ingredient)
  } catch (error) {
    res.status(500).send({Error: `${error}`})
  }
})

module.exports = router
