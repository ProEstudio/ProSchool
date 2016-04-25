/* jshint node: true */
var User = require('../models/registro');

module.exports = function(req,res,next){
  if(!req.session.user_id){
    res.redirect('/');
  }
  else{
    User.findById(req.session.user_id,function(err,user){
      if(err){
        console.log(err);
        res.redirect('/');
      }
      else{
        res.locals = { user: user };
        next();
      }
    });
  }
};