module.exports = function(app) {
	app.get('/depilacao', app.controllers.controllerMaquiagem.list);

}