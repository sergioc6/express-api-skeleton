const express = require('express');
const router = express.Router();

const authRouter = require('./authRouter')
const usersRouter = require('./usersRouter')

/* GET index page. */
router.get('/', function(req, res, next) {
  res.json(
    {
      app_name: process.env.APP_NAME,
      version: '1.0'
    });
});

router.use(authRouter)
router.use(usersRouter)

module.exports = router;

