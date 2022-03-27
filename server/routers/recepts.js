const express = require('express')
const { Recept } = require('../models')
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
  try {
    const recept = await Recept.find({})
    res.send(recept)
  } catch (error) {
    res.status(500).send({Error: `${error}`})
  }
})

// read single recept
router.get(`/${receptUrl}/:receptId`, async (req, res) => {
  try {
    const recept = await Recept.findOne({_id: req.params.receptId})

    if (!recept) {
      return res.status(404).send({error: 'Recept not found!'})
    }
    res.send(recept)
  } catch (error) {
    res.status(400).send({Error: `${error}`})
  }
})

// update single recept
router.patch(`/${receptUrl}/:receptId`, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['title', 'description', 'sourceUrl', 'pictureUrl', 'duration', 'category', 'clicks','ingredients','preparation']
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
