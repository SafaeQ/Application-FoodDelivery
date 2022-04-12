const leaderRouter = require('express').Router()

const { add_new_chefSecteur, delete_chefSecteur, getLeaders } = require('../controllers/leader.controller')

const isAuthorized = require('../middlewares/permission')

const checkAuthentication = require('../middlewares/auth')


//# routes Create/remove Chef Secteur
    leaderRouter.post('/add-leader',checkAuthentication, isAuthorized('admin'), add_new_chefSecteur)

    leaderRouter.get('/leaders', getLeaders)

    leaderRouter.delete('/delete-leader/:id',checkAuthentication, isAuthorized('admin'), delete_chefSecteur)


module.exports = leaderRouter