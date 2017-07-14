const adminController = require('./controllers/AdminController')
const userController = require('./controllers/UserController')
const goalsController = require('./controllers/GoalsController')

module.exports = function(app) {
  // admin
  app.post('/admins', adminController.create)
  app.get('/admins', adminController.readAll)
  app.get('/admins/:adminId', adminController.readOne)
  app.patch('/admins/:adminId', adminController.update)

  // user
  app.post('/user', userController.create)
  app.get('/user', userController.readAll)
  app.get('/user/:userId', userController.readOne)
  app.patch('/user/:userId', userController.update)
  
  // goals
  app.post('/goals', goalsController.create)
  app.get('/goals', goalsController.readAll)
  app.get('/goals/:goalsId', goalsController.readOne)
  app.patch('/goals/:goalsId', goalsController.update)
}
