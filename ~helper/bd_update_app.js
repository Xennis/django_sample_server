/*!
 * Module dependencies.
 */
var client = require('phonegap-build-api');

var client_api;


// --------------------------- Functions ----------------------------

/**
 * Sets the client_api.
 *
 * Options:
 *
 *   - `api.token` {String} is the user token for authentication.
 */
function set_api(token) {
	var options = {
		token: token  
	};

	client.auth(options, function(e, api) {
		if (e) {
			console.log('error:', e);
			return;
		}
		//console.log('api: ', api);
		client_api = api;
	});
}

/**
 * Update existing app.
 *
 * Options:
 *
 *   - `api`
 *   - `app_id` {String} is a ID of an app (e.g. `"100000"`).
 *   - `file` {String} is a zip file (e.g. `"app.zip"`).
 */
function put_app(api, app_id, file) {

	var options = {
	    form: {
	        data: {
	            debug: true
	        },	    	
	        file: file
	    },
	    method: 'POST'
	};

    api.put('/apps/' + app_id, options, function(e, data) {
    	if (e) {
	    	console.log('error:', e);
	    	return;
    	}
    	console.log('data:', data.status);
	});
}


// --------------------------- Handle arguments ----------------------------
if (process.argv.length < 5) {
	console.log('less arguments');
	console.log('usage: <token> <app_id> <file>');
	console.log('example: 87dsfk 100000 tmp.zip');
	return;
}

set_api(process.argv[2]);
if (client_api) {
	put_app(client_api, process.argv[3], process.argv[4]);
}