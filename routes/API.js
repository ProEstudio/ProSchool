/* jshint node: true */
var User = require('../models/registro');
var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(req,res) {
    User.find(function(err, user) {
        if(err) {
            res.send(err);
        }
        res.json(user);
    });
  })
  .post(function(req, res) {
    User.findOne({username:req.body.user,password:req.body.pass},function(err,user){
      req.session.user_id = user._id;
      res.redirect('/home');
    });
    //res.render('../views/home', {title: 'Proschool'});
  });
