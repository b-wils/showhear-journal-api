module.exports = function(req, res) {

	// console.log(req);

	// req.dbconn.collection('venues').find().toArray(function (err, result) {
	// 	res.json(result);
	// });


	str = foursqVenueGeoSearch('30.267158,-97.736703', function (error, response, body) {

		var data = JSON.parse(body);

		var resJSON = {
			venues: []
		}

		data.response.venues.slice(0, VENUE_LIMIT).map(function(venue) {
			venueEntry = {
				displayName: venue.name,
				'4sqid': venue.id
			}

			resJSON.venues.push(venueEntry);
		});

		res.status(200).json(resJSON);
	});

}