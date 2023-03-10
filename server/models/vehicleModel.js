const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    platenum: {
      type: String,
      required: [true, "Please add vehicle plate number"],
    },
    brand: {
      type: String,
      required: [true, "Please add vehicle brand"],
    },
    model: {
      type: String,
      required: [true, "Please add vehicle model"],
    },
    year: {
      type: Number,
      required: [true, "Please add vehicle year"],
    },
    vehicle_type: {
      type: String,
      required: [true, "Please add vehicle type"],
    },
    vehicle_type_name: {
      type: String,
      required: [true, "Please add vehicle type"],
    },
    vehicle_capacity: {
      type: Number,
      required: [true, "Please add vehicle capacity"],
    },
    fuel_type: {
      type: String,
      required: [true, "Please add vehicle fuel type"],
    },
    fuel_type_name: {
      type: String,
      required: [true, "Please add vehicle fuel type"],
    },
    fuel_tank: {
      type: Number,
      required: [true, "Please add vehicle fuel tank"],
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);
