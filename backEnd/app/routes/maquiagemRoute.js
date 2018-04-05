module.exports = function(app) {
	app.get('/maquiagem', app.controllers.controllerMaquiagem.list);
	app.post('/maquiagem', app.controllers.controllerMaquiagem.insert);

}