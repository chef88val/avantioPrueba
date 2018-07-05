'use strict';

var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var routes = require('./routes/rss')
var feedController = require('./controllers/rss')
var _ = require('lodash');
let Parser = require('rss-parser');
let parser = new Parser();
const constPublisher = [{
        id: 'elPais',
        name: 'El Pais',
        value: 'http://ep00.epimg.net/rss/elpais/portada.xml'
},
    {
        id: 'elMundo',
        name: 'El Mundo',
        value: 'http://estaticos.elmundo.es/elmundo/rss/portada.xml'
    }
];
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var rssToJsonServiceBaseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';
var Feed = require('./models/rss');
function home(publisher) {
    //console.log(rssToJsonServiceBaseUrl.concat(url));
    //let url = req.param.url==='elPais'?'https://elpais.com':'https://elmundo.com';
    (async () => {
        //let feed = mockDATA();
      let feed = await parser.parseURL(publisher.value);
      //let feed = await parser.parseURL('http://elmundo.com');
      //console.log(feed.items[0])
   
         
        //return res.status(200).send(feed);
        //if (feed.length > 0)
            feed.items.forEach(item => {
                let feed = new Feed();
                feed.title = item.title;
                feed.idExternal = item.id|| null;
                feed.pubDate = item.pubDate;
                feed.publisher = publisher.id;
                feed.body = item.content || item['content:encoded'];
                feed.source = item.link;
                feed.author = item.creator;
                if(item.enclosure)
                feed.image = item.enclosure.url;
                else
                feed.image = null;
                Feed.updateMany({
                    title: item.title
                }, feed, {
                    upsert: true
                }, (err, suc) => {
                    if (err) console.log('Err' + err);
                    //else console.log(suc);
                });
            });
        //next();
    })();
}
app.use('/api', routes)
 
_.forEach(constPublisher,(publisher)=>{
    console.log('Publisher'+publisher.toString());
    home(publisher);    
}) 
module.exports = app;


global.fnError = function () {

    return {
        message: "No se ha podido identificar el usuario"
    }
}
global.fnPagination = (page) => {
    var page = 0;
    if (page) {
        page--;
    }
    var itemsPage = 50;
    return itemsPage * page
} 