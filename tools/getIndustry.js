const industrys = require("./industrysTab");

module.exports = async function getIndustrys(area) {
  let index = -1;
  function getIndex() {
    index = industrys.map((e) => e.industry).indexOf(area);
  }
  await getIndex();
  return industrys[index].name;
};
