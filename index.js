const express = require('express');
const app = express(); 
const {connectToDb} = require('./connection')
const {router} = require('./routes/url')
const {userRouter} = require('./routes/user')


//Environment 
require('dotenv').config();
const {PORT, DB_URL} = process.env


app.use(express.urlencoded({extended:false}))


app.use('/urls',router)





connectToDb(DB_URL).then(()=>console.log("Database connected."))



app.listen(PORT,()=>console.log(`Sever started at PORT: ${PORT}`))
