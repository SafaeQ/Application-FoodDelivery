const repastRouter = require('express').Router()

const {add_Repast, getAll_Repast, delete_repast } = require('../controllers/repast.controller')


    repastRouter.post('/add-repast', add_Repast)

    repastRouter.get('/all-repast', getAll_Repast)

    repastRouter.delete('/delete-repast/:id', delete_repast)


module.exports = repastRouter