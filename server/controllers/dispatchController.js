const asyncHandler = require("express-async-handler");
const Dispatch = require("../models/dispatchModel");
const Vehicle = require("../models/vehicleModel");

// @desc Get dispatches by user
// @route GET /api/dispatch
// @access Private
const getDispatches = asyncHandler(async (req, res) => {
  const dispatches = await Dispatch.find({ user: req.user.id });

  const filters = req.query;
  let filteredDispatches = dispatches;

  if (filters) {
    filteredDispatches = dispatches.filter((dispatch) => {
      let isValid = true;
      for (key in filters) {
        isValid = isValid && dispatch[key] == filters[key];
      }
      return isValid;
    });
  }

  res.status(200).json(filteredDispatches);
});

// @desc Create dispatch
// @route POST /api/dispatch
// @access Private
const addDispatch = asyncHandler(async (req, res) => {
  const {
    id,
    load_capacity,
    from_location,
    to_location,
    date_departure,
    time_departure,
    driver,
    palero,
  } = req.body;

  if (
    !id ||
    !load_capacity ||
    !from_location ||
    !to_location ||
    !date_departure ||
    !time_departure ||
    !driver ||
    !palero
  ) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const vehicle = await Vehicle.findById(req.body.id);

  if (!vehicle) {
    res.status(400);
    throw new Error("Vehicle not found");
  }

  const dispatch = await Dispatch.create({
    user: req.user.id,
    vehicle: vehicle._id,
    platenum: vehicle.platenum,
    load_capacity,
    from_location,
    to_location,
    date_departure,
    time_departure,
    driver,
    palero,
    status: "ongoing",
  });

  await Vehicle.findByIdAndUpdate(
    vehicle._id,
    { status: "used" },
    { new: true }
  );

  res.status(200).json(dispatch);
});

// @desc Update dispatch
// @route PUT /api/dispatch/:id
// @access Private
const updateDispatch = asyncHandler(async (req, res) => {
  const { fuel_used, date_arrived, time_arrived } = req.body;

  if (!fuel_used || !date_arrived || !time_arrived) {
    res.status(400);
    throw new Error("Please add additional fields");
  }

  const dispatch = await Dispatch.findById(req.params.id);

  if (!dispatch) {
    res.status(400);
    throw new Error("Dispatch not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Authorization validation
  if (dispatch.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedDispatch = await Dispatch.findByIdAndUpdate(
    req.params.id,
    { ...req.body, status: "completed" },
    { new: true }
  );

  await Vehicle.findByIdAndUpdate(
    dispatch.vehicle.id,
    { status: "free" },
    { new: true }
  );

  res.status(200).json(updatedDispatch);
});

module.exports = {
  getDispatches,
  addDispatch,
  updateDispatch,
};
