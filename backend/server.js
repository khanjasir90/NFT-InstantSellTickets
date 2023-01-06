const express = require('express');
require('dotenv').config();
require('./db_config')
var cors = require("cors");

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const eventRouter = require('./routes/eventRoute');
const userRouter  = require('./routes/userRoute');
const homeRouter = require('./routes/homeRoute');


app.use('/api', eventRouter);
app.use('/api', userRouter);
app.use('/api', homeRouter);


app.listen(process.env.PORT, () => console.log(`server running on ${process.env.PORT}`));