var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TheftSchema = new mongoose.Schema({
  Email: String,
  Date: String,
  Location: String,
  Item: String,
  Event: String,
  Value: Number,
  Desc: String,
  Popup: String,
});

var Theft = mongoose.model("Theft", TheftSchema);

module.exports = Theft;