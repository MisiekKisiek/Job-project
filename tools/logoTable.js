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

module.exports = function (gddkImage, glmkImage, mcplImage) {
    const logoTable = new Table({
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 3,
                        width: {
                            size: 100,
                            type: WidthType.PERCENTAGE,
                        },
                        margins: {
                            top: 40,
                            bottom: 40,
                            left: 40,
                            right: 40,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Inwestor:",
                                        font: { name: "Calibri" },
                                        size: 20,
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        margins: {
                            top: 20,
                            bottom: 180,
                            left: 80,
                            right: 80,
                        },
                        borders: {
                            top: { color: "white" },
                            right: { color: "white" },
                        },
                        children: [new Paragraph(gddkImage)],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        margins: {
                            top: 80,
                            bottom: 0,
                            left: 0,
                            right: 0,
                        },
                        borders: {
                            top: { color: "white" },
                            left: { color: "white" },
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `Generalny Dyrektor Dróg Krajowych i Autostrad 
                        ul. Wronia 53; 00-874 Warszawa`,
                                        bold: true,
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
                        columnSpan: 3,
                        margins: {
                            top: 40,
                            bottom: 40,
                            left: 40,
                            right: 40,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Wykonawca:",
                                        font: { name: "Calibri" },
                                        size: 20,
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 3,
                        margins: {
                            top: 20,
                            bottom: 1180,
                            left: 80,
                            right: 80,
                        },
                        borders: {
                            bottom: { color: "white" },
                        },
                        children: [new Paragraph(glmkImage)],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 1,
                        width: {
                            size: 40,
                            type: WidthType.PERCENTAGE,
                        },
                        borders: {
                            top: { color: "white" },
                            right: { color: "white" },
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `Gülermak Ağır Sanayi İnşaat ve Taahhüt A.Ş.`,
                                        font: { name: "Calibri" },
                                        size: 20,
                                        bold: true,
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `z siedzibą w Ankarze, Konya Devletyolu,
                        
                        23. Km, no. 111, 
                        
                        `,
                                        font: { name: "Calibri" },
                                        size: 20,
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `06830 Gölbaşı - Ankara, Turcja`,
                                        font: { name: "Calibri" },
                                        size: 20,
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 1,
                        width: {
                            size: 18,
                            type: WidthType.PERCENTAGE,
                        },
                        borders: {
                            top: { color: "white" },
                            right: { color: "white" },
                            left: { color: "white" },
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `Mosty Łódź S.A.
                        `,
                                        font: { name: "Calibri" },
                                        size: 20,
                                        bold: true,
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `ul. Bratysławska 52, 
    
                        94-112 Łódź
                        `,
                                        font: { name: "Calibri" },
                                        size: 20,
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                    }),
                    new TableCell({
                        columnSpan: 1,
                        width: {
                            size: 42,
                            type: WidthType.PERCENTAGE,
                        },
                        borders: {
                            top: { color: "white" },
                            left: { color: "white" },
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `Gülermak Spółka z o.o.`,
                                        font: { name: "Calibri" },
                                        size: 20,
                                        bold: true,
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `ul. Grzybowska 80/82,`,
                                        font: { name: "Calibri" },
                                        size: 20,
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `00-844 Warszawa`,
                                        font: { name: "Calibri" },
                                        size: 20,
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 3,
                        margins: {
                            top: 40,
                            bottom: 40,
                            left: 40,
                            right: 40,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Jednostka projektowa:",
                                        font: { name: "Calibri" },
                                        size: 20,
                                    }),
                                ],
                                alignment: AlignmentType.LEFT,
                            }),
                        ],
                        margins: {
                            top: 40,
                            bottom: 40,
                            left: 40,
                            right: 40,
                        },
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 2,
                        margins: {
                            top: 100,
                            bottom: 100,
                            left: 80,
                            right: 80,
                        },
                        borders: {
                            right: { color: "white" },
                        },
                        children: [new Paragraph(mcplImage)],
                    }),
                    new TableCell({
                        margins: {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                        },
                        borders: {
                            left: { color: "white" },
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: `Multiconsult Polska sp. z o.o.`,
                                        font: { name: `Calibri` },
                                        size: 20,
                                        bold: true,
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: `ul. Bonifraterska 17`,
                                        font: { name: `Calibri` },
                                        size: 20,
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: `00-203 Warszawa`,
                                        font: { name: `Calibri` },
                                        size: 20,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
    return logoTable
}