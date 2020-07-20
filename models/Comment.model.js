const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    transmittal: String,
    comment: { type: String, comment: Array, user: String, date: { type: Date, default: Date.now } }
})

module.exports = mongoose.model('Comment', CommentSchema)