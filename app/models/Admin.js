let mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
  name: String
})

module.exports = mongoose.model('Admin', adminSchema)
