const Leader = require('../models/leader.model')


const getLeaders = async (req, res) => {

    try {
        const leaders = await Leader.find({ 'role.name': { $gte: 'leader' } })

        leaders ? res.json(leaders) : res.status(404).send('leader Not Found')

    }catch (error) {

        res.status(404).send(error)

        throw new Error('No Leader Found')
    }
}

const add_new_chefSecteur = async (req, res) => {
    try {
        const { name, password, email, role, number } = req.body

        const newLeader = await Leader.create({ name, password, email, number,

            role: role === 'leader' ? {
            name: role,
            status: false
        } : {
            name: role
        }})

        const result = await newLeader.save()

        res.status(200).send(result)
        
    } catch (error) {

        res.status(400).send(error);
    }
}

const delete_chefSecteur = async (req, res) => {
    try {
        const id = req.params.id

        const leader = await Leader.findOneAndDelete(id)

        leader.catch((error) => { throw error })

        res.status(200).send('Leader is deleted')

    } catch (error) {
        
        res.status(400).send(error)
    }
}

module.exports = {
    add_new_chefSecteur, delete_chefSecteur, getLeaders
}