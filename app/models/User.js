let mongoose = require('mongoose')
let Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  goals: [{type: mongoose.Schema.Types.ObjectId, ref: 'Goal'}]
})

module.exports = mongoose.model('User', userSchema)
