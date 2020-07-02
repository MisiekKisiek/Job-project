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
} = require("docx");

module.exports = async function () {
  const designersTable = new Table({
    rows: [
      new TableRow({
        children: [
          new TableCell({
            columnSpan: 5,
            verticalAlign: VerticalAlign.CENTER,
            width: {
              size: 18,
              type: WidthType.PERCENTAGE,
            },
            margins: {
              top: 100,
              bottom: 100,
              left: 100,
              right: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: "Funkcja:",
                    font: { name: "Calibri" },
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            columnSpan: 5,
            verticalAlign: VerticalAlign.CENTER,
            width: {
              size: 30,
              type: WidthType.PERCENTAGE,
            },
            margins: {
              left: 100,
              right: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: "Imię i nazwisko:",
                    font: { name: "Calibri" },
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            columnSpan: 5,
            verticalAlign: VerticalAlign.CENTER,
            width: {
              size: 20,
              type: WidthType.PERCENTAGE,
            },
            margins: {
              left: 100,
              right: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: "Nr. uprawnień:",
                    font: { name: "Calibri" },
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            columnSpan: 5,
            verticalAlign: VerticalAlign.CENTER,
            width: {
              size: 16,
              type: WidthType.PERCENTAGE,
            },
            margins: {
              left: 100,
              right: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: "Specjalność:",
                    font: { name: "Calibri" },
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            columnSpan: 5,
            verticalAlign: VerticalAlign.CENTER,
            width: {
              size: 16,
              type: WidthType.PERCENTAGE,
            },
            margins: {
              left: 100,
              right: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: "Podpis:",
                    font: { name: "Calibri" },
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
            verticalAlign: VerticalAlign.CENTER,
            margins: {
              top: 100,
              bottom: 100,
              left: 100,
              right: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: "Główny Projektant",
                    font: { name: "Calibri" },
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            columnSpan: 5,
            verticalAlign: VerticalAlign.CENTER,
            margins: {
              left: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: ` `,
                    font: { name: "Calibri" },
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            columnSpan: 5,
            verticalAlign: VerticalAlign.CENTER,
            margins: {
              left: 100,
              right: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: " ",
                    font: { name: "Calibri" },
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            columnSpan: 5,
            verticalAlign: VerticalAlign.CENTER,
            margins: {
              left: 100,
              right: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: " ",
                    font: { name: "Calibri" },
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            columnSpan: 5,
            verticalAlign: VerticalAlign.CENTER,
            margins: {
              left: 100,
              right: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: " ",
                    font: { name: "Calibri" },
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
            verticalAlign: VerticalAlign.CENTER,
            margins: {
              top: 100,
              bottom: 100,
              left: 100,
              right: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: "Projektant",
                    font: { name: "Calibri" },
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            columnSpan: 5,
            verticalAlign: VerticalAlign.CENTER,
            margins: {
              left: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: ` `,
                    font: { name: "Calibri" },
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            columnSpan: 5,
            verticalAlign: VerticalAlign.CENTER,
            margins: {
              left: 100,
              right: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: " ",
                    font: { name: "Calibri" },
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            columnSpan: 5,
            verticalAlign: VerticalAlign.CENTER,
            margins: {
              left: 100,
              right: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: " ",
                    font: { name: "Calibri" },
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            columnSpan: 5,
            verticalAlign: VerticalAlign.CENTER,
            margins: {
              left: 100,
              right: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: " ",
                    font: { name: "Calibri" },
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
            verticalAlign: VerticalAlign.CENTER,
            margins: {
              top: 100,
              bottom: 100,
              left: 100,
              right: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: "Sprawdzający",
                    font: { name: "Calibri" },
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            columnSpan: 5,
            verticalAlign: VerticalAlign.CENTER,
            margins: {
              left: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: ` `,
                    font: { name: "Calibri" },
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            columnSpan: 5,
            verticalAlign: VerticalAlign.CENTER,
            margins: {
              left: 100,
              right: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: " ",
                    font: { name: "Calibri" },
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            columnSpan: 5,
            verticalAlign: VerticalAlign.CENTER,
            margins: {
              left: 100,
              right: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: " ",
                    font: { name: "Calibri" },
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            columnSpan: 5,
            verticalAlign: VerticalAlign.CENTER,
            margins: {
              left: 100,
              right: 100,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: " ",
                    font: { name: "Calibri" },
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
  return designersTable;
};
