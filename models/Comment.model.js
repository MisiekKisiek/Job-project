const mongoose = require("mongoose");

const SingleCommentSchema = new mongoose.Schema({
    comment: String,
    author: String,
    date: { type: Date, default: Date.now }
})

const CommentSchema = new mongoose.Schema({
    transmittal: String,
    comments: [SingleCommentSchema]
})

module.exports = mongoose.model('Comment', CommentSchema)