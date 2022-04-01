const leaderRouter = require('express').Router()
const {add_leader} = require('../controllers/leader.controller')

leaderRouter
    .post('/add-leader', add_leader)


module.exports= leaderRouter