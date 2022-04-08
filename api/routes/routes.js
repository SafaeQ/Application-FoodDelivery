const router =require('express').Router()

const {signUp, login} = require('../controllers/user.controller')

const create_payment = require('../controllers/payment.controller')


// # authentication of actors
    router.get('/home', (req, res)=>{ res.send('heyyy ') })

    router.post('/auth/signup', signUp)

    router.post('/auth/login', login)

// # payment  
    router.post('/create-payment', create_payment)



module.exports = router

