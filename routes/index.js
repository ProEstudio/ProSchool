/* jshint node: true */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/')
  .get(function(req,res) {
    res.render('index', { title: 'ProSchool_BETA' });
  })
  .post(function(req, res) {
    res.send('Hola Jair');
  });

module.exports = router;
