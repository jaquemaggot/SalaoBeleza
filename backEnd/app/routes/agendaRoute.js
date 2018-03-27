module.exports = function(app) {
	// console.log(app.controllers.controllerAgenda.list);
	app.get('/agenda', app.controllers.controllerAgenda.list);

}