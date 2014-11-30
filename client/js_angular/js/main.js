(function(){
	var app = angular.module('exampleApp', ['HttpClient']);

	app.controller('SampleAPIController', ['httpClient', function(httpClient){
		var _self = this;

		_self.API_URL = "http://localhost:8000/api/v1/";
		
		_self.access_token = "33faa76c33b5f6fdef888fda0ca379a5deecc739";

		_self.locations = [];
		_self.getLocationsResult = '';
		_self.postLocationResult = '';
		
		_self.postLocation = function() {
			var location = JSON.stringify({
				user_id: 2,
				latitude: _self.postLatitude,
				longitude: _self.postLongitude,
				altitude: _self.postAltitude
			});

			httpClient.httpPost(_self.API_URL + 'location/', 'OAuth ' + _self.access_token, location,
				function (status) {
					_self.postLocationResult = status;
				},
				function (status, errorMessage) {
					_self.postLocationResult = status + ' (' + errorMessage + ')';
				}
			);
		};

		_self.getLocations = function() {
			httpClient.httpGet(_self.API_URL + 'location/', 'OAuth ' + _self.access_token,
				function (data, status) {
					_self.locations = data.objects;
					_self.getLocationsResult = status;
				},
				function (status, errorMessage) {
					_self.getLocationsResult = status + ' (' + errorMessage + ')';
				}
			);
		};
	}]);

})();
