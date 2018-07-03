'use strict';

var RSS = require('../models/rss');
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
function getRss(req, res, next) {
    
    res.status(200).send({
        message: "getRss OK"
    })
    next();
}
function saveRss(req, res, next) {
    res.status(200).send({
        message: "saveRss OK"
    })
}
function getRssList(req, res, next) {
    res.status(200).send({
        message: "getRssList OK"
    })
}
function updateRss(req, res, next) {
    res.status(200).send({
        message: "updateRss OK"
    })
}
function deleteRss(req, res, next) {
    res.status(200).send({
        message: "deleteRss OK"
    })
}
function uploadImage(req, res, next) {
    res.status(200).send({
        message: "uploadImage OK"
    })
}


module.exports={
    home,getRss,saveRss,getRssList,updateRss,deleteRss,uploadImage};