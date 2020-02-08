const express = require("express");
const app = express();
const port = 3000;
require('dotenv').config();

const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

// Use Body Parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Add after body parser initialization!
app.use(expressValidator());

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// set db
require("./data/reddit-db");

// app.get('/', (req, res) => res.render('posts-index'))
app.get("/posts/new", (req, res) => res.render("posts-new"));

//Controllers
require("./controllers/posts")(app);
require('./controllers/comments.js')(app);
require('./controllers/auth.js')(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;