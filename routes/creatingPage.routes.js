const { Router } = require("express");
const path = require("path");

const makePage = require("../tools/makePage");
const getOptions = require("../tools/getData");

const api = Router();

let packageNames = "";

async function getData() {
  packageNames = await getOptions();
}

getData();

api.post("/creatingPages/sendPageValues/:vol/:rev", async (req, res) => {
  const { vol, rev } = req.params;
  await makePage(vol, rev);
  const number = `${Math.floor(Math.random() * 100)}`;
  res.json(number);
  api.get(`/creatingPages/downloadPage`, (req, res) => {
    res.download(path.join(__dirname, "..", "My Document.docx"), function (
      err
    ) {
      if (err) {
        console.log("blad", err);
      } else {
        console.log("oki");
      }
    });
  });
});

api.get("/creatingPages/namesRequest", (req, res) => {
  getData();
  res.json(packageNames);
});

module.exports = api;
