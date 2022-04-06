const orderRouter = require('express').Router()

const { getUserOrders, createOrder, getOrderById } = require('../controllers/order.controller')


    orderRouter.post('/order', createOrder )

    orderRouter.get('/orders', getUserOrders)

    orderRouter.get('/order/:id', getOrderById)
    

module.exports = orderRouter