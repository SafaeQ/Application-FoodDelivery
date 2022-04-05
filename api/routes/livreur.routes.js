const livreurRouter = require('express').Router()

const {add_new_Delivery_man, delete_Delivery_man} = require('../controllers/livreur.controller')


//# routes Create/remove Chef Secteur
livreurRouter.post('/add-livreur', add_new_Delivery_man)

livreurRouter.post('/delete-livreur/:id', delete_Delivery_man)


module.exports= livreurRouter