const express = require('express');
const app = express();
require('dotenv').config();
require('./db_config')
const cors = require('cors');

const corsOptions = {
    origin: '*',
    optionSuccessStatus: 200
}


const eventRouter = require('./routes/eventRoute');
const userRouter  = require('./routes/userRoute');
const homeRouter = require('./routes/homeRoute');

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', eventRouter);
app.use('/api', userRouter);
app.use('/api', homeRouter);


app.listen(process.env.PORT, () => console.log(`server running on ${process.env.PORT}`));