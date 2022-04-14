const livreurRouter = require('express').Router()

const {add_new_Delivery_man, delete_Delivery_man, getUser} = require('../controllers/livreur.controller')

const isAuthorized = require('../middlewares/permission')

const checkAuthentication = require('../middlewares/auth')


//# routes Create/remove Chef Secteur
    livreurRouter.post('/add-livreur', add_new_Delivery_man)

    livreurRouter.get('/livreurs', getUser)

    livreurRouter.post('/delete-livreur/:id',checkAuthentication, isAuthorized('admin'), delete_Delivery_man)


module.exports = livreurRouter