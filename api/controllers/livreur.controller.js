const { User } = require('../models/user.model')


const add_new_Delivery_man = async (req, res) => {
    try {
        const {name, email, password, adress, number, role} =req.body

        const delivry_man = await User.create({ name, email, password, adress, number,
            
                role: role === 'delivery_man' ? {
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
    const id = req.params.id

    try {
        const delivery_man = await User.findOneAndDelete(id)

        delivery_man.catch((error) => { throw error })

        res.status(200).json('delivery_man is deleted')

    } catch (error) {
        
        res.status(400).send(error)
    }
}

module.exports= {
    add_new_Delivery_man, delete_Delivery_man
}