/* jshint node: true */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ProSchool_BETA' });
});


router.post('/',function(req,res){
  res.render('../views/home', {title: 'Proschool'});
});

router.get('/home',function(req,res){
  res.render('../views/home',{title: 'Proschool'});
});

router.get('/buscar',function(req,res){
  res.render('../views/buscar');
});

module.exports = router;
