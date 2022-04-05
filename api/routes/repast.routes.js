const repastRouter = require('express').Router()

const {add_Repast, getAll_Repast, delete_repast } = require('../controllers/repast.controller')

const isAuthorized = require('../middlewares/permission')

const checkAuthentication = require('../middlewares/auth')


    repastRouter.post('/add-repast', checkAuthentication, isAuthorized('leader'), add_Repast)

    repastRouter.get('/all-repast', getAll_Repast)

    repastRouter.delete('/delete-repast/:id',checkAuthentication, isAuthorized('leader'), delete_repast)


module.exports = repastRouter