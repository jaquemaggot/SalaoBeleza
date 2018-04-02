module.exports = {
	list
}

function list(x, callback) {
	var teste = [
		{position: 1, name: 'Gabrielly Cunha Gomes', weight: '13/03/2018'},
		{position: 2, name: 'Maria Goncalves Cunha', weight: '13/03/2018'},
		{position: 3, name: 'Yasmin Cunha Silva', weight: '13/03/2018'}
	];
	var err = false;
	return callback(err, teste);
}
