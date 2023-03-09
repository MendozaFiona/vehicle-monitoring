const mongoose = require("mongoose");

const fuelTypeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add fuel type name"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FuelType", fuelTypeSchema);
