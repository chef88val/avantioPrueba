'use strict';

var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var routes = require('./routes/rss')
var feedController = require('./controllers/rss')

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });


app.use('/api', routes)
//feedController.home();
module.exports = app;


global.fnError =  function () {

        return  {message: "No se ha podido identificar el usuario"}
 }
 global.fnPagination =  (page)=>{
        var page = 0;
        if (page) {
            page--;
        }
        var itemsPage = 5;
        return itemsPage * page
 }