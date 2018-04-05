module.exports = function (app) {
	var connectionString = require('./../../Config/dbConfig');
	const models = require('./../models/maquiagem.js')

	//console.log(connectionString);
	

	return{
		list,
		insert,
	}

	function list(req, res) {
		var x = 0;
		models.list(x, connectionString, (err, rows)=>{
			if(err){
				return res.json({
					message: "Nao Deu Certo",
					code: 1,
					eror: err
				});
			}
			else{
				return res.send(rows);
			}
		});
	};

	function insert(req, res){
		let valor = {
			codCli: req.body.cli,
			codSrv: req.body.srv,
			dtAg: req.body.data,
			hrAg: req.body.hora
		}
		console.log(valor);
		models.insert(valor, connectionString, (err, rows)=>{
			if(err){
				return res.json({
					message: "Erro na insercao",
					code: 1,
					eror: err
				});
			}
			else{
				return res.send(rows);
			}
		});
	};

	
}