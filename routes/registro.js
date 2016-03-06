var express = require('express');
var router = express.Router();

var registro = ['/registro/profesor','/registro/padre','/registro/estudiante'];
var profesor = function(req,res){
  res.render('registro/profesor');
};
var padre = function(req,res){
  res.render('registro/padre');
};
var estudiante = function(req,res){
  res.render('registro/estudiante');
};

module.exports = router;
