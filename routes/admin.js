/* jshint node: true */

var express = require('express');
var router = express.Router();
var Userdata = require('../bin/userdb').Userdata;

/* GET home page. */
router.get('/', function(req, res) {
  Userdata.find(function(err,documento){
    if(err){console.log(err);}
    res.render('admin/form',{title: 'admin', dato:documento});
  });
});

router.post('/', function(req, res) {
  res.render('admin/index',{title: 'admin'});
});

router.get('/map-site', function(req, res) {
  res.render('admin/links',{title: 'map-site'});
});

module.exports = router;
