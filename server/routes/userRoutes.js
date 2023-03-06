const express = require("express");
const router = express.Router();
const {
  getMe,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.get("/me", protect, getMe);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.use(protect).route("/").put(updateUser).delete(deleteUser);

module.exports = router;
