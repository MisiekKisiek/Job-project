const passport = require("passport");
const passportJWT = require("passport-jwt");
const User = require("../models/User.model");

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

function verify(payload, done) {
  return User.findOne({ _id: payload.id })
    .then((user) => done(null, user))
    .catch((err) => done(err));
}

function strategyLogIn() {
  passport.use(new JWTStrategy(config, verify));
}

module.exports = strategyLogIn;
