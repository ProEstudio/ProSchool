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
//HOME
router.get('/buscar',function(req,res){
  res.render('buscar');
});

router.get('/user/publicacion',function(req,res){
  res.render('status');
});

//PERFIL
router.get('/perfil',function(req,res){
  res.render('home');
});

router.get('/perfil/estudiante',function(req,res){
  res.render('perfil/estudiante');
});

router.get('/perfil/padre',function(req,res){
  res.render('perfil/padre');
});

router.get('/perfil/profesor',function(req,res){
  res.render('perfil/profesor');
});

router.get('/actividad',function(req,res){
  res.render('agregar');
});

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

router.get('/map-site',function(req,res){
  res.render('admin/links');
});
module.exports = router;
