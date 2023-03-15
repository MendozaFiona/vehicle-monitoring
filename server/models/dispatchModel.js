const mongoose = require("mongoose");

const dispatchSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Vehicle",
    },
    platenum: {
      type: String,
      required: [true, "Please add vehicle plate number"],
    },
    load_capacity: {
      type: Number,
      required: [true, "Please add load capacity"],
    },
    from_location: {
      type: String,
      required: [true, "Please add location (from)"],
    },
    to_location: {
      type: String,
      required: [true, "Please add location (to)"],
    },
    datetime_departure: {
      type: Date,
      required: [true, "Please add date and time"],
    },
    driver: {
      type: String,
      required: [true, "Please add driver"],
    },
    palero: {
      type: String,
      required: [true, "Please add palero"],
    },
    fuel_used: {
      type: Number,
    },
    datetime_arrival: {
      type: Date,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Dispatch", dispatchSchema);
