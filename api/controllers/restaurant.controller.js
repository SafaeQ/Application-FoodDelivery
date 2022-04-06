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

const getAll_restaurant = async (req, res) => {
    try {
            
        const restaurant = await Restaurant.find({})//.populate('Repast')

        // if(restaurant === 0) return res.send('there is no restaurant')

        res.status(200).send(restaurant)

    } catch (error) {

        res.status(404).send(error)
    } 
}

const delete_restaurant = async (req, res) => {
    try {

        const id = req.params.id
        
        const restaurant = await Restaurant.findOneAndRemove(id)

        restaurant.catch((err) => { throw err })

        res.status(200).send('restaurant has been deleted', restaurant)

    } catch (error) {

        res.status(404).send(error)
    }
}

module.exports = { add_restaurant, getAll_restaurant, delete_restaurant }