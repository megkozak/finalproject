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
      return res.redirect(`/users/show/${user._id}`);
    })
  },

  readAll: function(req, res) {
    User.find({}, (err, users) => {
      if (err) { return res.status(500).send(err); }
      return res.render('users/index', {users: users})
    });
  },

  readOne: function(req, res) {
    var id = req.param('userId');
    User.
    findOne({ _id: id }).
    exec((err, user) => {
      if (!user) {
        var userInfo = req.body
        User.create(userInfo, (err, user) => {
          return res.render('users/show', { err: err, user: user })
        })
      } else
        Goal.find({_user: user._id}, (err, goals) =>
          res.render('users/show', { err: err, user: user, goals: goals })
      );
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
