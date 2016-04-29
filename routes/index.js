/* jshint node: true */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/' )
  .get(function(req,res){
    res.render('../views/layout/layout');
  });

router.route('/:name' )
  .get(function(req,res){
    var name = req.params.name;
    res.render('../views/' + name);
  });

module.exports = router;
