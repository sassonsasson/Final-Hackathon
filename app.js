var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Theft = require('./mongoose');

mongoose.connect(process.env.MONGOLAB_BROWN_URI ||'mongodb://localhost/safe_location');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.post('/theft', function(req, res) {
  console.log('here is the name:', req.body.Item);
  console.log(req.body.Location);
  console.log(req.body.Email);
  console.log(req.body.Value);
  var theft = new Theft();
  theft.Name = req.body.Name;
  theft.Email = req.body.Email;
  theft.Date = req.body.Date;
  theft.Location = req.body.Location;
  theft.Item = req.body.Item;
  theft.Value = req.body.Value;
  theft.Event = req.body.Event;
  theft.Desc = req.body.Desc;

  // console.log('response from post db');

  theft.save()

  res.end();

});

app.get('/theft', function(req, res) {
  console.log('got to get');
  Theft.find().exec(function(err, data) {
    console.log('getting posts', data);
    res.send(data);
  })
})

app.listen(process.env.PORT || '4000');

