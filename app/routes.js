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
  app.post('/users', userController.create)
  app.get('/users', userController.readAll)
  app.post('/users/:userId', userController.readOne)
  app.patch('/users/:userId', userController.update)

  // goals
  app.post('/goals', goalsController.create)
  app.post('/users/:userId', goalsController.readAll)
  app.get('/goals/:goalsId', goalsController.readOne)
  app.patch('/goals/:goalsId', goalsController.update)

  //views
  app.get('/', userController.home)
  app.get('/login', userController.login)
}
