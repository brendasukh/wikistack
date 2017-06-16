'use strict'

var express=require('express');
var app=express();
var morgan= require('morgan');
var nunjucks= require('nunjucks');
var bodyParser=require('body-parser')
var path=require('path');
var models = require('../models/modelfolder.js');

//var router=express.Router();
var indexJS=require('../routes/index.js');

app.use(morgan('dev'));
app.use('/',indexJS);


app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);


// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname + '/index.html'));
// })

models.db.sync({force:true})
  .then(function(){
    app.listen(1234,function(){
      console.log('listening on 1234')
    });
  })
  .catch(console.error);
