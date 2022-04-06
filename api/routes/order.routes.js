const orderRouter = require('express').Router()

const { getUserOrders, createOrder } = require('../controllers/order.controller')


    orderRouter.post('/order', createOrder )

    orderRouter.get('/orders', getUserOrders)

module.exports = orderRouter