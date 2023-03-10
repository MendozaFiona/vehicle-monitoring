const express = require("express");
const router = express.Router();
const {
  getVehicleTypes,
  getFuelTypes,
} = require("../controllers/typeController");

router.get("/vehicle", getVehicleTypes);
router.get("/fuel", getFuelTypes);

module.exports = router;
