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

		vCtrl.searchCountries = function(countryToSearchFor) {
			$http.get('api/v0/search/' + countryToSearchFor)
				.then(function(response) {
					console.log("In searchCountries: ", response.data)
					vCtrl.countries = response.data;
				})
				.catch(function(error) {
					console.error(error)
				})
		}

		vCtrl.updateCountry = function(country) {
			country.hasTraveled = !country.hasTraveled

			$http.put('api/v0/update/' + country, country)
				.then(function(response) {
					if (response.status === 200) {
						 // alert("Successfully updated country");
						 $('#updateModal').modal('show');
					}					
				})
				.catch(function(error){
					console.error(error)
			})
		}
	}
})();