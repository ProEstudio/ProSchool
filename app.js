/* jshint node: true */

var express = require("express");
var BodyParser = require("body-parser");
var multer = require("multer");
var cloudinary = require("cloudinary");
var Userdata = require('./bin/userdb').Userdata;
var index = require("./routes/index");
var router_app = require('./routes/users');
var method_override = require("method-override");

cloudinary.config({
  cloud_name: "proestudio",
  api_key: "563483844553856",
  api_secret: "iygSyTqraN4NWG1az64_3_YB7B4"
});

var app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));
app.use(multer({dest: "./uploads"}));
app.use(method_override("_method"));

app.set("view engine" , "jade");
app.use(express.static('public'));

app.get("/registro/edit/:id",function(req,res){
  var id_user = req.params.id;

  Userdata.findOne({"_id": id_user},function(error,userd){
    console.log(userd);
    console.log(error);
    res.render("registro/edit",{dta:userd});
  });
});

app.put("/registro/:id", function(req,res){
  var data = {
    name: req.body.nombre,
    lastname: req.body.apellido,
    user: req.body.usuario,
    email: req.body.correo,
    pass: req.body.contraseña
  };

  Userdata.update({"_id": req.params.id},data,function(userd){
    res.redirect("/admin");
    console.log(userd);
  });
});

app.delete('/menu/:id',function(req,res){
  console.log(res);
});

//ROUTERS
app.use('/', index);
app.use('/',router_app);

//LISTEN
app.listen(5000);
