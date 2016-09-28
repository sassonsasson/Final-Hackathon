var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Theft = require('./mongoose');
var Form = require("./form.js");

mongoose.connect(process.env.MONGOLAB_BROWN_URI ||'mongodb://localhost/safe_location');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.post('/theft', function(req, res) {
  console.log('here is the name:', req.body.Item);
  var theft = new Theft();
  theft.Email = req.body.Email;
  theft.Date = req.body.Date;
  theft.Location = req.body.Location;
  theft.Item = req.body.Item;
  theft.Event = req.body.Event;
  theft.Value = req.body.Value;
  theft.Desc = req.body.Desc;
  theft.Popup = req.body.Popup;

  // console.log('response from post db');

  theft.save()

  res.end();

});

app.get('/admin', function (req, res) {
  
  Form.find().exec(function(err, rel){
    res.json(rel)
  })

});

app.post('/admin',function(req,res){
  var newForm = new Form(req.body);
  
  newForm.save();
//respond back
  res.end();
})

app.get('/theft', function(req, res) {
  console.log('got to get');
  Theft.find().exec(function(err, data) {
    console.log('getting posts', data);
    res.send(data);
  })
})

app.listen(process.env.PORT || '4000');

