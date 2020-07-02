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
  WidthType,
  Media,
  HorizontalPositionAlign,
  VerticalAlign,
  Border,
  BorderStyle,
} = require("docx");

module.exports = function (volume, revision, packageNumber) {
  const revisionTable = new Table({
    rows: [
      new TableRow({
        children: [
          new TableCell({
            columnSpan: 5,
            width: {
              size: 14,
              type: WidthType.PERCENTAGE,
            },
            margins: {
              left: 100,
            },
            borders: {
              bottom: {
                color: "white",
              },
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: "Numer tomu:",
                    font: {
                      name: "Calibri",
                    },
                    size: 18,
                  }),
                ],
              }),
            ],
          }),

          new TableCell({
            columnSpan: 5,
            width: {
              size: 40,
              type: WidthType.PERCENTAGE,
            },
            margins: {
              left: 100,
            },
            borders: {
              bottom: {
                color: "white",
              },
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: "Numer pakietu:",
                    font: {
                      name: "Calibri",
                    },
                    size: 18,
                  }),
                ],
              }),
            ],
          }),

          new TableCell({
            columnSpan: 5,
            width: {
              size: 20,
              type: WidthType.PERCENTAGE,
            },
            margins: {
              left: 100,
            },
            borders: {
              bottom: {
                color: "white",
              },
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: "Data opracowania:",
                    font: {
                      name: "Calibri",
                    },
                    size: 18,
                  }),
                ],
              }),
            ],
          }),

          new TableCell({
            columnSpan: 5,
            width: {
              size: 10,
              type: WidthType.PERCENTAGE,
            },
            margins: {
              left: 100,
            },
            borders: {
              bottom: {
                color: "white",
              },
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: "Rewizja:",
                    font: {
                      name: "Calibri",
                    },
                    size: 18,
                  }),
                ],
              }),
            ],
          }),

          new TableCell({
            columnSpan: 5,
            width: {
              size: 15,
              type: WidthType.PERCENTAGE,
            },
            margins: {
              left: 100,
            },
            borders: {
              bottom: {
                color: "white",
              },
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,

                children: [
                  new TextRun({
                    text: "Nr egzemplarza:",
                    font: {
                      name: "Calibri",
                    },
                    size: 18,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            columnSpan: 5,
            margins: {
              top: 100,
              bottom: 100,
            },
            borders: {
              top: {
                color: "white",
              },
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: volume.split(" ")[1],
                    font: {
                      name: "Calibri",
                    },
                    size: 24,
                    bold: true,
                  }),
                ],
              }),
            ],
          }),

          new TableCell({
            columnSpan: 5,
            margins: {
              top: 100,
              bottom: 100,
            },
            borders: {
              top: {
                color: "white",
              },
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: packageNumber,
                    font: {
                      name: "Calibri",
                    },
                    size: 24,
                    bold: true,
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            columnSpan: 5,
            margins: {
              top: 100,
              bottom: 100,
            },
            borders: {
              top: {
                color: "white",
              },
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: "Czerwiec, 2020r.",
                    font: {
                      name: "Calibri",
                    },
                    size: 24,
                  }),
                ],
              }),
            ],
          }),

          new TableCell({
            columnSpan: 5,
            margins: {
              top: 100,
              bottom: 100,
            },
            borders: {
              top: {
                color: "white",
              },
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: revision.toUpperCase(),
                    font: {
                      name: "Calibri",
                    },
                    size: 24,
                    bold: true,
                  }),
                ],
              }),
            ],
          }),

          new TableCell({
            columnSpan: 5,
            margins: {
              top: 100,
              bottom: 100,
            },
            borders: {
              top: {
                color: "white",
              },
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: "1",
                    font: {
                      name: "Calibri",
                    },
                    size: 24,
                    bold: true,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
  return revisionTable;
};
