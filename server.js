const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config');
const setupRoutes = require('./app/routes');
const path = require('path');
const port = process.env.PORT || 3001

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  /// Logging middleware

  console.log(req.method + " " + req.path);
  next();
});

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/app/views'));

mongoose.connect(config.database_url);

setupRoutes(app);

app.listen(port);
console.log("Listening on " + port);
