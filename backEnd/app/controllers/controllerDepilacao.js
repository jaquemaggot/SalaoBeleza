module.exports = function (app) {

	const models = require('./../models/depilacao.js')

	return{
		list
	}

	function list(req, res) {
		var x = 0;
		models.list(x, (err, rows)=>{
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
	}
}