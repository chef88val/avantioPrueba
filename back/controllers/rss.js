'use strict';

var Feed = require('../models/rss');
//var mongoosePaginate = require('mongoose-pagination')
var mongoosePaginate = require('mongoose-paginate');
var path = require('path');
var fs = require('fs');

function home(req, res, next) {
    
    res.status(200).send({
        message: "home OK"
    })
    next();
}
function getFeed(req, res, next) {
    
    res.status(200).send({
        message: "getFeed OK"
    })
    next();
}
function saveFeed(req, res, next) {
    res.status(200).send({
        message: "saveFeed OK"
    })
}
function getFeedList(req, res, next) {
    res.status(200).send({
        message: "getFeedList OK"
    })
}
function updateFeed(req, res, next) {
    res.status(200).send({
        message: "updateFeed OK"
    })
}
function deleteFeed(req, res, next) {
    res.status(200).send({
        message: "deleteFeed OK"
    })
}
function uploadImage(req, res, next) {
    res.status(200).send({
        message: "uploadImage OK"
    })
}


module.exports={
    home,getFeed,saveFeed,getFeedList,updateFeed,deleteFeed,uploadImage};