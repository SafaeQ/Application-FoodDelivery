const Leader = require('../models/leader.model')
const bcrypt = require('bcryptjs')

const add_leader = async (req, res)=> {
    
        const {name, email, adress, number} = req.body

        const hashedPassword = bcrypt.hash(req.body.password);
        const leader = await Leader.create({
            name,
            password: hashedPassword,
            email,
            adress,
            number,
        })
        console.log('-------------',leader);
    try {
        const result = await leader.save()
        res.status(200).send(result)

    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports= {
    add_leader
}