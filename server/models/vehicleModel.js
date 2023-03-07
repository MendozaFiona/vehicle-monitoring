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
      type: String,
      required: [true, "Please add vehicle year"],
    },
    type_vehicle: {
      type: String,
      required: [true, "Please add vehicle type"],
    },
    vehicle_capacity: {
      type: String,
      required: [true, "Please add vehicle capacity"],
    },
    fuel_type: {
      type: String,
      required: [true, "Please add vehicle fuel type"],
    },
    fuel_tank: {
      type: String,
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
