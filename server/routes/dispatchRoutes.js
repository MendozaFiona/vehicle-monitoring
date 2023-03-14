const express = require("express");
const router = express.Router();
const {
  getDispatches,
  addDispatch,
  updateDispatch,
} = require("../controllers/dispatchController");
const { protect } = require("../middleware/authMiddleware");

router.use(protect).route("/").get(getDispatches).post(addDispatch);
router.use(protect).route("/:id").put(updateDispatch);

module.exports = router;
