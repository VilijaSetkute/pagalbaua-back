const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const app = express()
const mainRouter = require('./routes/mainRoute')
const cors = require('cors')

app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.use(express.json())
// app.use(cors())
app.use(bodyParser.json())
app.use('/', mainRouter)

mongoose.connect(process.env.MONGODB_KEY)
    .then(() => {
        console.log('DB connection success')
    })
    .catch(e => {
        console.log(e)
        console.log('failed to connect')
    })


app.listen(4000)