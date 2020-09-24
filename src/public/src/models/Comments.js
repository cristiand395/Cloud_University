const { Schema } = require('mongoose')

const Comment = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    comment: {type: String, require: true}
})