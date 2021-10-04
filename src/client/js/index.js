import { UI, UX } from "./classes";
import "../css/index.scss";
const ui = new UI();
const ux = new UX();

window.onload = function () {
	const t0 = performance.now();
	//Variables:
	const sct2 = document.querySelector(".sct2");

	ui.footer();
	ui.stickyNav();

	const form = document.querySelector("form");
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		validaForm();
	});

	const validaForm = () => {
		const nombre = document.getElementById("nombre").value.trim();
		const apellido = document.getElementById("apellido").value.trim();
		const email = document.getElementById("email").value.trim();
		const phone = document.getElementById("phone").value.trim();
		const mensaje = document.querySelector("textarea").value.trim();

		if (
			nombre === "" ||
			apellido === "" ||
			email === "" ||
			phone === "" ||
			mensaje === ""
		) {
			console.log("Debe completar todos los campos");
			return false;
		} else if (isNaN(phone)) {
			console.log("Debe ingresar un número válido.");
			return false;
		} else {
			console.log("The message was send");
			console.table({ nombre, apellido, email, phone, mensaje });
			postData("./message", {
				nombre,
				apellido,
				email,
				phone,
				mensaje,
			});
		}
	};

	getData("/getCursos", "{}");
	const t1 = performance.now();
	console.log("This code take: ", `${t1 - t0} miliseconds`);
};

const postData = async (url = "", data = {}) => {
	const response = await fetch(url, {
		method: "POST", //*GET, POST, PUT, DELETE, etc.
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
		//Body data type must match "Content-Type" header
		body: JSON.stringify(data),
	});
	try {
		const newData = await response.json();
		console.log(newData);
		return newData;
	} catch (error) {
		console.log("Error: ", error);
	}
};

const getData = async (url = "", data = {}) => {
	const response = await fetch(url, {
		method: "POST", //*GET, POST, PUT, DELETE, etc.
		credentials: "same-origin",
		body: JSON.stringify(data),
	});
	try {
		const newData = await response.json();
		for (const index in newData.cursos) {
			ui.cursos(newData.cursos[index]);
		}
	} catch (error) {
		console.log("Error: ", error);
	}
};
