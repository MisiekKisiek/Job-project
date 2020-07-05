const { Router } = require("express");

const getAllRegister = require("../tools/registerTools/getAllRegister");

const api = Router();

api.get("/getAllDocumentation", async (req, res) => {
  res.json(await getAllRegister());
});

module.exports = api;
