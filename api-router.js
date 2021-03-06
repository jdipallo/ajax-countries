var apiRouter 	= require('express').Router()
var countryCtrl = require('./country-controller')

apiRouter.route('/countries')
	.get(countryCtrl.all)

apiRouter.route('/search/:country')
	.get(countryCtrl.search)

apiRouter.route('/update/:country')
	.put(countryCtrl.update)

module.exports = apiRouter

