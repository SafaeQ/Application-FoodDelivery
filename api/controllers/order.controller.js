const { Order } = require('../models/order.model')


const getUserOrders = async (req, res) => {

    try {

        const orders = await Order.find({}).sort('-createdAt')

        orders ? res.json(orders) : res.status(404).send('Order Not Found')

    }catch (error) {

        res.status(404).send(error)

        throw new Error('No User Found')
    }
}

const createOrder = async (req, res) => {

    const { user, name, qty, price, food } = req.body

    if (!qty && !food ){
        
        res.status(404).send('No items found')

    }else {

        const order = new Order({ user, name, qty, price, food })

        const createdOrder = await Order.create(order)

        res.status(200).json(createdOrder)

    }
}

module.exports = { getUserOrders, createOrder }