const { Order } = require('../models/order.model')


const getUserOrders = async (req, res) => {

    try {

        const orders = await Order.find({}).sort('-createdAt').populate('user').populate('food')

        orders ? res.json(orders) : res.status(404).send('Order Not Found')

    }catch (error) {

        res.status(404).send(error)

        throw new Error('No User Found')
    }
}

const createOrder = async (req, res) => {

    const { user, name, qty, price, food } = req.body

    if (!user && !food ){
        
        res.status(404).send('No items found')

    }else {

        const order = new Order({ user, name, qty, price, food })

        const createdOrder = await Order.create(order)

        res.status(200).json(createdOrder)

    }
}

const getOrderById = async (req, res) => {
    try{
        const order = await Order.find({  id: req.params.id }).populate('user').populate('food')

        res.status(200).send(order)

    } catch (error) {

        res.status(404).send(error)
    }
}

const getOrderForDelivery = async (req, res) => {
    try {
        const userId = req.body.id

        const foodId ={_id :mongoose.Types.ObjectId(id)}

        let params = { foodId }

        User.findOne(params, {$inc : {'quantity' : 1}}, { new: true }).then((results) => { console.log(results)})
    
    } catch (error) {

        res.send(error)
    }
}

module.exports = { getUserOrders, createOrder, getOrderById }