const express = require('express')
const Users = require('../model/userModel')
const router = express.Router()

// Create user
router.post('/', async (req, res) => {
  try {
    const newUser = new Users(req.body)
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// Read all users
router.get('/', async (req, res) => {
  try {
    const users = await Users.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Read single user
router.get('/:id', async (req, res) => {
  try {
    const user = await Users.findById(req.params.id)
    if (!user) return res.status(404).json({ message: 'User not found' })
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Update user
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await Users.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!updatedUser) return res.status(404).json({ message: 'User not found' })
    res.status(200).json(updatedUser)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// Delete user
router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await Users.findByIdAndDelete(req.params.id)
    if (!deletedUser) return res.status(404).json({ message: 'User not found' })
    res.status(200).json({ message: 'User deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Tambah anak
router.post('/:id/anak', async (req, res) => {
  try {
    const user = await Users.findById(req.params.id)
    if (!user) return res.status(404).json({ message: 'User not found' })

    user.anak.push(req.body) // Tambah anak baru
    const updatedUser = await user.save()
    res.status(201).json(updatedUser)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

module.exports = router
