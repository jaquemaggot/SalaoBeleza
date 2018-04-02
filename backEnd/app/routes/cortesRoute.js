module.exports = function(app) {
	app.get('/depilacao', app.controllers.controllerCortes.list);

}