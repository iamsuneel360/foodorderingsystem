const express = require("express");
router = express.Router();
const { getallrooms, getroombyid } = require("../controllers/room");

router.get("/rooms", getallrooms);
router.post("/room", getroombyid);
module.exports = router;
