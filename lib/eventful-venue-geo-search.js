var eventfulUrl = require("./eventful-req");
var request = require('request');

// search radius in miles
const SEARCH_RADIUS = 1;

module.exports = function(geo, query, done) {

	args = {
		within: SEARCH_RADIUS,
		keywords: query,
		location: geo
	}

	url = eventfulUrl('venues/search', args);

	var request = require('request');

	request(url, function (error, response, body) {
	  done(error, response, body);
	});

}
