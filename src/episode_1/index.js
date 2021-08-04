const express = require('express')
const app = express()
const db = require('./db')

module.exports = app

// Setup app
const api = express()
app.use(express.json())
app.use('/api', api)

// Api routes
// TODO: Create API endpoint at /api/staffs
// Call db.save(staff) to save data into database
