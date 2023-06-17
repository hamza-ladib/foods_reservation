
require('dotenv').config();
const express= require('express')
const cors= require('cors')
const app=express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const {mongoConnection} = require('./mongoose/connect');
app.use(cors())
const foodRouter = require('./routes/foodRoutes')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
/*** food route  */
app.use('/food',foodRouter);
// connect to db 
mongoConnection();
app.listen(process.env.PORT || 4000,()=>console.log(` listenning on port ${process.env.PORT}`));