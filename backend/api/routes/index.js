const router = require("express").Router();
const Controller = require("../controller");

router.get("/resources", Controller.getResources);

module.exports = router;
