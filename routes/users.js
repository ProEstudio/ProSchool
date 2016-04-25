/* jshint node: true */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('../views/perfil/estudiante',{title:'users'});
});

router.get('/publication', function(req, res, next) {
  res.render('../views/status',{title:'Proschool'});
});

router.get('/actividad', function(req, res, next) {
  res.render('../views/home',{title:'Proschool'});
});


module.exports = router;
