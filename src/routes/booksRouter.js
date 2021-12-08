const express = require("express");
const router = express.Router();
const authRequired = require('./../middlewares/authRequiredMiddleware');

router.get("/books", authRequired,
  (req, res) => {
  res.send('TODO: Books list resourece');
});

module.exports = router;