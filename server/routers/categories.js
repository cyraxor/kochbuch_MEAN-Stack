const express = require('express')
const { Category } = require('../models')
const router = new express.Router()

// main URL for categories
const categoryUrl = 'categories'


// create new Category
router.post(`/${categoryUrl}`, async(req, res) => {
  const category = new Category({
    ...req.body
  })

  try {
    await category.save()
    res.status(201).send(category)
  } catch (error) {
    res.status(400).send({Error: `${error}`})
  }
})

//  read all categories
router.get(`/${categoryUrl}`, async (req, res) => {
  try {
    const category = await Category.find({})
    res.send(category)
  } catch (error) {
    res.status(500).send({Error: `${error}`})
  }
})

// update single category
router.patch(`/${categoryUrl}/:categoryId`, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = 'title'
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!'})
  }
  try {
    const category = await Category.findOne({_id: req.params.categoryId})

    if (!category) {
      return res.status(404).send({error: 'No category with this id for updating'})
    }
    updates.forEach((update) => category[update] = req.body[update])

    await category.save()
    res.status(201).send(category)
  } catch (error) {
    res.status(400).send({Error: `${error}`})
  }
})

// delete a singe category
router.delete(`/${categoryUrl}/:categoryId`, async (req, res) => {
  try {
    const category = await Category.findOneAndDelete({_id: req.params.categoryId})

    if(!category) {
      return res.status(404).send({error: 'No category with this id for deleting'})
    }
    res.send(category)
  } catch (error) {
    res.status(500).send({Error: `${error}`})
  }
})

module.exports = router
