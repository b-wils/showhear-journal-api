var foursquareUrl = require("./foursquare-url");
var request = require('request');

// search radius in meters
const SEARCH_RADIUS = 50;
const SEARCH_LIMIT = 10;

module.exports = function(geo, done) {

	args = {
		radius: SEARCH_RADIUS,
		intent: 'checkin',
		categoryId: '4bf58dd8d48988d1e5931735,4bf58dd8d48988d116941735',
		ll: geo,
		limit: SEARCH_LIMIT
	}

	url = foursquareUrl('venues/search', args);

	var request = require('request');

	request(url, function (error, response, body) {
	  done(error, response, body);
	});

}