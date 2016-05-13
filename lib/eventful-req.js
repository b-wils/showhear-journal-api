var serviceRequest = require('service-request');
var url = require('url');

module.exports = function(path, args, done) {
	args['app_key'] = process.env.EVENTFUL_API_KEY;

	urlObj = {
		protocol: "http",
		host: "api.eventful.com/json",
		pathname: path,
		query: args
	}

	str=url.format(urlObj);

	console.log(str);

	return str;
}