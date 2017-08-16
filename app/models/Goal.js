let mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title:  String,
  body:   String,
  weight: Number,
  date: { type: Date, default: Date.now },
  complete: { type: Boolean, default: false }
})

module.exports = mongoose.model('Goals', goalSchema)
