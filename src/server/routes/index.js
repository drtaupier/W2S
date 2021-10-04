const express = require("express");
const app = express();

app.use(require("./leerFile"));
app.use(require("./mensaje"));

module.exports = app;
