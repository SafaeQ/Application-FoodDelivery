const Repast = require('../models/repast.model')


const getAll_Repast = async (req, res) => {
    try {
        const repast = await Repast.find({}).populate('restaurant')

        res.status(200).send(repast)

    } catch (error) {

        res.status(404).send(error)
    }
}

const add_Repast = async (req,res) => {
    try {
        const repast = await Repast.create(req.body)

        const result = await repast.save()

        res.status(200).send(result)

    } catch (error) {

        res.status(404).send(error)
    }
}

const delete_repast = async (req, res) => {
    try {
        const id = req.params.id

        const repast = await Repast.findOneAndRemove(id)

        res.status(200).send('Repast has been deleted')
        
    } catch (error) {

        res.status(404).send(error)
    }
}

module.exports = { getAll_Repast, add_Repast, delete_repast }