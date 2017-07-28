const Goals = require('../models/Goals');

module.exports = {
  create: function(req, res) {
    var goalInfo = req.body;
    Goals.create(goalInfo, (err, goal) => {
      if (err) { return res.status(500).send(err); }
      return res.redirect(`/goals/${goal._id}`);
    })
  },

  readAll: function(req, res) {
    Goals.find({}, (err, goals) => {
      if (err) { return res.status(500).send(err); }
      return res.render("goals",{err: err, goals: goals})
     });
  },

  readOne: function(req, res) {
    Goals.findById(req.param('goalsId'), (err, goal) => {
      if (err) { return res.status(500).send(body); }
      return res.render('goal', {err: err, goal: goal})
    });
  },

  update: function(req, res) {
    var goalInfo = req.body
    Goals.update({ _id: req.param('goalsId') }, goalInfo, (err, goal) => {
      if (err) { return res.status(500).send(err); }
      return res.redirect(`/goals/${goal._id}`);
    })
  }
}
