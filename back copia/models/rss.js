'use strict';

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var rssSchema =  Schema({
    title: String,
    body: String,
    image: String,
    source: String,
    publisher: String,
    status: String,
})


module.exports = mongoose.model('RSS', rssSchema)