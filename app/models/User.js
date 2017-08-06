let mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  goals: [{type: mongoose.Schema.Types.ObjectId, ref: 'Goal'}]
})

module.exports = mongoose.model('User', userSchema)
