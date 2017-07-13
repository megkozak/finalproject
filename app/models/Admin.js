let mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require: () => {
      return this.password.length > 7
    }
  }
})

module.exports = mongoose.model('Admin', adminSchema)
