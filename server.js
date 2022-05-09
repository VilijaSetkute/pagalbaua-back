const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

const mainRouter = require('./routes/mainRoute')

const publicOrigin = "http://104.248.192.185:3000"
const localOrigin = "http://localhost:3000"
const production = true

const origin = production ? publicOrigin : localOrigin

app.use((req, res, next) => {
    // Website you wish to allow to connect
    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:");
    // res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Origin", origin);
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
app.use(cors({credentials: true, origin: origin}))
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
