var url = require('url');

module.exports = function(path, args) {
	args['client_id'] = process.env.FOURSQUARE_CLIENT_ID;
	args['client_secret'] = process.env.FOURSQUARE_CLIENT_SECRET;
	args['v'] = '20160505';

	urlObj = {
		protocol: "https",
		host: "api.foursquare.com/v2",
		pathname: path,
		query: args
	}

	str=url.format(urlObj);

	return str;
}