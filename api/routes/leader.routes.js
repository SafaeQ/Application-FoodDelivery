const express = require('express')

const leaderRouter = express.Router()

const { add_new_chefSecteur, delete_chefSecteur } = require('../controllers/user.controller')


//# routes Create/remove Chef Secteur
leaderRouter.post('/add-leader', add_new_chefSecteur)

leaderRouter.post('/delete-leader', delete_chefSecteur)


module.exports = leaderRouter