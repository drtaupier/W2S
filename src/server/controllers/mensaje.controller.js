const { request, response } = require("express");

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

const mensajePost = (req = request, res = response) => {
	const body = req.body;
	console.log(body);
	res.json({
		nombre: body.nombre,
		apellido: body.apellido,
		email: body.apellido,
		phone: body.phone,
		mensaje: body.mensaje,
		fecha: myDate(),
	});
};

module.exports = {
	mensajePost,
};
