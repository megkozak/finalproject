const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session');
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
app.use(express.static('public'))

app.use(session(config.session_info));
app.use(passport.initialize());
app.use(passport.session());

config.setupPassport(passport);

app.use((req, res, next) => {
  /// Logging middleware

  console.log(req.method + " " + req.path);
  next();
});

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/app/views'));

mongoose.connect(config.database_url);

setupRoutes(app, passport);

app.listen(port);
console.log("Listening on " + port);
