const User  = require('../models/user.model')

const getUser = async (req, res) => {

    try {

        const users = await User.find({'role.name': 'delivery man' })

        users ? res.json(users) : res.status(404).send('user Not Found')

    }catch (error) {

        res.status(404).send(error)

        throw new Error('No User Found')
    }
}


const add_new_Delivery_man = async (req, res) => {
    try {
        const {name, email, password, adress, number, role} =req.body

        const delivry_man = await User.create({ name, email, password, adress, number,
            
                role: role === 'delivery man' ? {
                name: role,
                status: false
            } : {
                name: role
           
        }})

        const result = await delivry_man.save()

        res.status(200).send(result)
        
    } catch (error) {

        res.status(400).send(error);
    }
}

const delete_Delivery_man = async (req, res) => {
    try {
        const id = req.params.id

        const role = role._id
    
        const delivery_man = await User.findOneAndDelete(role)

        // delivery_man.catch((error) => { throw error })

        res.status(200).json(delivery_man, 'delivery_man is deleted')

    } catch (error) {
        
        res.status(400).send(error)
    }
}

module.exports= {
    add_new_Delivery_man, delete_Delivery_man, getUser
}