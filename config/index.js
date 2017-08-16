module.exports = {
	database_url: "mongodb://localhost:27017",
	session_info: {
		secret: "session_secret_1234",
		resave: false,
		saveUninitialized: true
	},
	setupPassport: require('./passport')
}


// Sigup Page

// test signup page if the user is being created with username and password

// Test login, if the created user can login

// If the above things work, Research on how to authorize users in controller lever eg: /goals showuld redirect to login if user is not logged in
