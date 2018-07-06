'use strict';

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var feedSchema =  Schema({
    idExternal: String,
    title: String,
    body: String,
    image: String,
    source: String,
    publisher: String,
    author: String,
    status: String,
    pubDate: Date,
    visible: Boolean
})


module.exports = mongoose.model('FEED', feedSchema)