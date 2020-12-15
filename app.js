var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileUpload = require('express-fileupload');


require('dotenv').config();

var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var galleryRouter = require('./routes/gallery');
var shopsRouter = require('./routes/shops');
var blogRouter = require('./routes/blog');
var contactRouter = require('./routes/contact');
var loginRouter= require('./routes/admin/login');
var adminblogRouter = require('./routes/admin/blog');
var adminimagesRouter = require('./routes/admin/images');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.use(session({
  secret:'UnaClaveDificil',
  cookie: { maxAge: null },
  resave:false,
  saveUninitialized: true
}));
secured = async ( req,res,next)=>{
  try{
    console.log(req.session.id_username);
    if(req.session.id_username){
      next();
    }else{
      res.redirect('/admin/login');
    }
  }catch (error){
    console.log(error);
  }
};

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/gallery',galleryRouter);
app.use('/shops',shopsRouter);
app.use('/blog',blogRouter);
app.use('/contact',contactRouter);
app.use('/admin/login',loginRouter);
app.use('/admin/blog', secured, adminblogRouter);
app.use('/admin/images',secured,adminimagesRouter);

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
