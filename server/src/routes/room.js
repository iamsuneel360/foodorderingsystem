const express = require("express");
router = express.Router();
const { getallrooms } = require("../controllers/room")


router.get("/rooms", getallrooms);
module.exports = router;