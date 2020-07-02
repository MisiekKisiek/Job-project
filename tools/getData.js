const docx = require("docx");
const {
  Packer,
  TextRun,
  HeadingLevel,
  AlignmentType,
  PageBreak,
  Table,
  TableRow,
  TableCell,
  Paragraph,
} = require("docx");
const fs = require("fs");
const path = require("path");
const Excel = require("exceljs");
const doc = new docx.Document();
const readXlsxFile = require("read-excel-file/node");

module.exports = async function giveData() {
  let rowsLoaded = [];
  let headers = [];
  let packageNames = [];
  await readXlsxFile("./dupa2.xlsx", { sheet: 1 }).then((rows) => {
    rowsLoaded = rows.splice(1);
    headers = rows.splice(0, 1);
  });

  const newHeaders = headers[0].map((e) => {
    if (e === null) {
      return { name: "Col" };
    } else {
      return { name: e };
    }
  });
  const workbook = new Excel.Workbook();
  const sheet1 = workbook.addWorksheet("Hejka");

  sheet1.addTable({
    name: "Moja taba",
    ref: "A1",
    // headerRow: true,
    // totalsRow: true,
    // style: {
    //     theme: 'TableStyleDark3',
    //     showRowStripes: true,
    // },
    columns: newHeaders,
    rows: rowsLoaded,
  });
  sheet1.columns = [{ header: "dupeczka" }];

  await workbook.xlsx.writeFile("dupa3.xlsx");

  sheet1.getColumn("B").values.forEach((e, index) => {
    if (e.toLowerCase().includes("tom ")) {
      packageNames.push({
        volumeNumber: e, packageName: sheet1.getColumn("C").values[index]
      })
    }
  })
  // packageNames = sheet1.getColumn("C").values;
  return packageNames;
};