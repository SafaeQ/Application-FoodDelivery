const router =require('express').Router()

const {signUp, login} = require('../controllers/user.controller')


router.get('/home', (req, res)=>{ res.send('heyyy ') })

router.post('/auth/signup', signUp)

router.post('/auth/login', login)



module.exports= router

