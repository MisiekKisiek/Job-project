const readXlsxFile = require("read-excel-file/node");

module.exports = async function () {
  let rowsLoaded = [];
  let headers = [];
  await readXlsxFile("./dupa2.xlsx", { sheet: 1 }).then((rows) => {
    rowsLoaded = rows.splice(1);
    headers = rows.splice(0, 1);
  });

  return rowsLoaded;
};
