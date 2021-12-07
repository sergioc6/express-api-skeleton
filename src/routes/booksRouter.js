const express = require("express");
const router = express.Router();
const passport = require('passport');

router.get("/books", passport.authenticate('jwt', {session: false}),
  (req, res) => {
  res.send('TODO: Books list resourece');
});

module.exports = router;