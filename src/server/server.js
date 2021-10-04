require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Cors
const cors = require("cors");
app.use(cors());

app.use(express.static("dist"));
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(path.resolve("./dist/index.html"));
});

//Configuración de rutas:
app.use(require("./routes/index"));

//Server
const port = process.env.PORT;
const server = app.listen(port, () => {
	console.log(`running on localhost ${port}`);
});
