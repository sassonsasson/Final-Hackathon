var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TheftSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Date: String,
  Location: String,
  Item: String,
  Value: Number,
});

var Theft = mongoose.model("Theft", TheftSchema);

module.exports = Theft;