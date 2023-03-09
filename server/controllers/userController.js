const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// @desc Get logged in user
// @route GET /api/users
// @access Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// @desc Create user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, username, password, confirmpassword } = req.body;
  if (!name || !email || !username || !password || !confirmpassword) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if password is the same as confirmpassword
  if (password !== confirmpassword) {
    res.status(400);
    throw new Error("Password does not match");
  }

  // Check if user exists
  const emailExists = await User.findOne({ email });
  const userExists = await User.findOne({ username });

  if (emailExists) {
    res.status(400);
    throw new Error("Email is already taken");
  }

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    username,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc users
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc Update user
// @route PUT /api/users/
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  if (!req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  if (req.body.password) {
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedUser);
});

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(400);
    throw new Error("User not authorized");
  }

  await req.user.deleteOne();
  res.status(200).json({ id: req.user.id });
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  getMe,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
};
