/* jshint node: true */

var User = require('../models/users');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/')
  .get(function(req,res) {
    res.render('login', { title: 'ProSchool_BETA' });
  })
  .post(function(req, res) {
    User.findOne({username: req.body.user, password: req.body.pass}, function(err, user) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            if (user) {
               res.json({
                    type: true,
                    data: user,
                    token: user.token
                });
            } else {
                res.json({
                    type: false,
                    data: "Incorrect email/password"
                });
            }
        }
    });
  });

module.exports = router;
