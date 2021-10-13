const { Router } = require("express");
const router = Router();

//Enviamos la info al frontend
router.post("/getCursos", (req, res) => {
	readJSONFile("./src/server/cursos.json", function (err, json) {
		if (err) {
			throw err;
		}
		res.send(json);
	});
});

function readJSONFile(filename, callback) {
	require("fs").readFile(filename, function (err, data) {
		if (err) {
			callback(err);
			return;
		}
		try {
			callback(null, JSON.parse(data));
		} catch (exception) {
			callback(exception);
		}
	});
}

module.exports = router;
