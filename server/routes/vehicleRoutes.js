const express = require("express");
const router = express.Router();
const {
  getVehicles,
  getVehicleTypes,
  getFuelTypes,
  addVehicle,
  updateVehicle,
  deleteVehicle,
} = require("../controllers/vehicleController");
const { protect } = require("../middleware/authMiddleware");

router.use(protect).route("/").get(getVehicles).post(addVehicle);
router.use(protect).route("/:id").put(updateVehicle).delete(deleteVehicle);
router.get("/vehicle-types", getVehicleTypes);
router.get("/fuel-types", getFuelTypes);

module.exports = router;
