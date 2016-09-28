  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var formSchema = new Schema({ 
  email: String,
  name: String,
  text: String,
  item: String
  });

  var Form = mongoose.model("Form", formSchema)

  module.exports = Form;