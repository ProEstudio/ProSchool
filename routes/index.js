/* jshint node: true */

var express = require('express');
var router = express.Router();
var Userdata = require('../bin/userdb').Userdata;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ProSchool_BETA' });
});


router.post('/',function(req,res){
  res.render('../views/home', {title: 'Proschool'});
});

router.get('/home',function(req,res){
  res.render('../views/home');
});

router.get('/buscar',function(req,res){
  res.render('../views/buscar');
});

/* GET Registro page. */
router.post('/registro', function(req,res) {
  var userdata = new Userdata({
    name:req.body.nombre,
    lastname:req.apellido,
    user:req.usuario,
    email:req.correo,
    pass:req.password,
    tipo:'estudiante'
  });

  userdata.save(function(err){
    if(err){
      console.log(String(err));
    }
    res.send('Guardamos' +req.body.nombre);
  });
});

router.get('/registro-estudiante', function(req, res) {
  res.render('registro/estudiante', { title: 'Registro - Estudiante' });
});

router.get('/registro-profesor', function(req, res) {
  res.render('registro/profesor', { title: 'Registro - Profesor' });
});

router.get('/registro-padre', function(req, res) {
  res.render('registro/padre', { title: 'Registro - Padre' });
});

module.exports = router;
