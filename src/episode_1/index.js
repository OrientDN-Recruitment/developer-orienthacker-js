const express = require('express')
const { body, validationResult } = require('express-validator')
const server = express()
const db = require('./db')

module.exports = server

// Setup app
const api = express()
server.use(express.json())
server.use('/api', api)

// Api routes
// TODO: Create API endpoint at /api/staffs
// Call db.save(staff) to save data into database
