(function(){
	var app = angular.module('HttpClient', []);
	app.service('httpClient', ['$http', function($http) {
			
		// Public functions
		return({
			httpPost: httpPost,
			httpGet: httpGet
		});

		function httpPost(url, authorization, data, success_callback, error_callback) {
			console.log('request:' + url + data);
			
			return $http({
				method: 'post',
				url: url,
				data: data,
				headers: {
					Authorization: authorization,
					'Content-Type': 'application/json'
				}
			})
			.success(function(data, status, headers, config) {
				success_callback(status);
			})
			.error(function(data, status, headers, config) {
				var errorMessage = null;
				if (data.error_message) {
					errorMessage = data.error_message;
				}
				error_callback(status, errorMessage);
			});
		}
		
		function httpGet(url, authorization, success_callback, error_callback) {
			console.log('request:' + url);
			
			return $http({
				method: 'get',
				url: url,
				headers: {
					Authorization: authorization,
					'Content-Type': 'application/json'
				}
			})
			.success(function(data, status, headers, config) {
				success_callback(data, status);
			})
			.error(function(data, status, headers, config) {
				var errorMessage = null;
				if (data.error_message) {
					errorMessage = data.error_message;
				}				
				error_callback(status, errorMessage);
			});
		}

	}]);
})();