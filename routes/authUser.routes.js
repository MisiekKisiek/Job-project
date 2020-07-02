const { Router } = require("express");
const AuthController = require("../controllers/authController");

const api = Router();

api.post("/register", AuthController.register);
api.post("/login", AuthController.login);

module.exports = api;
