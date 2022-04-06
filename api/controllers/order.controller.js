const { Order } = require('../models/order.model')


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

}

module.exports = { getUserOrders }