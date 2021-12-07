const express = require('express');
const router = express.Router();
require('./../config/passport');

const authRouter = require('./authRouter')
const usersRouter = require('./usersRouter')
const booksRouter = require('./booksRouter')

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
router.use(booksRouter)

module.exports = router;

