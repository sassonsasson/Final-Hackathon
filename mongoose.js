var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TheftSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Location: String,
  Item: Object,
  Value: Number
});

var Theft = mongoose.model("Theft", TheftSchema);

module.exports = Theft;