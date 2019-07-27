let express = require('express');
const app = express();
let bodyParser = require('body-parser');
const { connect } = require("./dbConfig");

app.use(bodyParser.json());
app.use(express.static("public"));

const thePort = 3001;

// Routes
let commentsRoutes = require('./routes/comments');
let contactsRoutes = require('./routes/contacts');
let productsRoutes = require('./routes/products');
let vehiclesRoutes = require('./routes/vehicles');

// Database connection
connect();

// Call Routes
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
