const express = require("express");
const router = express.Router();
const {
  getVehicleList,
  getVehicle,
  addVehicle,
  updateVehicle,
  deleteVehicle,
} = require("../controllers/vehicleController");
const { protect } = require("../middleware/authMiddleware");

router.use(protect).route("/").get(getVehicleList).post(addVehicle);
router
  .use(protect)
  .route("/:id")
  .get(getVehicle)
  .put(updateVehicle)
  .delete(deleteVehicle);

module.exports = router;
