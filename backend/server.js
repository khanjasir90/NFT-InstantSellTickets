const express = require('express');
const app = express();
const PORT = 5000;

const eventRouter = require('./routes/eventRoute');
const userRouter  = require('./routes/userRoute');
const homeRouter = require('./routes/homeRoute');

app.use('/api', eventRouter);
app.use('/api', userRouter);
app.use('/api', homeRouter);


app.listen(PORT, () => console.log('Server running on port '+PORT));