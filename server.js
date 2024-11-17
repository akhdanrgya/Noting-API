const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./route/userRoute')
require('dotenv').config()

const app = express()

app.use(express.json())

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected ✅'))
  .catch(err => console.error('Error connecting to MongoDB:', err))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))

app.use('/users', userRoutes)
