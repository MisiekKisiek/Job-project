const passport = require("passport");
const passportJWT = require("passport-jwt");
const User = require("../models/User.model");

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

function verify(payload, done) {
  return User.findOne({ _id: payload.id })
    .then((user) => done(null, user))
    .catch((err) => done(err));
}

module.exports = () => {
  const config = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  };
  passport.use(User.createStrategy());
  passport.use(new JWTStrategy(config, verify));
};
