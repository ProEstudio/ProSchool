/* jshint node: true */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('../views/perfil/estudiante',{title:'users'});
});


module.exports = router;
