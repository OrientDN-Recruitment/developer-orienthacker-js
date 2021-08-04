const express = require('express')
const app = express()
const services = require('./services')

module.exports = app

// Setup app
const api = express()
app.use(express.json())
app.use('/api', api)

// Api routes
// TODO: Create API endpoint at /api/shifts
// Call services.saveShifts(shifts) to save generated shifts into database
// Call services.notifyEmployee(employeeId, shift) to notify employee about their own shifts
