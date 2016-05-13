var foursqVenueGeoSearch = require('../lib/foursquare-venue-geo-search');
var upsertVenueByFoursqID = require('../lib/upsert-venue-by-4sq-id');

const VENUE_LIMIT = 6;

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
				foursquareID: venue.id
			}

			resJSON.venues.push(venueEntry);

			// TODO take callback to validate upsert
			// we should probably give our internal id to app as well
			upsertVenueByFoursqID(req.db, venue.id, venueEntry, function(err, records) {

			});



		});

		res.status(200).json(resJSON);
	});

}