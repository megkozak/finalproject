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
