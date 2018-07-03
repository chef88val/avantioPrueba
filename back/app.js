'use strict';

var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var routes = require('./routes/rss')


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());



app.use('/api', routes)

module.exports = app;


global.fnError =  function () {

        return  {message: "No se ha podido identificar el usuario"}
 }