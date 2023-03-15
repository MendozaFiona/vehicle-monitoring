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

  if (JSON.stringify(filters) !== "{}") {
    const {
      date_departure_from,
      time_departure_from,
      date_departure_to,
      time_departure_to,
    } = filters;

    if (
      (!date_departure_from && time_departure_from) ||
      (!date_departure_to && time_departure_to)
    ) {
      res.status(400);
      throw new Error("Invalid Input");
    }

    const condition = {};

    if (date_departure_from) {
      if (time_departure_from) {
        condition["$gte"] = new Date(
          date_departure_from + " " + time_departure_from
        );
      } else {
        condition["$gte"] = new Date(date_departure_from);
      }
    }

    if (date_departure_to) {
      if (time_departure_to) {
        condition["$lte"] = new Date(
          date_departure_to + " " + time_departure_to
        );
      } else {
        condition["$lte"] = new Date(date_departure_to);
      }
    }

    filteredDispatches = await Dispatch.find({
      datetime_departure: condition,
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

  const datetoday = new Date().toLocaleDateString("fr-ca");

  if (date_departure < datetoday) {
    res.status(400);
    throw new Error("Invalid departure date");
  }

  const timenow = new Date(Date.now() - 60000).toLocaleTimeString("en-us", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  });

  if(date_departure === datetoday && time_departure < timenow){
    res.status(400);
    throw new Error("Invalid departure time");
  }

  const datetime_departure = new Date(date_departure + " " + time_departure);
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
    datetime_departure,
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
  const { fuel_used, date_arrival, time_arrival } = req.body;

  if (!fuel_used || !date_arrival || !time_arrival) {
    res.status(400);
    throw new Error("Please add all fields");
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

  const datetime_arrival = new Date(date_arrival + " " + time_arrival);

  const updatedDispatch = await Dispatch.findByIdAndUpdate(
    req.params.id,
    {
      fuel_used,
      datetime_arrival,
      status: "completed",
    },
    { new: true }
  );

  await Vehicle.findByIdAndUpdate(
    dispatch.vehicle,
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
