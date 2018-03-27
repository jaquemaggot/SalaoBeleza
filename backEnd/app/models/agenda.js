module.exports = {
	list
}

function list(x, callback) {
	var teste = [
		{"nome": "Leonardo"},
		{"nome": "Eduardo"},
		{"nome": "Elson"},
		{"nome": "Silvana"},
	];
	var err = false;
	return callback(err, teste);
}