const asyncHandler = require("express-async-handler");
const Vehicle = require("../models/vehicleModel");
const User = require("../models/userModel");

// @desc Get vehicles by logged in user
// @route GET /api/vehicles
// @access Private
const getVehicles = asyncHandler(async (req, res) => {
  const vehicles = await Vehicle.find({ user: req.user.id });

  const filters = req.query;
  let filteredVehicles = vehicles;

  if (filters) {
    filteredVehicles = vehicles.filter((vehicle) => {
      let isValid = true;
      for (key in filters) {
        isValid = isValid && vehicle[key] == filters[key];
      }
      return isValid;
    });
  }

  res.status(200).json(filteredVehicles);
});

// @desc Create vehicle
// @route POST /api/vehicles
// @access Private
const addVehicle = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  const vehicle = await Vehicle.create({
    ...req.body,
    user: req.user.id,
  });

  res.status(200).json(vehicle);
});

// @desc Update vehicle
// @route PUT /api/vehicles/:id
// @access Private
const updateVehicle = asyncHandler(async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id);

  if (!vehicle) {
    res.status(400);
    throw new Error("Vehicle not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Authorization validation
  if (vehicle.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedVehicle = await Vehicle.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedVehicle);
});

// @desc Delete vehicle
// @route DELETE /api/vehicles/:id
// @access Private
const deleteVehicle = asyncHandler(async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id);
  if (!vehicle) {
    res.status(400);
    throw new Error("Vehicle not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Authorization validation
  if (vehicle.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await vehicle.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getVehicles,
  addVehicle,
  updateVehicle,
  deleteVehicle,
};
