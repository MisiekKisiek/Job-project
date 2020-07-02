const docx = require("docx");
const { Packer, TextRun, HeadingLevel, AlignmentType, PageBreak, Table, TableRow, TableCell, Paragraph, Media, WidthType } = require("docx");
const fs = require('fs');
const path = require('path')
const Excel = require('exceljs');
const doc = new docx.Document();
const excelMy = require('./excel')

module.exports = async function fillPageTemplate() {
    const doc = new docx.Document({
        creator: "MC",
        description: "Created by MC-S52-APP",
        title: "Title page"
    });
    const imageGDDK = Media.addImage(doc, fs.readFileSync("./img/gddk-logo.jpg"));
    // const logoTable = new Table({
    //     rows: [
    //         new TableRow({
    //             children: [
    //                 new TextRun("Inwestor:")
    //             ]
    //         })
    //         new TableRow({
    //             children: [
    //                 new TableCell({
    //                     children: [
    //                         new Paragraph(imageGDDK)
    //                     ],
    //                     width: {
    //                         size: 4000,
    //                         type: WidthType.DXA
    //                     }
    //                 })
    //                 new TableCell({

    //                 })
    //             ]
    //         })
    //     ]
    // })
    doc.addSection({
        children: [
            new TextRun('aa')
        ]
    })
    Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync("My Document.docx", buffer);
    });
}