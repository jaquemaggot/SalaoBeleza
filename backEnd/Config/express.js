var express = require('express');
var load = require('express-load');
var bodyparser = require('body-parser');

module.exports = function() {
	var app = express();
  	app.set('port', 3000);
  	app.use(express.static('./public'));
  	app.set('views', './app/views');
  	app.use(bodyparser.urlencoded({extended: true}));
  	app.use(bodyparser.json());
  	app.use(require('method-override')());

  	load('models', {cwd: 'app'}).then('controllers').then('routes').into(app);
  	return app;

};
