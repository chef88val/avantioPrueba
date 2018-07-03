'use strict';

var express = require('express');
var rssController = require('../controllers/rss')

var api = express.Router();

var middle= require('../middlewares/auth')

var multipart =  require('connect-multiparty')
var md_upload = multipart({uploadDir: './uploads/rsss'})

api.get('/home', rssController.home);
api.post('/rss', rssController.saveRss)
api.get('/rss/:id',middle.ensureAuth, rssController.getRssList)
//api.get('/rsss/:page?',middle.ensureAuth, rssController.getrsss)
api.put('/rss/:id',middle.ensureAuth, rssController.updateRss)
api.post('/upload-image-rss/:id',[middle.ensureAuth,md_upload], rssController.uploadImage)
api.delete('/rss/:id',middle.ensureAuth, rssController.deleteRss)
module.exports = api