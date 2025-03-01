// DEPENDENCIES- Where we require all our packages
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const bands = require('./controllers/bands_controller')


// CONFIGURATION / MIDDLEWARE - Where we configure those dependency packages
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// ROOT - A GET for the root route ('/'), responding with a simple welcome message
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})


// CONTROLLERS 
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)

const eventsController = require('./controllers/events_controller')
app.use('/events', eventsController)

const stagesController = require('./controllers/stages_controller')
app.use('/stages', stagesController)





// LISTEN - Where we tell our app what port to listen for connections on
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})