const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        reqired: true
    },
    description:{
        type: String,
        reqired: true
    },
    markdown:{
        type: String,
        reqired: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Article', articleSchema)