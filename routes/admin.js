/* jshint node: true */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin/form',{title: 'admin'});
});

router.get('/map-site', function(req, res, next) {
    res.render('admin/links',{title: 'map-site'});
});

module.exports = router;
