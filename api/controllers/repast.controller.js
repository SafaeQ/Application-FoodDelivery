const Repast = require('../models/repast.model')


const getAll_Repast = async (req, res) => {
    try {
        const repast = await Repast.find({}).populate('restaurant')

        res.status(200).send(repast)

    } catch (error) {

        res.status(404).send(error)
    }
}

const add_Repast = async (req, res) => {
    console.log('req.body',req.body, );
    console.log('req.file', req.file);
    try {
        const { name, price, category, description, restaurant , rating} = req.body

        const imageFile = req.file.filename
        console.log(imageFile);
        const repast = await Repast.create({ name, price, category, description, restaurant , rating, image: imageFile})

        // const result = await repast.save()

        res.status(200).send(repast)

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