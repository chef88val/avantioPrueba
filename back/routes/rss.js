'use strict';

var express = require('express');
var feedController = require('../controllers/rss')

var api = express.Router();

var middle= require('../middlewares/auth')

var multipart =  require('connect-multiparty')
var md_upload = multipart({uploadDir: './uploads/feeds'})

api.get('/home', feedController.home);
api.post('/feed', feedController.saveFeed)
api.get('/feed/:id',middle.ensureAuth, feedController.getFeedList)
//api.get('/feeds/:page?',middle.ensureAuth, feedController.getfeeds)
api.put('/feed/:id',middle.ensureAuth, feedController.updateFeed)
api.post('/upload-image-feed/:id',[middle.ensureAuth,md_upload], feedController.uploadImage)
api.delete('/feed/:id',middle.ensureAuth, feedController.deleteFeed)
module.exports = api