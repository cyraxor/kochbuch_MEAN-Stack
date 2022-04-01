const express = require('express')
const { default: mongoose } = require('mongoose')
const { Preparation } = require('../models')
const router = new express.Router()

const receptUrl = 'recepts'

// create new Preparation
router.post(`/${receptUrl}/:receptId/preparations`, async(req, res) => {
  const preparation = new Preparation({
    ...req.body
  })

  try {
    await preparation.save()
    res.status(201).send(preparation)
  } catch (error) {
    res.status(400).send({Error: `${error}`})
  }
})
//  read all preparations
router.get(`/${receptUrl}/:receptId/preparations`, async (req, res) => {
  // const match = {}

  // if (req.query.category) {
  //   match.category = req.query.category
  // }
  // if (req.query.title) {
  //   match.title = req.query.title
  // }

  try {
    // const preparation = await Preparation.find({})
    const preparation = await Preparation.find({receptId: req.params.receptId})
    .populate()
    res.send(preparation)
  } catch (error) {
    res.status(500).send({Error: `${error}`})
  }
})

module.exports = router
