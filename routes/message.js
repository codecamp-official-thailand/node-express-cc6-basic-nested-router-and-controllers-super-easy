const express = require("express");
const router = express.Router();
const { addMessage, devideMessage, multiplyMessage } = require("../controllers/message");

router.get("/multiply", multiplyMessage);
router.get("/devide", devideMessage);
router.get("/add", addMessage);

module.exports = router;