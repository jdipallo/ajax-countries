var Countries = require('./models/Countries.json')

var countryController = {
	all: function(req, res) {
		res.json(Countries);
	},
	search: function(req, res) {
		var country = req.params.country.toLowerCase()
		var searchResult = [{}]

		// console.log("in search: req.params.country =", country);
		for (var i = 0; i< Countries.length; i++) {
			if (Countries[i].localName.toLowerCase().includes(country)) {
				searchResult.push(Countries[i])
			}
		}
		res.json(searchResult)
	}
}

module.exports = countryController