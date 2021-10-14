const { Router } = require("express");
const router = Router();
const { intro } = require("../controllers/introController");

router.get("/", intro);

module.exports = router;
