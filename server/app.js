const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userRouter = require('./routes/users.router');
const postRouter = require('./routes/posts.router');
const helmet = require('helmet');


const app = express();



app.use(express.json());
app.use(helmet());
app.use(morgan('common'))
app.use(cors({ origin: 'http://localhost:3000' }));




app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

module.exports = app;

