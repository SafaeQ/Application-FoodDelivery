const router = require('express').Router()


router.get('/home', (req, res)=>{
    res.send('heyyy ')
})
module.exports= router