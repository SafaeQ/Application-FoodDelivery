const express = require('express');

const bodyParser = require('body-parser');

const dotenv = require('dotenv').config()

const cors = require('cors')

const db = require('./connection/db')


//# routes
const leaderRouter = require('./routes/leader.routes')

const livreurRouter = require('./routes/livreur.routes')

const restaurantRouter = require('./routes/restaurant.routes')

const router = require('./routes/routes')


const app = express();

app.use(express.json())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())


app.use('/', router)

app.post('/test', function(req, res){
    let test = req.body
    console.log(test);
})

app.use('/api', leaderRouter)

app.use('/api', livreurRouter)

app.use('/restaurant', restaurantRouter)


//# running the server
db().catch((err)=>{ throw err }).then(()=>{ app.listen(process.env.PORT,()=>{ console.log(` 🐱The app is runnig`) })})
