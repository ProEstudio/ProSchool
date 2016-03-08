/* jshint node: true */

var express = require("express");
var mongoose = require("mongoose");
var BodyParser = require("body-parser");
var multer = require("multer");
var cloudinary = require("cloudinary");
var index = require("./routes/index.js");
var birds = require("./routes/birds.js");
var app_password = ("D1e560*9c");
var method_override = require("method-override");

cloudinary.config({
  cloud_name: "proestudio",
  api_key: "563483844553856",
  api_secret: "iygSyTqraN4NWG1az64_3_YB7B4"
});

var app = express();

mongoose.connect("mongodb://localhost/userdata");

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
app.use(method_override("_method"));

app.set("view engine" , "jade");
app.use(express.static('public'));

app.get('/home',function(req,res){
  res.render('home');
});

app.post("/admin",function(req,res){
  if(req.body.contra == app_password){
    Userdata.find(function(error,documento){
      if(error){console.log(error);}
      res.render("admin/index",{datos:documento});
    });
  }else{
    res.redirect("/");
  }
});

app.get("/admin",function(req,res){
  res.render("admin/form");
});

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

app.post("/registro",function(req,res){

  var data = {
    name: req.body.nombre,
    lastname: req.body.apellido,
    user: req.body.usuario,
    email: req.body.correo,
    pass: req.body.contraseña
  };

  var userdata = new Userdata(data);

  userdata.save(function(){
    console.log(userdata);
    console.log(req.body.contraseña);
    res.redirect("/");
  });

  /*cloudinary.uploader.upload(req.files.image_avatar.path,
    function(result) {
      userdata.imageUrl = result.url;
      userdata.save(function(err){
        console.log("userdata");
        res.redirect("/");
      });
  });*/
});

app.get("/registro",function(req,res){
  Userdata.find(function(error,documento){
    if(error){console.log(error);}
    res.render("registro/index",{datos:documento});
  });
});


app.post("/home",function(req,res){
  var user = req.body.user;
  var pass = req.body.pass;

  Userdata.findOne({"user": user,"pass": pass},function(error,perfiluser){
    if(pass == perfiluser.pass){
      console.log(perfiluser.pass);
      res.render("home",{dto:perfiluser});
    }else{
      res.redirect("/");
    }
  });
});

app.get("/perfil",function(req,res){
  res.render("perfil/estudiante/");
});

app.get("/perfil/actividad",function(req,res){
  res.render("perfil/estudiante/actividad");
});

app.get("/perfil/notas" , function(req,res){
  res.render("perfil/estudiante/periodo");
});

app.get("/perfil/profesor",function(req,res){
  res.render("perfil/profesor");
});

app.get("/perfil/actividad/horario",function(req,res){
  res.render("perfil/horario");
});

app.get("/perfil/actividad/periodo",function(req,res){
  res.render("perfil/estudiante/periodo");
});

var profesor = function(req,res,next){
  res.render('registro/profesor');
  next();
};

var padre = function(req,res,next){
  res.render('registro/padre');
  next();
};

var estudiante = function(req,res){
  res.render('registro/estudiante');
};
app.get('/registro/profesor',profesor);
app.get('/registro/padre',padre);
app.get('/registro/estudiante',estudiante);
app.use("/", index);
app.use("/birds", birds);

app.listen(5000);
