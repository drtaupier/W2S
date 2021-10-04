projectData = [];
const express = require("express");
const app = express();

const myDate = () => {
	const today = new Date();
	const day = today.getDate();
	const month = today.getMonth() + 1;
	const year = today.getFullYear();
	const hour = today.getHours();
	const minutes = today.getMinutes();
	const fechaActual = `${month}-${day}-${year} ${hour}:${minutes} hrs.`;
	return fechaActual;
};

app.post("./message", (req, res) => {
	const body = req.body;
	let message = {
		nombre: body.nombre,
	};
	console.log(message);
});

module.exports = app;
