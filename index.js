
`use strict`
require('dotenv').config();
let express = require('express');
const app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static("public"));

const DB_CONNECTION_STRING = process.env.CONNECTION_STRING

const mongoose = require('mongoose');
mongoose.connect(DB_CONNECTION_STRING, { useNewUrlParser: true }, (err) => {
  console.log(err)
  console.log("Connected successfully to server");
});


const thePort = 3001;

// Routes
let commentsRoutes = require('./routes/comments');
let contactsRoutes = require('./routes/contacts');
let productsRoutes = require('./routes/products');
let vehiclesRoutes = require('./routes/vehicles');

app.use(commentsRoutes);
app.use(contactsRoutes);
app.use(productsRoutes);
app.use(vehiclesRoutes);

app.listen(thePort, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port", thePort);
});
