const orderRouter = require('express').Router()

const { getUserOrders, createOrder, getOrderById } = require('../controllers/order.controller')

const create_payment = require('../controllers/payment.controller')

const isAuthorized = require('../middlewares/permission')

const checkAuthentication = require('../middlewares/auth')


    orderRouter.post('/order',checkAuthentication, isAuthorized('client'), createOrder )

    orderRouter.get('/orders', getUserOrders)

    orderRouter.get('/order/:id', getOrderById)

    // # payment  
    orderRouter.post('/create-payment', checkAuthentication, create_payment)

    

module.exports = orderRouter