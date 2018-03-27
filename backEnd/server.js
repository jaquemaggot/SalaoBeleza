var http = require('http');
var app = require('./Config/express.js')();

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express rodando na porta ' + app.get('port'));
});