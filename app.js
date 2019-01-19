var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var region = require('./routes/region');
var votingMachine = require('./routes/vote');
var buttonPressed = require('./routes/buttonPressed');


//SiD
// below code seems to run ans work but still some errors are not fixed  
// var drizzle = require('drizzle');
// console.log("drizzle call")
// console.log(drizzle)
// var Web3 = require('web3');
var etherum = require('./etherum');
// import { Drizzle, generateStore } from 'drizzle';
// import { Drizzle, generateStore } from 'drizzle'

//Set up default mongoose connection
var mongoDB = 'mongodb://sid:sid3030@ds155864.mlab.com:55864/votingapp';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;


//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var db = require('./data/main');
var yell = "yelling"

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/region', region);
app.use('/start', votingMachine);
app.use('/vote', buttonPressed);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
