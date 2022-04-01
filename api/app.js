const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config()
const cors = require('cors')
const db = require('./connection/db')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

db()
    .catch((err)=>{
        throw err
    })
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(` 🐱The server is runnig`);
        })
    })
