var oracledb = require('oracledb');

module.exports = {
	list,
	insert,
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
			connectionString: "192.168.1.174:1521/XE"
		},
		function(err, connection){
			if(err){
				console.log(err.message);
				return;
			}
			connection.execute(
				'SELECT * FROM leo.ag_maquiagem',
				[],
				{
					outFormat: oracledb.OBJECT,
				},
				function(err, result){
					return callback(err, result.rows);
				}
			)
		}
	);
}
// Insert
function insert(valor, connectionString, callback){
	oracledb.getConnection(
		{
			user: "LEO",
			password: "leo21edu31",
			connectionString: "192.168.1.174:1521/XE"	
		},
		function(err, connection){
			if(err){
				console.log(err.message);
				return;
			}
			connection.execute(
				'Insert into leo.ag_maquiagem (codcli, codServ, dataAgen, horaAgen) values (:codCli, :codServ, :dataAg, :horaAg)',
				[valor.codCli, valor.codSrv, valor.dtAg, valor.hrAg],
				{ autoCommit: true },
				function(err, result){
						return callback(err, result)
					}
				
			);
		}
	);
}

function doRelease(connection)
{
  connection.close(
    function(err) {
      if (err) {
        console.error(err.message);
      }
    });
}
