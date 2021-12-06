const { body, param } = require("express-validator");

exports.usersCreateRules = [
  // username must be an email
  body("username").isEmail(),
  // password must be at least 5 chars long
  body("password").isLength({ min: 5 }),
];

exports.usersFindRules = [
  param("id").isInt()
]