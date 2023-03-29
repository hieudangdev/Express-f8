const mongoose = require("mongoose")
const slug = require('mongoose-slug-generator')
const mongoose_delete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema
const User = new Schema({
    name: String,
    email: String,
    password: String,
    slug: { type: String, slug: 'name', unique: true }
}, { timestamps: true })

mongoose.plugin(slug)
User.plugin( mongoose_delete,{
    deletedAt: true,
    overrideMethods: 'all',
})


module.exports = mongoose.model('User', User)