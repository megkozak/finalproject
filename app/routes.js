const adminController = require('./controllers/AdminController')
const userController = require('./controllers/UserController')
const goalsController = require('./controllers/GoalsController')

module.exports = function(app) {
  
  // admin
  app.post('/admins', adminController.create)
  app.get('/admins/index', adminController.readAll)
  app.get('/admins/show/:adminId', adminController.readOne)
  app.patch('/admins', adminController.update)

  // user
  app.post('/users', userController.create)
  app.get('/users/index', userController.readAll)
  app.get('/users/show/:userId', userController.readOne)
  app.patch('/users', userController.update)

  // goals
  app.post('/goals', goalsController.create)
  app.get('/goals/index', goalsController.readAll)
  app.get('/goals/show/:goalsId', goalsController.readOne)
  app.patch('/goals', goalsController.update)

  //views
  app.get('/', userController.home)
  app.get('/login', userController.login)
}

// index/show/new/edit/

// 1- User logs IN
// 2- User lands in goals/index (WHICH also has a form to add the goal AND has LINK to go to users/show)
