module.exports = function(app) {
	app.get('/maquiagem', app.controllers.controllerMaquiagem.list);

}