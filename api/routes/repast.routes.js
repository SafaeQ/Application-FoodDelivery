const repastRouter = require('express').Router()

const {add_Repast, getAll_Repast, delete_repast } = require('../controllers/repast.controller')

const isAuthorized = require('../middlewares/permission')

const checkAuthentication = require('../middlewares/auth')

const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './image')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
  })
  
  const upload = multer({ storage: storage })



    repastRouter.post('/add-repast', checkAuthentication, isAuthorized('leader'), upload.array('image'), add_Repast)

    repastRouter.get('/all-repast', getAll_Repast)

    repastRouter.delete('/delete-repast/:id',checkAuthentication, isAuthorized('leader'), delete_repast)


module.exports = repastRouter