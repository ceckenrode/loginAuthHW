var express = require('express');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var PORT = process.env.NODE_ENV || 3000;

// var sequelize = new Sequelize('rcb_sequelize1', 'root');

var app = express();


app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(PORT, function() {
    console.log("LISTNEING!");
  });