const User = require('../models/User');
const Goal = require('../models/Goal');

module.exports = {
  login: function(req, res) {
    return res.render('login')
  },

  home: function(req, res) {
    return res.render('home')
  },

  create: function(req, res) {
    var userInfo = req.body
    User.create(userInfo, (err, user) => {
      if (err) { return res.status(500).send(err); }
      return res.render(`users/show`, { err: err, user: user });
    })
  },

  readAll: function(req, res) {
    User.find({}, (err, users) => {
      if (err) { return res.status(500).send(err); }
      return res.render('users/index', {users: users})
    });
  },

  readOne: function(req, res) {
    var name = req.param('userId');
    User.findOne({ name: name }, (err, user) => {
      if (!user) {
        var userInfo = req.body
        User.create(userInfo, (err, user) => {
          return res.render('users/show', { err: err, user: user })
        })
      } else
        return res.render('users/show', { err: err, user: user })
    });
  },

  update: function(req, res) {
    var userInfo = req.body
    User.update({ _id: req.param('userId') }, userInfo, (err, user) => {
      if (err) { return res.status(500).send(err); }
      return res.status(201).send(user);
    })
  }
}
