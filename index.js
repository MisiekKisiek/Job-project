const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const path = require("path");
const express = require("express");
const { Router } = require('express');
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

//For download doc. name
const getDocumentCode = require('./tools/getDocumentCode')
let volumeDoc = "";
let revision = "";
const routeVolumeAndRevisionSave = Router();
routeVolumeAndRevisionSave.post("/sendPageValues/:vol/:rev", (req, res, next) => {
  const { vol, rev } = req.params;
  volumeDoc = vol;
  revision = rev;
  next()
})


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
app.use("/creatingPages", routeVolumeAndRevisionSave, creatingPageRoutes);
app.get(`/downloadPage`, async function (req, res) {
  res.download(path.join(__dirname, `./pages/${await getDocumentCode(volumeDoc)}-${revision}-OPIS.docx`), function (
    err
  ) {
    if (err) {
      console.log("blad", err);
    } else {
      console.log("oki");
    }
  });
});
app.use("/documentationRegister", documentationRegisterRoutes);
app.use("/auth", authUserRoutes());

app.listen(9000, "127.0.0.1", () => {
  console.log("Serwer nasłuchuje");
});
