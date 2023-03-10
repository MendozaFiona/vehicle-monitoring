const asyncHandler = require("express-async-handler");
const VehicleType = require("../models/vehicleTypeModel");
const FuelType = require("../models/fuelTypeModel");

// @desc Get vehicle types
// @route GET /api/vehicles/vehicle-types
// @access Public
const getVehicleTypes = asyncHandler(async (req, res) => {
  const vehicleTypes = await VehicleType.find();
  res.status(200).json(vehicleTypes);
});

// @desc Get fuel types
// @route GET /api/vehicles/fuel-types
// @access Public
const getFuelTypes = asyncHandler(async (req, res) => {
  const fuelTypes = await FuelType.find();
  res.status(200).json(fuelTypes);
});

module.exports = {
  getVehicleTypes,
  getFuelTypes,
};
