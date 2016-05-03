module.exports = function(app) {
	app.get('/test', function(req,res){
		res.status(200).json({
			test: 'hi'
		})
	});
}