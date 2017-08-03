let mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: String,
  goals: [{type: mongoose.Schema.Types.ObjectId, ref: "Goal"}]
})

module.exports = mongoose.model('User', userSchema)
