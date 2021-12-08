const passport = require("passport");

const authRequiredMiddleware = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ message: "Unauthorized" }); // send the error response to client
    }
    req.user = user;
    return next(); // continue to next middleware if no error.
  })(req, res, next); /* passport.authentication returns a function,
                           we invoke it with normal req..res arguments 
                           to override default functionality */
};

module.exports = authRequiredMiddleware;