const express = require("express");
const router = express.Router();
const {
  getVehicles,
  addVehicle,
  updateVehicle,
  deleteVehicle,
} = require("../controllers/vehicleController");
const { protect } = require("../middleware/authMiddleware");

router.use(protect).route("/").get(getVehicles).post(addVehicle);
router.use(protect).route("/:id").put(updateVehicle).delete(deleteVehicle);

module.exports = router;
