var Countries = require('./models/Countries.json')

// lets default the hasTraveled Property to false for each 
//country ; for NOW using our Countries array of JSON objects
// after, we will use Mongo

for (var i = 0; i < Countries.length; i++) {
	Countries[i].hasTraveled = false;
}

var countryController = {
	all: function(req, res) {
		res.json(Countries);
	},
	search: function(req, res) {
		var country = req.params.country.toLowerCase()
		var searchResult = []

		// console.log("in search: req.params.country =", country);
		for (var i = 0; i < Countries.length; i++) {
			if (Countries[i].name.toLowerCase().includes(country)) {
				searchResult.push(Countries[i])
			}
		}
		res.json(searchResult)
	},
	update: function(req, res) {
		// var countryToUpdate = req.params.country.toLowerCase()
		var countryToUpdate = req.body.name.toLowerCase()

		for (var i = 0; i < Countries.length; i++) {
			if (Countries[i].name.toLowerCase() === countryToUpdate) {
				Countries[i] = req.body;
				console.log("Countries[i] = ", Countries[i])
				res.json({status: 200, success: true, message: "Successfully updated country" })
			}
		}
	}
}

module.exports = countryController