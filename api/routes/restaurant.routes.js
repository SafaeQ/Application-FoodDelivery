const express = require('express')

const restaurantRouter = express.Router()

const { add_restaurant } = require('../controllers/restaurant.controller')


restaurantRouter.post('/add-restaurant', add_restaurant)


module.exports = restaurantRouter