const Livreur = require('../models/livreur.model')

const bcrypt = require('bcryptjs')


const add_new_Delivery_man = async (req, res) => {
    try {
        const {name, email, number, password} = req.body

        const emailExist = await Livreur.findOne({ email: req.body.email });

        if(emailExist) return res.status(400).send("Email Already Exist!");

        const hashedPassword = await bcrypt.hash(password);

        const delivry_man = { name, password: hashedPassword, email, number }

        Livreur.create({delivry_man})

        const result = await delivry_man.save()

        res.status(200).send(result)
        
    } catch (error) {

        res.status(400).send(error);
    }
}

const delete_Delivery_man = async (req, res) => {
    try {
        const id = req.params.id

        const delivery_man = await Livreur.findOneAndDelete(id)

        delivery_man.catch((error) => { throw error })

        res.status(200).send('delivery_man is deleted')

    } catch (error) {
        
        res.status(400).send(error)
    }
}

module.exports= {
    add_new_Delivery_man, delete_Delivery_man
}