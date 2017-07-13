const adminController = require('./app/controllers/AdminController')

module.exports = function(app) {
  app.post('/admins', adminController.create)
  app.get('/admins', adminController.readAll)
  app.get('/admins/:adminId', adminController.readOne)
  app.patch('/admins/:adminId', adminController.update)
}
