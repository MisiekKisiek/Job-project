const readXlsxFile = require("read-excel-file/node");

module.exports = async function getPackageNames(volume, actionType) {
  let rowsLoaded = [];
  let headers = [];
  await readXlsxFile("./dupa2.xlsx", { sheet: 1 }).then((rows) => {
    rowsLoaded = rows.splice(1);
    headers = rows.splice(0, 1);
  });
  const volumesTab = rowsLoaded.map((e) => e[1]);
  if (actionType === "name") {
    const namesTab = rowsLoaded.map((e) => e[2]);
    function searchVolume() {
      const index = volumesTab.indexOf(volume);
      return namesTab[index];
    }
    return searchVolume();
  } else if (actionType === "industry") {
    const areas = rowsLoaded.map((e) => e[10]);
    function searchVolume() {
      const index = volumesTab.indexOf(volume);
      return areas[index];
    }
    return searchVolume();
  }
};
