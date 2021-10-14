const { response } = require("express");
path = require("path");

const home = (req, res = response) => {
	res.sendFile(path.resolve("./dist/index.html"));
};

module.exports = {
	home,
};
