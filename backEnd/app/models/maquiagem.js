var oracledb = require('oracledb');

module.exports = {
	list,
	doInsert
}

/*function list(x, callback) {
	var teste = [
		{position: 1, name: 'Gabrielly Cunha Gomes', weight: '13/03/2018'},
		{position: 2, name: 'Maria Goncalves Cunha', weight: '13/03/2018'},
		{position: 3, name: 'Yasmin Cunha Silva', weight: '13/03/2018'},
		{position: 4, name: 'Antônio Correia Araujo', weight: '18/03/2018'},
		{position: 5, name: 'Yasmin Cunha Silva', weight: '30/05/2018'},
	];
	var err = false;
	return callback(err, teste);
}*/
// Select
function list(q, connectionString, callback){

	oracledb.getConnection(
		{
			user: "LEO",
			password: "leo21edu31",
			connectionString: "192.168.56.1:1521/XE"
		},
		function(err, connection){
			if(err){
				console.log(err.message);
				return;
			}
			connection.execute(
				'SELECT * FROM leo.agmaquiagem',
				[],
				{
					outFormat: oracledb.OBJECT,
				},
				function(err, result){
					// if(err){
					// 	console.error(err.message);
					// 	doRelease(connection);
					// }
					//console.log(result.metaData);
					//var js = JSON.parse(result.row);
					//console.log(js);
					return callback(err, result);
				}
			)
		}
	);
}
// Insert
function doInsert(valor, connectionString, callback){
	oracledb.getConnection(
		{
			user: "LEO",
			password: "leo21edu31",
			connectionString: "192.168.56.1:1521/XE"	
		},
		function(err, connection){
			if(err){
				console.log(err.message);
				return;
			}
			connection.execute(
				'Insert into leo.agmaquiagem a (a.codcli, a.codServ, a.dataAgen, a.horaAgen) values (:codCli, :codServ, :dataAg, :horaAg)',
				[valor.codCli, valor.codSrv, valor.dtAg, valor.hrAg],
				function(err, result){
					if(err){
						return callback(err, result);
					} else {
						return callback(err, result)
					}
				}
			);
		}
	);
};

function doRelease(connection)
{
  connection.close(
    function(err) {
      if (err) {
        console.error(err.message);
      }
    });
}
