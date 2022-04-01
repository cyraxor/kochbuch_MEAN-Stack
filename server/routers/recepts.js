const express = require('express')
const { default: mongoose } = require('mongoose')
const { Recept, Ingredient } = require('../models')
const router = new express.Router()

const receptUrl = 'recepts'

// create new Recept
router.post(`/${receptUrl}`, async(req, res) => {
  const recept = new Recept({
    ...req.body
  })

  try {
    await recept.save()
    res.status(201).send(recept)
  } catch (error) {
    res.status(400).send({Error: `${error}`})
  }
})
//  read all recept
router.get(`/${receptUrl}`, async (req, res) => {
  const match = {}

  if (req.query.category) {
    match.category = req.query.category
  }
  if (req.query.title) {
    match.title = req.query.title
  }

  try {
    // const recept = await Recept.find({})
    const recept = await Recept.find(match)
    .populate()
    res.send(recept)
  } catch (error) {
    res.status(500).send({Error: `${error}`})
  }
})

// read single recept
router.get(`/${receptUrl}/:receptId`, async (req, res) => {
  try {
    // const recept = await Recept.findOne({_id: req.params.receptId})
    // .populate('ingredients')
    // .populate([{path: 'preparation', select: 'step'}])
    const recept = await Recept.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.params.receptId),
        },
      },
      {
        $lookup: {
          from: "Ingredient",
          localField: "_idd",
          foreignField: "receptId",
          as: "ingredients",
        },
      },
      {
        $project: {
          __v: 0,
          "Zutaten.unit": 0,
          "Zutaten.__v": 0,
        },
      }
    ])



    if (!recept) {
      return res.status(404).send({error: 'Recept not found!'})
    }
    res.send(recept)
  } catch (error) {
    res.status(400).send({Error: `${error}`})
  }
})

// read all recepts of a single category
router.get('/categories/:categoryid/recepts', async (req, res) => {
  try {
    const recept = await Recept.find({categoryId: req.params.categoryid})

    if (!recept) {
      return res.status(404).send({Error: 'No Recept on this Category found'})
    }
    res.send(recept)

  } catch (error) {
    res.status(500).send({Error: `${error}`})
  }
})

// update single recept
router.patch(`/${receptUrl}/:receptId`, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['title', 'description', 'sourceUrl', 'pictureUrl', 'duration', 'categoryId', 'clicks']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!'})
  }
  try {
    const recept = await Recept.findOne({_id: req.params.receptId})

    if (!recept) {
      return res.status(404).send({error: 'No recept with this id for updating'})
    }
    updates.forEach((update) => recept[update] = req.body[update])

    await recept.save()
    res.status(201).send(recept)
  } catch (error) {
    res.status(400).send({Error: `${error}`})
  }
})

// delete a singe recept
router.delete(`/${receptUrl}/:receptId`, async (req, res) => {
  try {
    const recept = await Recept.findOneAndDelete({_id: req.params.receptId})

    if(!recept) {
      return res.status(404).send({error: 'No recept with this id for deleting'})
    }
    res.send(recept)
  } catch (error) {
    res.status(500).send({Error: `${error}`})
  }
})

module.exports = router
