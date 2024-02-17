const express = require("express");
router = express.Router();

const { getallbooking } = require("../controllers/booking");

router.post("/bookroom", getallbooking);
module.exports = router;
