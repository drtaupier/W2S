const { mensajePost } = require("../controllers/mensaje.controller");
const { Router } = require("express");
const router = Router();

router.post("/", mensajePost);

module.exports = router;
