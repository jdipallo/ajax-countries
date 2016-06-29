(function() {
	angular.module('ViewModule', [])
		.controller('viewController', viewController)

	viewController.$inject = ['$http']

	function viewController($http) {
		vCtrl = this;

		vCtrl.getAllCountries = function() {
			$http.get('/api/v0/countries')
				.then(function(response) {
					// console.log(response.data)
					vCtrl.countries = response.data
				})
				.catch(function(error) {
					console.error(error)
				})
		}

		vCtrl.searchCountries = function(country) {
			console.log("in angular view controller - countryToSearchFor =", vCtrl.countryToSearchFor)
			$http.get('api/v0/search/' + country)
				.then(function(response) {
					vCtrl.countries = response.data;
				})
				.catch(function(error) {
					console.error(error)
				})
		}
	}
})();