const createError = require('http-errors');
const express = require('express');
const path = require('path');
const mysql = require('mysql')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'jade');

// app.use('/uploads', express.static(uploads))

app.use('/api', require('./routes'))

// if(!fs.existsSync('uploads')) {
//   fs.mkdirSync('uplods')
// }

const db = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '1e1Km9i3N957fQ',
  database: 'database_adhub',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


app.get('/', (req, res) => {
  return res.json("back")
})

app.get('/user', (req, res) => {
  const sql = "select * from user";
  db.query(sql, (err, data) => {
    if(err) return res.json(err)
    return res.json(data)
  })
})

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