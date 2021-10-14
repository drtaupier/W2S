require("dotenv").config();
const express = require("express");
const app = express();
const { Router } = require("express");
const router = Router();
const path = require("path");

//Middlewares
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Cors
const cors = require("cors");
app.use(cors());
//Lista de Cursos:
app.use(require("./leeCursos"));
//Lee archivos estáticos:
app.use(express.static("dist"));
app.use("/public", express.static("public"));
//Rutas:
app.use("/home", require("./routes/inicio"));
app.use("/message", require("./routes/mensaje"));
app.use("/intro", require("./routes/intro"));

//Server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
	console.log(`running on localhost ${port}`);
});
