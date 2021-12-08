const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt");
const { User } = require("../db/models/index");

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      const user = await User.findOne({ where: {email} });
      if (!user) {
        return done(null, false, { message: "User not found" });
      }
      const validate = await bcrypt.compare(password, user.password);

      if (!validate) {
        return done(null, false, { message: "Wrong password" });
      }

      return done(null, user, { message: "Logged successfully" });
    }
  )
);

passport.use(
  'jwt',
  new JWTstrategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    (jwtPayload, done) => {
      try {
        return done(null, jwtPayload.user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
