const restaurantRouter = require('express').Router()

const { add_restaurant, getAll_restaurant, delete_restaurant } = require('../controllers/restaurant.controller')

const isAuthorized = require('../middlewares/permission')

const checkAuthentication = require('../middlewares/auth')


// # CRUD restaurant
    restaurantRouter.post('/add-restaurant',checkAuthentication, isAuthorized('leader'), add_restaurant)

    restaurantRouter.get('/all', getAll_restaurant)

    restaurantRouter.delete('/delete-restaurant/:id', delete_restaurant)


module.exports = restaurantRouter