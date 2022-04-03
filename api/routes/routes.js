const express = require('express')
const router =express.Router()
const {signUp} = require('../controllers/leader.controller')

router.get('/home', (req, res)=>{
    res.send('heyyy ')
})
router.post('/auth/signup', signUp)



module.exports= router

