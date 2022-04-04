const {Leader} = require('../models/leader.model')

const bcrypt = require('bcryptjs')


const add_new_chefSecteur = async (req, res) => {
    try {

        const newLeader = await Leader.create(req.body)
        // console.log(newLeader);
        const result = await newLeader.save()

        res.status(200).send(result)
        
    } catch (error) {

        res.status(400).send(error);
    }
}

const delete_chefSecteur = async (req, res) => {
    try {
        const id = req.params.id

        const user = await Leader.findOneAndDelete(id)

        user.catch((error) => { throw error })

        res.status(200).send('User is deleted')

    } catch (error) {
        
        res.status(400).send(error)
    }
}

module.exports = {
    add_new_chefSecteur, delete_chefSecteur
}