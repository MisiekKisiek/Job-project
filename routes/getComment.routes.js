const { Router } = require("express");

const path = require("path");

const mongoose = require("mongoose");
const Comment = require('../models/Comment.model')


module.exports = () => {
    const api = Router();

    api.post('/Send-comment', async (req, res) => {
        const { comment, number } = req.body
        if (await Comment.findOne({ transmittal: number }).exec() === null) {
            const commentNew = new Comment({ transmittal: number, comments: [{ comment, author: "TEST" }], })
            commentNew.save((err, commentNew) => {
                if (err) return console.log(err)
                console.log('Udało się dodać nowy dokument', commentNew)
            })
        } else {
            const singleComment = { comment, author: "ADD_COM" };
            const commentNew = await Comment.findOne({ transmittal: number }).exec()
            commentNew.comments.push(singleComment)
            console.log('Udało się znaleźć nowy dokument ', commentNew)
            commentNew.save((err, commentNew) => {
                if (err) return console.log(err)
                console.log('Udało się dodać nowy dokument ', commentNew)
            })
        }
        res.json('git')
    })

    api.post('/Get-comments', async (req, res) => {
        const { number } = req.body;
        const commentGet = await Comment.findOne({ transmittal: number }).exec();
        res.json(commentGet);
    })

    return api;
};