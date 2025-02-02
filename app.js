var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/')
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.error('Failed to connect database: ', err);
    });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentRouter = require('./routes/student');
var studentsRouter = require('./routes/students');

var app = express();

app.use(cors()); 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/student', studentRouter);
app.use('/students', studentsRouter);

module.exports = app;
