/* jshint node: true */

var express = require('express');
var router = express.Router();
var IndexCtrl  = require('../controllers/index');
var UserCtrl  = require('../controllers/users');

/* GET home page. */
/*router.route('/views/*')
  .get(function(req,res){
    res.render('../../public/views/' + req.params);
  });
router.route('*')
  .get(function(req,res){
    res.render('index');
  });*/

router.route('/')
  .get(IndexCtrl.index)
  .post(UserCtrl.userLogin);

router.route('/login')
  .get(IndexCtrl.login);

router.route('/home')
  .get(IndexCtrl.home);

router.route('/users')
  .get(IndexCtrl.perfil);

router.route('/notas')
  .get(IndexCtrl.notas);

router.route('/users/actividad')
  .get(IndexCtrl.actividad);

router.route('/horario')
  .get(IndexCtrl.horario);

module.exports = router;
