const express = require('express');

const bodyParser = require('body-parser');

require('dotenv').config()

const cors = require('cors')

const db = require('./connection/db')

const PORT = process.env.PORT || 9001

//# routes
const leaderRouter = require('./api/routes/leader.routes')

const livreurRouter = require('./api/routes/livreur.routes')

const restaurantRouter = require('./api/routes/restaurant.routes')

const orderRouter = require('./api/routes/order.routes')

const repastRouter = require('./api/routes/repast.routes')

const router = require('./api/routes/routes')


const app = express();

app.use(express.json())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())

const path = require('path')
app.use("/image",express.static(path.join(__dirname, 'image')))


app.use('/', router)

app.post('/test', function(req, res){
    let test = req.body
    console.log(test);
})

app.use('/api', leaderRouter)

app.use('/api', livreurRouter)

app.use('/restaurant', restaurantRouter)

app.use('/repast', repastRouter)

app.use('/user', orderRouter)


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
}


//# running the server
db().catch((err)=>{ throw err }).then(()=>{ app.listen(PORT,()=>{ console.log(` 🐱The app is runnig`) })})
