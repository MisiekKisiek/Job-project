const User = require("../models/User.model");
const jwt = require("jsonwebtoken");

async function register(req, res, next) {
  const { first_name, last_name, email, password } = req.body;

  const username =
    first_name.charAt(0).toUpperCase() +
    last_name.charAt(0).toUpperCase() +
    last_name.charAt(1).toUpperCase();

  const user = new User({ username: username, first_name, last_name, email });

  await User.register(user, password, (err) => {
    if (err) {
      console.log("error", err);
    } else {
      console.log("User has been added successfully.");

    }
  });
  res.json("Użytkownik został zarejestrowany");
  next();
}

async function login(req, res, next) {
  const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
    expiresIn: 12000,
  });
  const { first_name, last_name } = req.user
  res.send({ token, first_name, last_name });
  next();
}

module.exports = { register, login };
