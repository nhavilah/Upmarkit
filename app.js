var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

logger.token('req',(req,res) => JSON.stringify(req.headers))
logger.token('res',(req,res) => {
  const headers ={}
  res.getHeaderNames().map(h => headers[h] = res.getHeader(h))
  return JSON.stringify(headers)
})

const options = require('./knexfile.js');
const knex = require('knex')(options);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tandjayRouter = require('./controllers/tandjay.controller');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//this version of declaring more routes has been depreciated in express 4 so we use this method instead
app.use('/tandjay',tandjayRouter);

app.use((req,res,next)=>{
  req.db = knex
  next()
})

app.get('/knex',function(req,res,next){
  req.db.raw("SELECT VERSION()").then(
    (version) => console.log((version[0][0]))
  ).catch((err)=>{console.log(err);throw err})
  res.send("Version Logged Successfully");
});

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
