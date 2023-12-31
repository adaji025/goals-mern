const express = require("express");
const router = express.Router();
const {
  getGoals,
  deleteGoal,
  setGoal,
  updateGoal,
} = require("../controllers/goalCotroller");

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
