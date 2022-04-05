const repastRouter = require('express').Router()

const {add_Repast, getAll_Repast } = require('../controllers/repast.controller')


    repastRouter.post('/add-repast', add_Repast)

    repastRouter.get('/all-repast', getAll_Repast)


module.exports = repastRouter