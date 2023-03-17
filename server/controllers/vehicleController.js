const asyncHandler = require("express-async-handler");
const Vehicle = require("../models/vehicleModel");
const VehicleType = require("../models/vehicleTypeModel");
const FuelType = require("../models/fuelTypeModel");

// @desc Get vehicles by logged in user
// @route GET /api/vehicles
// @access Private
const getVehicles = asyncHandler(async (req, res) => {
  const vehicles = await Vehicle.find({ user: req.user.id });

  const filters = req.query;
  let filteredVehicles = vehicles;

  if (JSON.stringify(filters) !== "{}") {
    filteredVehicles = vehicles.filter((vehicle) => {
      let isValid = true;
      for (key in filters) {
        if (key === "platenum") {
          isValid =
            isValid &&
            vehicle[key].toUpperCase().includes(filters[key].toUpperCase());
        } else {
          isValid =
            isValid &&
            vehicle[key].toString().toUpperCase() ==
              filters[key].toString().toUpperCase();
        }
      }
      return isValid;
    });
  }

  res.status(200).json(filteredVehicles);
});

// @desc check if plate number exists
// @route GET /api/vehicles/check
// @access Private
const checkPlatenum = asyncHandler(async (req, res) => {
  const vehicles = await Vehicle.find();

  const platenum = req.body.platenum;
  let exists = false;

  if (platenum) {
    vehicles.every((vehicle) => {
      if (vehicle["platenum"].toUpperCase() === platenum.toUpperCase()) {
        exists = true;
        return false;
      }
      return true;
    });
  }

  res.status(200).json(exists);
});

// @desc Create vehicle
// @route POST /api/vehicles
// @access Private
const addVehicle = asyncHandler(async (req, res) => {
  const {
    platenum,
    brand,
    model,
    year,
    vehicle_type,
    vehicle_capacity,
    fuel_type,
    fuel_tank,
  } = req.body;

  if (
    !platenum ||
    !brand ||
    !model ||
    !year ||
    !vehicle_type ||
    !vehicle_capacity ||
    !fuel_type ||
    !fuel_tank
  ) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const vehicle_type_name = await VehicleType.findById(vehicle_type);
  const fuel_type_name = await FuelType.findById(fuel_type);

  if (!vehicle_type_name) {
    res.status(400);
    throw new Error("Vehicle type does not exist");
  }

  if (!fuel_type_name) {
    res.status(400);
    throw new Error("Fuel type does not exist");
  }

  const vehicle = await Vehicle.create({
    ...req.body,
    user: req.user.id,
    vehicle_type_name: vehicle_type_name.name,
    fuel_type_name: fuel_type_name.name,
    status: "free",
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

  const { vehicle_type, fuel_type } = req.body;
  let body = { ...req.body };

  if (vehicle_type) {
    try {
      const vehicle_type_name = await VehicleType.findById(vehicle_type);
      body["vehicle_type_name"] = vehicle_type_name.name;
    } catch (error) {
      res.status(400);
      throw new Error("Vehicle type does not exist");
    }
  }

  if (fuel_type) {
    const fuel_type_name = await FuelType.findById(fuel_type);

    if (!fuel_type_name) {
      res.status(400);
      throw new Error("Fuel type does not exist");
    }

    body["fuel_type_name"] = fuel_type_name.name;
  }

  const updatedVehicle = await Vehicle.findByIdAndUpdate(req.params.id, body, {
    new: true,
  });

  res.status(200).json(updatedVehicle);
});

// @desc Delete vehicle
// @route DELETE /api/vehicles/:id
// @access Private
const deleteVehicle = asyncHandler(async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id);

  if (!vehicle || !req.params.id || req.params.id === "") {
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

  if (vehicle.status === "used") {
    res.status(400);
    throw new Error("Vehicle is currently being used");
  }

  await vehicle.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getVehicles,
  checkPlatenum,
  addVehicle,
  updateVehicle,
  deleteVehicle,
};
