module.exports = function(app) {
	app.get('/manicure', app.controllers.controllerManicure.list);

}