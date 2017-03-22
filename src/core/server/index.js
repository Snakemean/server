'use strict'

var express = require('express')
var favicon = require('serve-favicon')
var MongoClient = require('mongodb').MongoClient
var db
var app = express()
app.use(express.static(__dirname + '/assets'))
app.use(favicon(__dirname + '/icon.png'))

// heroku positive port assignment
var port = process.env.PORT || 5000

// ------   <--this part gets cut from final version-->
// check for db flag
if(process.argv.indexOf('-db') != -1){db = process.argv[process.argv.indexOf('-db') + 1]}
// check for wp flag
var wp; if(process.argv.indexOf('-wp') != -1){wp = process.argv[process.argv.indexOf('-wp') + 1]}
if (!wp || wp=='true'){app = require('./webpack.index.js').pack(app)}
else{console.log('Serving from express')}
// ------

app.get('/', function(req, res) {
    res.status(200).sendFile('index.html', { root: __dirname })
})


if (db=='false'){
  app.listen(port, function () {
    console.log('Running with no database')
    console.log('Server running on port---' + port+'---')
  })
}else{
  MongoClient.connect(process.env.MONGOLAB_URI, function(err, database) {
    if (err) return console.log(err)
    db = database
    console.log('Connected to database ---'+db.databaseName+'---')
    app.listen(port, function () {
      console.log('Server running on port---' + port+'---')
    })
  })
}
