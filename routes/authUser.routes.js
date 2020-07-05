const { Router } = require("express");
const AuthController = require("../controllers/authController");
const passport = require("passport");
const authMiddleware = require("../middlewares/auth.middleware");

module.exports = () => {
  const api = Router();

  api.post("/register", AuthController.register);
  // api.post(
  //   "/login",
  //   passport.authenticate("local", { session: false }),
  //   AuthController.login
  // );
  api.post(
    "/login",
    passport.authenticate("local", { session: false }),
    AuthController.login
  );
  return api;
};
