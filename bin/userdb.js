/* jshint node: true */

/*var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

//APLICACION SERVER
var connection_string = '127.0.0.1:27017/nodejs';

if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
    connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":"+
    process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
    process.env.OPENSHIFT_MONGODB_DB_HOST + ":" +
    process.env.OPENSHIFT_MONGODB_DB_PORT + "/" +
    process.env.OPENSHIFT_APP_NAME;
}

//mongoose.connect("mongodb://"+connection_string);

//APLICACION LOCAL
//mongoose.connect("mongodb://localhost/ps_user");

var usuarioSchema = new Schema({
  tipo: String,
  name:String,
  lastname:String,
  user:String,
  email:String,
  pass:String,
  imageUrl:String
});

var Userdata = mongoose.model("Userdata",usuarioSchema);

module.exports.Userdata = Userdata;
*/
