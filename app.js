const express = require('express');
const path = require('path');
// const validator = require('express-validator')
const bodyParser = require('body-parser');
const cors = require('cors')
const db = require('./connection/db')
// const passport = require('passport');
const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
// app.use(validator());

//using passport
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(express.static(path.join(__dirname, 'public')));

db()
    .catch((err)=>{
        throw err
    })
    .then(()=>{
        app.listen(9900,()=>{
            console.log(` 🐱The server is runnig`);
        })
    })
