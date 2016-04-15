/* jshint node: true */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/')
  .get(function(req,res) {
    res.render('index', { title: 'ProSchool_BETA' });
  })
  .post(function(req, res) {
    res.render('../views/home', {title: 'Proschool'});
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

module.exports = router;
