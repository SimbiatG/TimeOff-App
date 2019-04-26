const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserRoute = require('./routes/usersroute');
const app = express();
const port = 2019;

app.listen(port).on('listening', () => {
  console.log(' Your server is now running');
});


// to Connect to MongoDB

mongoose
  
.connect('mongodb://localhost/timeoff-backend', {useNewUrlParser: true})
.then(() => {
  console.log('MongoDB is connected and ready for use');
})
.catch(err => {
  console.log('An error occured while connecting to MongoDB', err);
});

app.use(cors());

// Add middlewares for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/users', UserRoute);
