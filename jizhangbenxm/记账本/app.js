var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/web/index');
// var usersRouter = require('./routes/users');
// 导入account.js
const accountRouter =require('./routes/api/account');
const authRouter =require('./routes/web/auth');
const {DBHOST,DBPORT,DBNAME} = require('./config/config');


const session = require("express-session");
const MongoStore = require('connect-mongo');
const authApiRouter = require('./routes/api/auth');

var app = express();

app.use(session({
  name: 'sid',
  secret: 'atguigu',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: `mongodb://${DBHOST}:${DBPORT}/${DBNAME}`,
  }),
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7
  },
}));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', authRouter);
// app.use('/users', usersRouter);
app.use('/api',accountRouter);
app.use('/api',authApiRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404);
  res.render('404');
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
