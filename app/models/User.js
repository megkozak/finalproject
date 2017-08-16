let mongoose = require('mongoose')
let Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  isAdmin: Boolean,
  goals: [{type: mongoose.Schema.Types.ObjectId, ref: 'Goal'}]
})

userSchema.methods.validPassword = function(password) {
  return this.password === password;
}

module.exports = mongoose.model('User', userSchema)
