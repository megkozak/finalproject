let mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title:  String,
  body:   String,
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Goals', goalSchema)
