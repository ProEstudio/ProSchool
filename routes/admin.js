/* jshint node: true */

var User = require('../models/registro');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/')
  .get(function(req, res) {
      res.render('admin/form',{title: 'admin'});
  })
  .post(function(req, res) {
    User.find(function(err,user){
      if(err){console.log(err);}
      res.send({title: 'admin', dato:user});
    });
  });

router.get('/map-site', function(req, res) {
  res.render('admin/links',{title: 'map-site'});
});

module.exports = router;
