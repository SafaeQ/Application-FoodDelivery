const leaderRouter = require('express').Router()
const {signUp} = require('../controllers/user.controller')

leaderRouter.post('/add-leader', signUp)


module.exports= leaderRouter