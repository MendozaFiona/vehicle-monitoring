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
    date_departure: {
      type: Date,
      required: [true, "Please add date"],
    },
    time_departure: {
      type: String,
      required: [true, "Please add time"],
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
    date_arrival: {
      type: Date,
    },
    time_arrival: {
      type: String,
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
