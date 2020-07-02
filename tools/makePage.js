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
  Header,
  PageNumber,
  Footer
} = require("docx");
const fs = require("fs");
const path = require("path");
const Excel = require("exceljs");

const getPackageName = require("./getPackageName");
const getIndustrys = require("./getIndustry");
const getDocumentCode = require("./getDocumentCode");
const getPackageNumber = require("./getPackageNumber");

const logoTable = require('./logoTable');
const titleTable = require('./titleTable');
const designersTable = require("./designersTable");
const revisionTable = require("./revisionTable");

module.exports = async function makePage(volume, revision) {
  const doc = new docx.Document({
    styles: {
      paragraphStyles: [
        {
          paragraph: {},
        },
      ],
    },
  });
  const gddkImage = Media.addImage(
    doc,
    fs.readFileSync("./img/gddk-logo.jpg"),
    300,
    40,
    {
      floating: {
        horizontalPosition: {
          align: HorizontalPositionAlign.CENTER,
        },
        verticalPosition: {
          align: HorizontalPositionAlign.CENTER,
        },
      },
    }
  );

  const glmkImage = Media.addImage(
    doc,
    fs.readFileSync("./img/glmk-logo.jpg"),
    550,
    90,
    {
      floating: {
        horizontalPosition: {
          align: HorizontalPositionAlign.CENTER,
        },
        verticalPosition: {
          align: HorizontalPositionAlign.CENTER,
        },
      },
    }
  );
  const mcplImage = Media.addImage(
    doc,
    fs.readFileSync("./img/mcpl-logo.jpg"),
    200,
    30,
    {
      floating: {
        horizontalPosition: {
          align: HorizontalPositionAlign.CENTER,
        },
        verticalPosition: {
          align: HorizontalPositionAlign.CENTER,
        },
      },
    }
  );

  doc.addSection({
    headers: {
      first: new Header({
        children: [],
      }),
    },
    footers: {
      default: new Footer({
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                children: [PageNumber.CURRENT],
              })
            ],
          }),
        ],
      }),
    },
    properties: { top: 0, right: 1000, bottom: 0, left: 1000 },
    children: [
      await logoTable(gddkImage, glmkImage, mcplImage),
      new Paragraph({
        margins: { top: 180, bottom: 180, left: 20, right: 20 },
        children: [],
      }),
      new Paragraph({
        margins: { top: 180, bottom: 180, left: 20, right: 20 },
        children: [],
      }),
      await titleTable(volume),
      new Paragraph({
        margins: { top: 180, bottom: 180, left: 20, right: 20 },
        children: [],
      }),
      new Paragraph({
        margins: { top: 180, bottom: 180, left: 20, right: 20 },
        children: [],
      }),
      await designersTable(),
      new Paragraph({
        margins: { top: 180, bottom: 180, left: 20, right: 20 },
        children: [],
      }),
      new Paragraph({
        margins: { top: 180, bottom: 180, left: 20, right: 20 },
        children: [],
      }),
      await revisionTable(volume, revision, await getPackageNumber(volume)),
    ],
  });

  doc.addSection({
    headers: {
      // first: new Header({
      //   children: [],
      // }),
      default: new Header({
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text:
                  "Budowa drogi ekspresowej S52 odc. Północna Obwodnica Krakowa: węzeł Modlnica - węzeł Kraków Mistrzejowice (bez węzła)",
                font: { name: "Arial" },
                size: 16,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text:
                  `Projekt Wykonawczy. ${volume} ${await getPackageName(volume, 'name')}`,
                font: { name: "Arial" },
                size: 16,
              }),
            ],
          }),
          new Table({
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    columnSpan: 2,
                    width: {
                      size: 50,
                      type: WidthType.PERCENTAGE,
                    },
                    borders: {
                      top: { color: "white" },
                      right: { color: "white" },
                      bottom: { color: "white" },
                      left: { color: "white" },
                    },
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.LEFT,
                        children: [
                          new TextRun({
                            text:
                              `${await getDocumentCode(volume)}`,
                            font: { name: "Arial" },
                            size: 16,
                          }),
                        ],
                      }),
                    ]
                  }),
                  new TableCell({
                    columnSpan: 2,
                    width: {
                      size: 50,
                      type: WidthType.PERCENTAGE,
                    },
                    borders: {
                      top: { color: "white" },
                      right: { color: "white" },
                      bottom: { color: "white" },
                      left: { color: "white" },
                    },
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        children: [
                          new TextRun({
                            text:
                              `Rewizja ${revision.toUpperCase()}`,
                            font: { name: "Arial" },
                            size: 16,
                          }),
                        ],
                      }),
                    ]
                  }),
                ]
              }),
            ]
          })
        ],
      }),
    },
    footers: {
      default: new Footer({
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                children: [PageNumber.CURRENT],
              })
            ],
          }),
        ],
      }),
    },
    children: [],
  });

  await Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
  });
};
