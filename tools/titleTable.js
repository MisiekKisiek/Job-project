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
} = require("docx");

const getPackageName = require("./getPackageName");
const getIndustrys = require("./getIndustry");
const getDocumentCode = require("./getDocumentCode");

module.exports = async function (volume) {
    const titleTable = new Table({
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 30,
                            type: WidthType.PERCENTAGE,
                        },
                        margins: {
                            left: 100,
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: `Nazwa obiektu budowlanego:`,
                                        font: { name: "Calibri" },
                                        size: 20,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: {
                            size: 70,
                            type: WidthType.PERCENTAGE,
                        },
                        margins: {
                            top: 100,
                            bottom: 100,
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `Budowa drogi ekspresowej S52 odc. Północna Obwodnica Krakowa:
                        węzeł Modlnica - węzeł Kraków Mistrzejowice (bez węzła)`,
                                        font: { name: "Calibri" },
                                        size: 22,
                                        bold: true,
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
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 30,
                            type: WidthType.PERCENTAGE,
                        },
                        margins: {
                            left: 100,
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: `Stadium:`,
                                        font: { name: "Calibri" },
                                        size: 20,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: {
                            size: 70,
                            type: WidthType.PERCENTAGE,
                        },
                        margins: {
                            top: 90,
                            bottom: 90,
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `PROJEKT WYKONAWCZY`,
                                        font: { name: "Calibri" },
                                        size: 24,
                                        bold: true,
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
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 30,
                            type: WidthType.PERCENTAGE,
                        },
                        margins: {
                            left: 100,
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: `Adres obiektu budowlanego:`,
                                        font: { name: "Calibri" },
                                        size: 20,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: {
                            size: 70,
                            type: WidthType.PERCENTAGE,
                        },
                        margins: {
                            top: 90,
                            bottom: 90,
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `Województwo małopolskie; powiat krakowski – gm. Wielka Wieś,  gm. Zielonki, m. Kraków`,
                                        font: { name: "Calibri" },
                                        size: 22,
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
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 30,
                            type: WidthType.PERCENTAGE,
                        },
                        margins: {
                            left: 100,
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: `Branża:`,
                                        font: { name: "Calibri" },
                                        size: 20,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: {
                            size: 70,
                            type: WidthType.PERCENTAGE,
                        },
                        margins: {
                            top: 90,
                            bottom: 90,
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: await getIndustrys(
                                            await getPackageName(volume, "industry")
                                        ),
                                        font: { name: "Calibri" },
                                        size: 24,
                                        bold: true,
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
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 30,
                            type: WidthType.PERCENTAGE,
                        },
                        margins: {
                            left: 100,
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: `Nazwa opracowania:`,
                                        font: { name: "Calibri" },
                                        size: 20,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: {
                            size: 70,
                            type: WidthType.PERCENTAGE,
                        },
                        margins: {
                            top: 90,
                            bottom: 90,
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: await getPackageName(volume, "name"),
                                        font: { name: "Calibri" },
                                        size: 24,
                                        bold: true,
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
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 30,
                            type: WidthType.PERCENTAGE,
                        },
                        margins: {
                            left: 100,
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: `Numer dokumentu:`,
                                        font: { name: "Calibri" },
                                        size: 20,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: {
                            size: 70,
                            type: WidthType.PERCENTAGE,
                        },
                        margins: {
                            top: 90,
                            bottom: 90,
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: await getDocumentCode(volume),
                                        font: { name: "Calibri" },
                                        size: 24,
                                        bold: true,
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
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 30,
                            type: WidthType.PERCENTAGE,
                        },
                        margins: {
                            left: 100,
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: `Nr Umowy:`,
                                        font: { name: "Calibri" },
                                        size: 20,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 2,
                        width: {
                            size: 70,
                            type: WidthType.PERCENTAGE,
                        },
                        margins: {
                            top: 90,
                            bottom: 90,
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `I/262/ZI/I-4/2018`,
                                        font: { name: "Calibri" },
                                        size: 24,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
    return titleTable
}