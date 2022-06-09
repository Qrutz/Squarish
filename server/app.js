const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userRouter = require('./routes/users.router');


const app = express();

app.use(morgan('common'))

app.use(cors({ origin: 'http://localhost:3000' }));


app.use(express.json());


app.use("/api/users", userRouter);

module.exports = app;

