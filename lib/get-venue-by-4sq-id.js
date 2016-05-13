module.exports = function(db, foursqID, done) {
	db.collection('venues').update({foursquareID:foursqID}, {$set: venue}, {upsert:true}, done);
}