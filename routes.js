var eventSearchHandler = require('./handlers/event-by-geo');
var venueSearch = require('./handlers/venue-search');
var venueEvents = require('./handlers/venue-events');

module.exports = function(app) {
	app.get('/api/events/geo', eventSearchHandler);
	app.get('/api/venues/search', venueSearch);
	// app.get('/api/venues/:id/events', venueEvents);
}