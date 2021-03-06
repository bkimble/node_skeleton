/*
* Module dependencies
*/
var express = require('express')
, stylus = require('stylus')
, nib = require('nib');

global.config = require('konfig')();

var app = express()
function compile(str, path) {
  return stylus(str)
  .set('filename', path)
  .use(nib())
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
}
))
app.use(express.static(__dirname + '/public'))

require('./routes/routes.js')(app);

app.listen(2999)