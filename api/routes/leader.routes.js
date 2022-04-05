const express = require('express')

const leaderRouter = express.Router()

const { add_new_chefSecteur, delete_chefSecteur } = require('../controllers/leader.controller')

const isAuthorized = require('../middlewares/permission')

const checkAuthentication = require('../middlewares/auth')


//# routes Create/remove Chef Secteur
leaderRouter.post('/add-leader',checkAuthentication, isAuthorized('admin'), add_new_chefSecteur)

leaderRouter.delete('/delete-leader/:id', delete_chefSecteur)


module.exports = leaderRouter