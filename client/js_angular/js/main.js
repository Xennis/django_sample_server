(function(){
	var app = angular.module('exampleApp', ['HttpClient']);

	app.controller('SampleAPIController', ['$scope', 'httpClient', function($scope, httpClient){
		$scope.API_URL = "http://localhost:8000/api/v1/";
		
		$scope.access_token = "33faa76c33b5f6fdef888fda0ca379a5deecc739";

		$scope.postLocation = function() {
			var location = JSON.stringify({
				user_id: 10,
				latitude: $scope.postLatitude,
				longitude: $scope.postLongitude,
				altitude: $scope.postAltitude
			});

			httpClient.httpPost($scope.API_URL + 'location/', 'OAuth ' + $scope.access_token, location,
				function (status) {
					$scope.postLocationResult = status;
				},
				function (status, errorMessage) {
					$scope.postLocationResult = status + ' (' + errorMessage + ')';
				}
			);
		};

		$scope.getLocations = function() {
			httpClient.httpGet($scope.API_URL + 'location/', 'OAuth ' + $scope.access_token,
				function (data, status) {
					$scope.locations = data.objects;
					$scope.getLocationsResult = status;
				},
				function (status, errorMessage) {
					$scope.getLocationsResult = status + ' (' + errorMessage + ')';
				}
			);
		};
	}]);

})();
