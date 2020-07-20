const { Router } = require("express");

const path = require("path");

const mongoose = require("mongoose");
const Comment = require('../models/Comment.model')

module.exports = () => {
    const api = Router();

    api.post('/Send-comment', async (req, res) => {
        const { comment, number } = req.body
        if (await Comment.findOne({ transmittal: number }).exec() === null) {
            const commentNew = new Comment({ transmittal: number, comment, })
            commentNew.save((err, commentNew) => {
                if (err) return console.log(err)
                console.log('Udało się dodać nowy dokument')
            })
        } else {

        }

        console.log(test)
        res.json('git')
    })
    return api;
};