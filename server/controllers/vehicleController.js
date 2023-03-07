const asyncHandler = require("express-async-handler");
const Vehicle = require("../models/vehicleModel");

// @desc Get all vehicles by logged in user
// @route GET /api/vehicles
// @access Private
const getVehicleList = asyncHandler(async (req, res) => {
  //   const { _id, name, email, username } = await User.findById(req.user.id);
  //   res.status(200).json({ id: _id, name, email, username });
});

// @desc Get one vehicle by logged in user (search)
// @route GET /api/vehicles/:id
// @access Private
const getVehicle = asyncHandler(async (req, res) => {
  //   const { _id, name, email, username } = await User.findById(req.user.id);
  //   res.status(200).json({ id: _id, name, email, username });
});

// @desc Create vehicle
// @route POST /api/vehicles
// @access Private
const addVehicle = asyncHandler(async (req, res) => {
  //   const { name, email, username, password, confirmpassword } = req.body;
  //   if (!name || !email || !username || !password || !confirmpassword) {
  //     res.status(400);
  //     throw new Error("Please add all fields");
  //   }
  //   // Check if password is the same as confirmpassword
  //   if (password !== confirmpassword) {
  //     res.status(400);
  //     throw new Error("Password does not match");
  //   }
  //   // Check if user exists
  //   const emailExists = await User.findOne({ email });
  //   const userExists = await User.findOne({ username });
  //   if (emailExists) {
  //     res.status(400);
  //     throw new Error("Email is already taken");
  //   }
  //   if (userExists) {
  //     res.status(400);
  //     throw new Error("User already exists");
  //   }
  //   // Hash password
  //   const salt = await bcrypt.genSalt(10);
  //   const hashedPassword = await bcrypt.hash(password, salt);
  //   // Create user
  //   const user = await User.create({
  //     name,
  //     email,
  //     username,
  //     password: hashedPassword,
  //   });
  //   if (user) {
  //     res.status(201).json({
  //       _id: user.id,
  //       name: user.name,
  //       email: user.email,
  //       username: user.username,
  //       token: generateToken(user._id),
  //     });
  //   } else {
  //     res.status(400);
  //     throw new Error("Invalid user data");
  //   }
});

// @desc Update vehicle
// @route PUT /api/vehicles/:id
// @access Private
const updateVehicle = asyncHandler(async (req, res) => {
  //   const { _id, name, email, username } = await User.findById(req.user.id);
  //   if (!_id) {
  //     res.status(401);
  //     throw new Error("User not authorized");
  //   }
  //   const updatedUser = await User.findByIdAndUpdate(_id, req.body, {
  //     new: true,
  //   });
  //   res.status(200).json(updatedUser);
});

// @desc Delete vehicle
// @route DELETE /api/vehicles/:id
// @access Private
const deleteVehicle = asyncHandler(async (req, res) => {
  //   const user = await User.findById(req.user.id);
  //   if (!user) {
  //     res.status(400);
  //     throw new Error("User not authorized");
  //   }
  //   await user.deleteOne();
  //   res.status(200).json({ id: req.user.id });
});

module.exports = {
  getVehicleList,
  getVehicle,
  addVehicle,
  updateVehicle,
  deleteVehicle,
};
