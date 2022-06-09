const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const http = require('http');
const app = require('./app');
require('dotenv').config();


const MONGO_URL = process.env.MONGO_URL;
const server = http.createServer(app)


async function startServer() {
    
        await mongoose.connect(MONGO_URL);
        console.log('Connected to MongoDB');
        server.listen(5000, () => {
            console.log(`Server is running on port ${5000}`);
        }   
        );
}
         
startServer();
