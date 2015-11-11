app.factory('MyService', function ($http) {
	var myService = {
		getPie: function () {
			var result = $http.get('Json/geo.json').then(function (response) {
				return response.data;
			});
			return result;
		},
		getTable: function () {
			var result = $http.get('Json/publishers.json').then(function (response) {
				return response.data;
			});
			return result;
		}
	};
	return myService;
});