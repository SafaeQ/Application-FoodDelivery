const { Order } = require('../models/order.model')
const { create } = require('../models/restaurant.model')


const getUserOrders = async (req, res) => {

    if (req.user) {

        const orders = await Order.find({ user: req.user._id }).sort('-createdAt')

        orders ? res.json(orders) : res.status(404).send('Order Not Found')

    }else {

        res.status(404)

        throw new Error('No User Found')
    }
}

const createOrder = async (req, res) => {

    const { orderItems, shippingAdress, shippingPrice, phoneNumber, totalPrice } = req.body

    if (orderItems && orderItems.length === 0 ){
        
        res.status(404).send('No items found')
    }else {

        const order = new Order({ user: req.user._id, orderItems, shippingAdress, shippingPrice, phoneNumber, totalPrice })

        const createdOrder = await create(order)

        res.status(200).json(createdOrder)

    }
}

module.exports = { getUserOrders, createOrder }