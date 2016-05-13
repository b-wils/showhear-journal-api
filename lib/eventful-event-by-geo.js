var eventful = require("./eventful-req");

module.exports = function(req, res) {

	args = {
		within: '0.1',
		location: '30.2701520,-97.7360360',
		date: 'today'
	}

	str = eventful('events/search', args, null);

	res.status(200).json({
		qry: str
	})

}