const leaderRouter = require('express').Router()
const {signUp} = require('../controllers/leader.controller')

leaderRouter.post('/add-leader', signUp)


module.exports= leaderRouter