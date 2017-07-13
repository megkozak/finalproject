const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config');
const setupRoutes = require('./app/routes')
const port = process.env.PORT || 8081

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  /// Logging middleware

  console.log(req.method + " " + req.path)
  next()
})

mongoose.connect(config.database_url)

setupRoutes(app);

app.listen(port)
console.log("Listening on " + port)
