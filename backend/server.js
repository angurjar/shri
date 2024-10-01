const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const userRoute = require('./routes/user-route');
const productRoute = require('./routes/product-route');
const tagRoute = require('./routes/tag-route');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();

// Middleware
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

// Static file serving
app.use('/static/images', express.static(path.join('static', 'images')));
app.use('/uploads/images/users-images', express.static(path.join('uploads', 'images', 'users-images')));
app.use('/uploads/images/product-images', express.static(path.join('uploads', 'images', 'product-images')));
app.use('/uploads/images', express.static(path.join('uploads', 'images')));

// Route handling
app.use('/user', userRoute);
app.use('/tag', tagRoute);
app.use('/product', productRoute);

// Error handling middleware
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

// Directly connecting to MongoDB using host, port, and database name
const startServer = async () => {
  const dbHost = 'localhost'; // or your MongoDB server IP
  const dbPort = '27017';      // default MongoDB port
  const dbName = 'mydaba'; // replace with your database name

  try {
    await mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, {
      
    });
    console.log("Connected to Database");
    app.listen(5000, () => {
      console.log("Listening at port 5000]");
    });
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

// Start the server
startServer();
