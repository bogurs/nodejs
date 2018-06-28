var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var user = require('./api/user') //./api/user 내 파일을 로드

app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/users', user); //라우터를 사용하기 위한 미들웨어 설정

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;