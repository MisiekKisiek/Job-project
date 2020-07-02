const fs = require("fs");
const path = require("path");
const Excel = require("exceljs");
const readXlsxFile = require("read-excel-file/node");
const industrysTab = require("./industrysTab");

module.exports = async function (volume) {
  let code = "";
  let rowsLoaded = [];
  let headers = [];
  await readXlsxFile("./dupa2.xlsx", { sheet: 1 }).then((rows) => {
    rowsLoaded = rows.splice(1);
    headers = rows.splice(0, 1);
  });
  const volumesTab = rowsLoaded.map((e) => e[1]);
  const index = volumesTab.indexOf(volume);
  const area = rowsLoaded.map((e) => e[9])[index];
  const industry = rowsLoaded.map((e) => e[10])[index];
  const number = rowsLoaded.map((e) => e[12])[index];

  code = `E-KRAK-MCS-E-${area}-${industry}-SPC-${number}`;
  return code;
};
