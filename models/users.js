/* jshint node: true */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//APLICACION LOCAL
var userSchema = new Schema({
  name:String,
  lastname:String,
  email: String,
  username: String,
  password: String,
  token: String
});

mongoose.connect("mongodb://jairperezs:D1e560*9c@ds117929.mlab.com:17929/ps-old");

module.exports = mongoose.model('estudiante', userSchema);
