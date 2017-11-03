var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var winston = require('./config/winston_config').load_winston()
var passport = require("passport"); 


var jwt = require("jwt-simple")

var strategy = require('./config/strategy')( passport )

var sassMiddleware = require('node-sass-middleware');
var fs = require('fs');


var app = express();
var s3_config = require("./config/s3_config")
/* S3 config*/
var multer = require('multer')
var multerS3 = require('multer-s3')
var AWS = require('aws-sdk')
var config = new AWS.Config({
  accessKeyId: s3_config.accessKeyId, secretAccessKey: s3_config.secretAccessKey, region: s3_config.region
});

var s3 = new AWS.S3( config )


s3.listBuckets({}, function (err, data) {
    if (err) {
        return res.send({ "error": err });
    }
    winston.debug({ data });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use( strategy.initialise() )



var models = require('./models')

models.sequelize.sync().then(function() {
    console.log('sequelize done')
});

// Scripts
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


/* Include all express controllers */
fs.readdirSync('./controllers').forEach(function (file) {
    if(file.substr(-3) == '.js') {
        route = require('./controllers/' + file);
        route.controller( app, jwt, strategy );
    }
});

/* Put catch all route after controller declaration. This preserves /api/* functionality*/
app.get('/[^\.]+$', function(req, res){
    res.render( 'index' );
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
