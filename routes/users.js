/* jshint node: true */
var express = require('express');
var Userdata = require('../bin/userdb').Userdata;
var router = express.Router();
var app_password = ("D1e560*9c");

//INDEX POST LOGIN
router.post("/",function(req,res){
  res.render('home');
});

//REGISTRO
router.post("/registro",function(req,res){
    var data = {
      name: req.body.nombre,
      lastname: req.body.apellido,
      user: req.body.usuario,
      email: req.body.correo,
      imageUrl: "logo.png",
      pass: req.body.contraseña
    };
    var userdata = new Userdata(data);
      userdata.save(function(){
      console.log(userdata);
      res.redirect("/");
    });
});
router.get('/registro/estudiante',function(req,res){
  res.render('registro/estudiante');
});
//REGISTRO EDITAR
router.get('/:id/delete',function(req,res){
  var id = req.params.id;
  Userdata.findOne({'_id': id},function(err,userd){
    res.render('registro/delete',{usd:userd});
  });
});

//PERFIL

//ADMIN
router.post("/admin",function(req,res){
  if(req.body.contra === app_password){
    Userdata.find(function(error,documento){
      if(error){console.log(error);}
      res.render("admin/index",{datos:documento});
    });
  }else{
    res.redirect("/");
  }
});

router.get("/admin",function(req,res){
  res.render("admin/form");
});

module.exports = router;
