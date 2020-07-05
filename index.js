const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const dbConfig = require("./config/database.config");

const creatingPageRoutes = require("./routes/creatingPage.routes");
const documentationRegisterRoutes = require("./routes/documentationRegister.routes");
const authUserRoutes = require("./routes/authUser.routes");

const passport = require("./config/passport.config");
passport();
const jwtAuth = require("./middlewares/auth.middleware");

//MongoDB

mongoose.connect(dbConfig.mongoUrl, dbConfig.settings);
mongoose.Promise = global.Promise;
mongoose.connection.on("error", (err) => {
  console.log("Could not connect to the database");
  process.exit();
});

const app = express();

//Express Middlewares
app.use(express.static(path.resolve(__dirname, "..", "1", "build")));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Express Routers
app.use("/creatingPages", jwtAuth, creatingPageRoutes);
app.use("/documentationRegister", documentationRegisterRoutes);
app.use("/auth", authUserRoutes());
app.use("/dupa", jwtAuth, (req, res) => {
  res.send("brawooooo");
});

app.listen(9000, "127.0.0.1", () => {
  console.log("Serwer nasłuchuje");
});
