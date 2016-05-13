module.exports = function(db, foursqID, venue, done) {
	db.collection('venues').update({foursquareID:foursqID}, {$set: venue}, {upsert:true}, done);
}