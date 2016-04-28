/* jshint node: true */

var User = require('../models/users');
var service = require('./service');


//GET - Return all Users in the DB
exports.findAllUsers = function(req, res) {
  User.find(function(err, user) {
    if (err){
      res.send(500, err.message);
    }
    return res
            .status(200)
            .send({token: service.createToken(user)}); // return all todos in JSON format
  });
};

//GET - Return a User with specified ID
exports.findById = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if(err) {
      return res.send(500, err.message);
    }
    console.log('GET /user/' + req.params.id);
    return res
            .status(200)
            .send({token: service.createToken(user)});
  });
};

//POST - Insert a new User in the DB
exports.addUser= function(req, res) {

  var data = {
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  };

  var user = new User(data);

  user.save(function(err, user) {
    if(err) {
      return res.status(500).send( err.message);
    }
    return res
            .status(200)
            .send({token: service.createToken(user)});
  });
};

//PUT - Update a register already exists
exports.updateUser = function(req, res) {
  User.findById(req.params.id, function(err, user) {
      user.name     = req.body.name;
      user.lastame  = req.body.lastname;
      user.email    = req.body.email;
      user.username = req.body.username;
      user.password = req.body.password;

      user.save(function(err) {
        if(err){
          return res.status(500).send(err.message);
        }
        res.status(200).json(user);
      });
  });
};

//DELETE - Delete a User with specified ID
exports.deleteUser = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    user.remove(function(err) {
      if(err) {
        return res.status(500).send(err.message);
      }
      res.status(200).send();
    });
  });
};

//Auth - login
exports.userLogin = function(req, res) {
  User.findOne({username: req.body.username.toLowerCase()}, function(err, user) {
    // Comprobar si hay errores
    // Si el usuario existe o no
    // Y si la contraseña es correcta
    return res
        .status(200)
        .send({token: service.createToken(user)});
  });
};
