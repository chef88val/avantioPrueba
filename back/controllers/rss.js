'use strict';

var Feed = require('../models/rss');
//var mongoosePaginate = require('mongoose-pagination')
var mongoosePaginate = require('mongoose-paginate');
var path = require('path');
var fs = require('fs');
let Parser = require('rss-parser');
let parser = new Parser();
let rssToJsonServiceBaseUrl = 'https://rss2json.com/api.json?rss_url=';

function home(req, res, next) {
    console.log('home')
    //let url = req.param.url==='elPais'?'https://elpais.com':'https://elmundo.com';
    //(async () => {
    let feed = mockDATA(); //await parser.parseURL(rssToJsonServiceBaseUrl.concat(url));
    console.log('feed' + feed[0].toString());
    return res.status(200).send(feed);
    next();
    if (feed.length > 0)
        feed.forEach(item => {
            console.log(item.title + ':' + item.link)
            let feed = new Feed();
            feed.title = item.title;
            feed.idExternal = item.id;
            feed.pubDate = item.pubDate;
            feed.publisher = item.author;
            feed.body = item.content;
            feed.source = item.link;
            Feed.updateMany({
                title: item.title
            }, feed, {
                upsert: true
            }, (err, suc) => {
                if (err) console.log('Err' + err);
                else console.log(suc);
            });
        });
}

function getFeed(req, res, next) {
    var feedId = req.params.id;

    feed.findById(feedId, (err, feed) => {
        if (err) return res.status(500).send({
            message: 'Error en la peticion'
        })
        if (!feed) return res.status(404).send({
            message: 'El feed no existe'
        })
        return res.status(200).send({
            feed
        })
    })

    next();
}

function saveFeed(req, res, next) {
    var feed = new Feed();
    res.status(200).send({
        message: "saveFeed OK"
    })
}

function getFeedList(req, res, next) {
    var feed = new Feed();
    if (req.params.page)
        var page = global.fnPagination(req.params.page);
    var itemspage = 5;
    //else page=0;
    let feed = parser.parseURL('https://www.reddit.com/.rss');
    Feed.find().sort('_id').skip(page).limit(itemspage).exec(
        (err, feeds, total) => {
            console.log(feeds, "feeds")
            if (err) return res.status(500).send({
                message: 'Error en la peticion'
            })
            if (!feeds) return res.status(404).send({
                message: 'No hay feeds disponibles'
            })
            return res.status(200).send({
                total: feeds.length,
                pages: Math.ceil(feeds.length / itemspage),
                feeds
            })

        }
    )
}

function updateFeed(req, res, next) {
    var feedId = req.params.id;
    var update = req.body;
    Feed.findByIdAndUpdate(id, update, {
        new: true
    }, (err, _feed) => {
        if (err) return res.status(500).send({
            message: 'Error en la peticion'
        })
        if (!_feed) return res.status(404).send({
            message: 'No hay Feeds disponibles'
        })
        return res.status(200).send({
            message: "Feed updated"
        })
    })
}

function deleteFeed(req, res, next) {
    var feedId = req.params.id;
    var update = req.body;
    Feed.findByIdAndRemove(id, (err, _feed) => {
        if (err) return res.status(500).send({
            message: 'Error en la peticion'
        })
        if (!_feed) return res.status(404).send({
            message: 'No hay Feeds disponible'
        })
        return res.status(200).send({
            message: "Feed deleted"
        })
    })
}

function uploadImage(req, res) {
    var id = req.params.id;

    if (req.files) {
        console.log("req.files", req.files.image.path)
        var file_path = req.files.image.path;

        if (file_path.split('\/') === undefined)
            var file_split = file_path.split('\\');
        else
            var file_split = file_path.split('\/');
        var file_name = file_split[2];
        console.log("file_name[2]", file_name);
        var _ext = file_name.split('\.');
        var file_ext = _ext[1];
        console.log(file_split, file_name, _ext, file_ext)

        if (file_ext == 'png' || file_ext == 'jpg') {
            Feed.findByIdAndUpdate(id, {
                image: file_name
            }, {
                new: true
            }, (err, _feed) => {
                if (err) return res.status(500).send({
                    message: 'Error en la peticion'
                })
                if (!_feed) return res.status(404).send({
                    message: 'No se ha actualizado'
                })
                return res.status(200).send({
                    message: "Feed image updated"
                })
            })
        } else {
            removeFilesUploads(res, file_path, "Extensión no valida")
        }

    } else {
        return res.status(200).send({
            message: "No se han subido imagenes"
        })
    }
}

function removeFilesUploads(res, file_path, message) {
    fs.unlink(file_path, (err) => {
        return res.status(200).send({
            message
        })
    })
}

function mockDATA() {
    return [{
        title: 'Merlin knows what\'s up.',
        source: 'https://www.reddit.com/r/combinedgifs/comments/8vsy2x/merlin_knows_whats_up/',
        pubDate: '2018-07-03T15:09:10.000Z',
        author: '/u/FuckFloorLimit',
        content: '&#32; submitted by &#32; <a href="https://www.reddit.com/user/FuckFloorLimit"> /u/FuckFloorLimit </a> &#32;to &#32; <a href="https://www.reddit.com/r/combinedgifs/"> r/combinedgifs </a> <br/> <span><a href="https://i.imgur.com/ytw2y2h.gifv">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/combinedgifs/comments/8vsy2x/merlin_knows_whats_up/">[comments]</a></span>',
        contentSnippet: 'submitted by    /u/FuckFloorLimit    to    r/combinedgifs   [link]   [comments]',
        id: 't3_8vsy2x',
        publisher: 'elMundo'
    }];
}

module.exports = {
    home,
    getFeed,
    saveFeed,
    getFeedList,
    updateFeed,
    deleteFeed,
    uploadImage
};