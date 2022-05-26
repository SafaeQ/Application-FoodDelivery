const repastRouter = require('express').Router()
const multer = require('multer')
const path = require('path')

const {add_Repast, getAll_Repast, delete_repast } = require('../controllers/repast.controller')

const isAuthorized = require('../middlewares/permission')

const checkAuthentication = require('../middlewares/auth')

                

const storage=multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'image')
    },
    filename: (req, file, cb) =>{
        console. log(file)
        cb(null, Date.now()+path.extname (file.originalname))
}})
const upload=multer({storage: storage})



    repastRouter.post('/add-repast', checkAuthentication, isAuthorized('leader'), upload.single('image'), add_Repast)

    repastRouter.get('/', getAll_Repast)

    repastRouter.delete('/delete-repast/:id',checkAuthentication, isAuthorized('leader'), delete_repast)


module.exports = repastRouter