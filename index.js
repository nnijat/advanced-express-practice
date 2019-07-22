let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

const thePort = 3001;

/*Add .get() routes for /contacts, /vehicles, /comments, /products*/
app.get('/contacts', (req, res) => {
  res.json(contacts)
})

app.get('/vehicles', (req, res) => {
  res.json(vehicles)
})

app.get('/comments', (req, res) => {
  res.json(comments)
})

app.get('/products', (req, res) => {
  res.json(products)
})

/* Add .get() routes for /contacts/:id, /vehicles/:id, /comments/:id, /products/:id*/
app.get("/contacts/:id", (req, res) => {
  let contactsId = contacts.find(c => c._id == req.params.id);
  res.json(contactsId);
});

app.get("/vehicles/:id", (req, res) => {
  let vehiclesId = vehicles.find(v => v._id == req.params.id);
  res.json(vehiclesId);
});

app.get("/comments/:id", (req, res) => {
  let commentsId = comments.find(c => c._id == req.params.id);
  res.json(commentsId);
});

app.get("/products/:id", (req, res) => {
  let productsId = products.find(p => p._id == req.params.id);
  res.json(productsId);
});

/* Add .post() routes for /contacts, /vehicles, /comments, /products*/
app.post('/contacts', (req, res) => {
  let contactBody = req.body;
  contacts.push(contactBody);
  res.json(contacts);
});

app.post('/vehicles', (req, res) => {
  let vehicleBody = req.body;
  vehicles.push(vehicleBody);
  res.json(vehicles);
});

app.post('/comments', (req, res) => {
  let commentBody = req.body;
  comments.push(commentBody);
  res.json(comments);
});

app.post('/products', (req, res) => {
  let productBody = req.body;
  products.push(productBody);
  res.json(products);
});


app.listen(thePort, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port", thePort);
});
