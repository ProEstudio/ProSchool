/* jshint node: true */

var User = require('../models/registro');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/')
  .get(function(req,res) {
    res.render('index', { title: 'ProSchool_BETA' });
  })
  .post(function(req, res) {
    User.findOne({username:req.body.user,password:req.body.pass},function(err,user){
      req.session.user_id = user._id;
      res.redirect('/home');
    });
    //res.render('../views/home', {title: 'Proschool'});
  });

router.route('/home')
  .get(function(req,res){
  res.render('../views/home',{title: 'Proschool'});
});

router.route('/buscar')
  .get(function(req,res){
    res.render('../views/buscar');
  });

router.route('/notas')
  .get(function(req,res){
    res.render('../views/perfil/estudiante/periodo');
  });

router.route('/horario')
  .get(function(req,res){
    res.render('../views/perfil/estudiante/horario');
  });

module.exports = router;