// @desc   get goals
// @route  GET  /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "get goals" });
};

// @desc   Set goal
// @route  POST  /api/goals
// @access Private
const setGoal = (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("please add a text field")
    }
  res.status(200).json({ message: "set goals" });
};

// @desc   Update goal
// @route  PUT  /api/goal/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `update goal with id ${req.params.id}` });
};

// @desc   Delete goal
// @route  DELETE  /api/goal/:id
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `deleted goal with id ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
