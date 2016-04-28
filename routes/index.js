/* jshint node: true */

var express = require('express');
var router = express.Router();
var UserCtrl  = require('../controllers/users');

/* GET home page. */
router.route('/' )
  .get(UserCtrl.findAllUsers)
  .post(UserCtrl.addUser);

module.exports = router;
