const express = require('express');
const mongoose = require('mongoose');

// const { runAsyncWrapper } = require('./utils');
const router = require('./controllers/wilderControllers');

const app = express();
// body parser
app.use(express.json());

// mongoose connect to database
mongoose
    .connect('mongodb://127.0.0.1:27017/wilderdb', {
      autoIndex: true
    })
    .then(() => console.log('Connected'))
    .catch(err => console.log(err));

// routes
// app.get('/', (_, res) => {
//   res.status(200).send('Test user created');
// });

// Routes
app.use('/wilders', router);

// server listen to port 3000
app.listen(3000, () => console.log('Server listening server 3000'));