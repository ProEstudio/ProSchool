var express = require("express");
var mongoose = require("mongoose");
var BodyParser = require("body-parser");
var multer = require("multer");
var cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "proestudio",
  api_key: "563483844553856",
  api_secret: "iygSyTqraN4NWG1az64_3_YB7B4"
});

var app = express();

var connection_string = '127.0.0.1:27017/nodejs'

if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
    connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":"+
    process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
    process.env.OPENSHIFT_MONGODB_DB_HOST + ":" +
    process.env.OPENSHIFT_MONGODB_DB_PORT + "/" +
    process.env.OPENSHIFT_APP_NAME;
}

mongoose.connect("mongodb://"+connection_string);

var usuarioSchema = {
  name:String,
  lastname:String,
  user:String,
  email:String,
  pass:String,
  imageUrl:String
};

var Userdata = mongoose.model("Userdata",usuarioSchema);

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));
app.use(multer({dest: "./uploads"}));

app.set("view engine" , "jade");
app.use(express.static('public'));

app.get("/",function(req,res){
    res.render("index");
});

app.post("/registro",function(req,res){

  var data = {
    name: req.body.nombre,
    lastname: req.body.apellido,
    user: req.body.usuario,
    email: req.body.correo,
    imageUrl: "logo.png",
    pass: req.body.contraseña
  };

  var userdata = new Userdata(data);

  /*cloudinary.uploader.upload(req.files.image_avatar.path,
    function(result) {
      userdata.imageUrl = result.url;
      userdata.save(function(err){
        console.log("userdata");
        res.redirect("/");
      });
  });*/
});

app.get("/registro/estudiante",function(req,res){
  res.render("registro/estudiante");
});

app.get("/registro/padre",function(req,res){
  res.render("registro/padre");
});
app.get("/registro/profesor",function(req,res){
  res.render("registro/profesor");
});

app.get("/registro",function(req,res){
  Userdata.find(function(error,documento){
    if(error){console.log(error);}
    res.render("registro/index",{datos:documento});
  });
});

app.post("/perfil",function(req,res){
  Userdata.find({user:req.body.usuario,pass:req.body.cotraseña},function(err,documento){
    console.log(documento);
    res.render("perfil");
  });
});

app.get("/perfil",function(req,res){
    res.render("perfil/padre/index");
  });

app.get("/perfil/actividad",function(req,res){
  res.render("perfil/padre/actividad");
});

app.get("/perfil/profesor",function(req,res){
  res.render("perfil/profesor");
});

app.get("/perfil/actividad/horario",function(req,res){
  res.render("perfil/horario");
});

app.get("/perfil/actividad/periodo",function(req,res){
  res.render("perfil/padre/periodo");
});

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
app.listen(port, ip);
//app.set('ipaddr', server_ip_address);
