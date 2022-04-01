const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config()
const cors = require('cors')
const db = require('./connection/db')

// routes
const leaderRouter = require('./routes/leader.routes')
const router = require('./routes/routes')


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use('/', router)
app.use('/api', leaderRouter)

db()
    .catch((err)=>{
        throw err
    })
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(` 🐱The app is runnig`);
        })
    })
