const router = require("express").Router();
const requestValidator = require("./../middlewares/requestValidatorMiddleware");
const {
  usersFindRules,
  usersCreateRules,
} = require("./../middlewares/validators/usersValidators");
const UserController = require("../controllers/usersController");

router.get("/users", UserController.list);

router.get("/users/:id", usersFindRules, requestValidator, UserController.find);

router.post(
  "/users",
  usersCreateRules,
  requestValidator,
  UserController.create
);

router.put("/users/:id", UserController.edit);

router.delete("/users/:id", UserController.delete);

module.exports = router;
