/* jshint node: true */

var express = require('express');
var router = express.Router();
var Userdata = require('../bin/userdb').Userdata;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ProSchool_BETA' });
});

/* GET Registro page. */
router.get('/registro', function(req, res) {
  res.send('Area De reigstro');
});

router.get('/registro-estudiante', function(req, res) {
  var userdata = new Userdata({
    name:req.nombre,
    lastname:req.apellido,
    user:req.usuario,
    email:req.correo,
    pass:req.password,
    tipo:'estudiante'
  });
  res.render('registro/estudiante', { title: 'Registro - Estudiante' });
});

router.get('/registro-profesor', function(req, res) {
  res.render('registro/profesor', { title: 'Registro - Profesor' });
});

router.get('/registro-padre', function(req, res) {
  res.render('registro/padre', { title: 'Registro - Padre' });
});

module.exports = router;
