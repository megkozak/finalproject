const Goal = require('../models/Goal');
const User = require('../models/User');

module.exports = {
  create: function(req, res) {
    var goalInfo = req.body;
    Goal.create(goalInfo, (err, goal) => {
      if (err) { return res.status(500).send(err); }
      return res.redirect(`/users/show/${req.body._user}`);
    })
  },
// pass id from goal into function
// use this id to find goal to update

  // complete: function(req, res) {
  //   // var goalProg = req.body;
  //   Goal.where('_id').equals(req.body._id).exec((err, user) => {
  //     console.log(goal);
  //     Goal.complete = true;
  //   // Goal.complete(goalProg._id, (err, goal) => {
  //   //   if(goalProg = complete:false)
  //   //   if (err) { return res.status(500).send(err); }
  //   //   return res.redirect(`/users/show/${req.body._user}`);
  //   })
  // },

  readAll: function(req, res) {
    // console.log(req);
    User.where('name').equals(req.body.name).exec((err, user) => {
      console.log(user);
      Goal.find({'_user': user.name}, (err, goals) => {
        // if (err) { return res.status(500).send(err); }
        return res.render('goals/index',{err: err, goals: goals, user: user.name})
       });
    })
  },

  readOne: function(req, res) {
    Goal.
    findById(req.param('goalsId')).
    populate('_user').
    exec((err, goal) => {
      return res.render('goals/show', {err: err, goal: goal})
    });
  },

  update: function(req, res) {
    var goalInfo = req.body
    Goal.update({ _id: req.param('goalsId') }, goalInfo, (err, goal) => {
      if (err) { return res.status(500).send(err); }
      return res.redirect(`/goals/show`);
    })
  }
}
