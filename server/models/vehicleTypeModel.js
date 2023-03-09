const mongoose = require("mongoose");

const vehicleTypeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add vehicle type name"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("VehicleType", vehicleTypeSchema);
