var express 	= require('express')
var bodyParser	= require('body-parser')
var logger		= require('morgan')
var mongoose	= require('mongoose')
var db 			= '//localhost/mongo-exercises'
var apiRouter	= require('./api-router')

// set our port either from the environment or to 2001
var port		= process.env.PORT || 2001

// initantiate our express app
var app 		= express();

// connect to our mongoose db - it will create one if one doesn't exist
mongoose.connect('mongodb:' + db, function(err) {
	if (err) {
		console.error('ERROR: Connecting to DB: ', db)
	} else {
		console.info('SUCCESS: Connected to ', db)
	}
})

// mount our middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use('/api/v0', apiRouter) 

// for static pages in the ./public folder
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/bower_components'))

// start our server listening on the port
app.listen(port, function(err) {
	if (err) {
		console.error('ERROR: Starting server on port', port)
	} else {
		console.info('SUCCESS: Server started and listening on port', port)
	}
})