const mongoose = require("mongoose")
const slug = require('mongoose-slug-generator')
const mongoose_delete = require('mongoose-delete');


const Schema = mongoose.Schema
const Course = new Schema({
    name: String,
    description: String,
    author: String,
    img: String,
    videoId: String,
    slug: { type: String, slug: 'name', unique: true }
}, { timestamps: true })

mongoose.plugin(slug)
Course.plugin( mongoose_delete,{
    deletedAt: true,
    overrideMethods: 'all',
})


module.exports = mongoose.model('Course', Course)