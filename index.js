const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const tripRouter = require('./routes/tripRoutes')

const PORT = process.env.PORT || 5000
const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/trip', tripRouter)
app.use('/trip', tripRouter)


app.listen(PORT, () => console.log(PORT))

