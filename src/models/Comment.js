const { Schema, model } = require('mongoose')

const Comment = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    comment: {type: String, required: true},
})

module.exports = model('Comment', Comment)