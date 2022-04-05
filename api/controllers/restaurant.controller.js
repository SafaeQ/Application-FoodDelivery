const Restaurant = require('../models/restaurant.model')


const add_restaurant = async (req, res, next) => {
    
    try{
        const restaurant = await Restaurant.create(req.body)

        const new_restaurant = await restaurant.save() 

        res.status(200).send(new_restaurant)

    }catch (error) {

        res.status(404).send(error)
    }    
}

module.exports = { add_restaurant }