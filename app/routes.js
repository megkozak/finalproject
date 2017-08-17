const adminController = require('./controllers/AdminController');
const userController = require('./controllers/UserController');
const goalsController = require('./controllers/GoalsController');
const authenticate = require('./middleware');

module.exports = function(app, passport) {

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
  app.get('/goals', goalsController.all)
  app.post('/goals', authenticate.user, goalsController.create)
  app.get('/goals/index', authenticate.user, goalsController.readAll)
  app.get('/goals/show/:goalsId', goalsController.readOne)
  // app.get('/goals/show/:goalsId', goalsController.readOne)
  app.get('/goals/update/:goalsId', goalsController.update)
  app.get('/goals/:goalId/complete', authenticate.user, goalsController.complete)
  app.get('/goals/:goalId/undo', authenticate.user, goalsController.undo)

  //views
  app.get('/', userController.home)
  app.get('/login', userController.login)
  app.get('/signup', userController.signup)

  app.post('/signup', passport.authenticate('signup', {
    successRedirect : '/goals/index',
    failureRedirect : '/signup',
  }));

  app.post('/login', passport.authenticate('login', {
    successRedirect : '/goals/index',
    failureRedirect : '/login',
  }));

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
}
