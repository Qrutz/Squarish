const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const http = require('http');
const app = require('./app');
require('dotenv').config();
const {getAllUsers} = require('./models/user/users.model'); 


const MONGO_URL = process.env.MONGO_URL;
const server = http.createServer(app)


async function startServer() {
    
        await mongoose.connect(MONGO_URL);
        console.log('Connected to MongoDB');
        getAllUsers().then(users => {
            console.log(users);
        });


        server.listen(5000, () => {
            console.log(`Server is running on port ${5000}`);
        }   
        );
}
         
startServer();
