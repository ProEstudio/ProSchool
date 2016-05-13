/* jshint node: true */
var express = require('express');
var router = express.Router();
var UserCtrl  = require('../controllers/users');

router.route('/')
  .get(UserCtrl.findAllUsers)
  .post(UserCtrl.addUser);

router.route('/user/:id')
  .get(UserCtrl.findById)
  .put(UserCtrl.updateUser)
  .delete(UserCtrl.deleteUser);

router.route('/auth')
  .post(UserCtrl.userLogin);

module.exports = router;
