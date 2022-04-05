const express = require('express')

const leaderRouter = express.Router()

const { add_new_chefSecteur, delete_chefSecteur } = require('../controllers/leader.controller')


//# routes Create/remove Chef Secteur
leaderRouter.post('/add-leader', add_new_chefSecteur)

leaderRouter.delete('/delete-leader/:id', delete_chefSecteur)


module.exports = leaderRouter