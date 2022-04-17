const express = require('express');
const server = express();
const mongoose = require('mongoose');

const cors = require('cors');
const roomsRouter = require('./routes/rooms-routes');
const usersRouter = require('./routes/users-routes');
require('dotenv').config();

//middleware
server.use(express.json())
server.use(cors())
server.use('/rooms', roomsRouter)
server.use('/server', usersRouter)

mongoose.connect(`mongodb+srv://admin:${MONGODB_PASSWORD}@cluster0.jckyy.mongodb.net/beachResort?retryWrites=true&w=majority`)
.then(()=>console.log("database connected"))
.then(()=>{
    server.listen(4000, ()=>console.log("server is running"))
})
.catch(err =>console.log(err))