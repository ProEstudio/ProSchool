/* jshint node: true */

var User = require('../models/registro');
var express = require('express');
var router = express.Router();

router.route('/estudiante')
  .get(function(req,res) {
    User.find(function(err, users) {
      if (err) {
        return res.send(err);
      }
      res.render('../views/registro/estudiante',{data:users ,title:'Registro - Estudiante'});
    });
  })
  .post(function(req, res) {
    var data = {
      type:'Alumno',
      name:'jair',
      lastname:'perez oquendo',
      username:'jairperezs',
      email:'jair.perez@outlook.com',
      password:'d1e560'
    };

    var estudent = new User(data);

    estudent.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.send({ message: 'Estudiante Added' });
    });
  });

router.route('/profesor')
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err) {
        return res.send(err);
      }
      res.render('../views/registro/profesor',{data:users , title:'Registro - Profesor'});
    });
  })
  .post(function(req, res) {
    var data = {
      type:'professor',
      name:'jair',
      lastname:'perez oquendo',
      username:'jairperezs',
      email:'jair.perez@outlook.com',
    };

    var profesor = new User(data);

    profesor.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.send({ message: 'Profesor Added'});
    });
  });

router.route('/padre')
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err) {
        return res.send(err);
      }
      res.render('../views/registro/padre',{data:users , title:'Registro - Padre'});
    });
  })
  .post(function(req, res) {
    var data = {
      type:'parent',
      name:'jair',
      lastname:'perez oquendo',
      email:'jair.perez@outlook.com',
    };

    var parent = new User(data);

    parent.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.send({ message: 'Padre Added'});
    });
  });

router.route('/movies/:id').put(function(req,res){
  User.findOne({ _id: req.params.id }, function(err, movie) {
    if (err) {
      return res.send(err);
    }

    for (prop in req.body) {
      movie[prop] = req.body[prop];
    }

    // save the movie
    movie.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.json({ message: 'Movie updated!' });
    });
  });
});

router.route('/movies/:id').get(function(req, res) {
  User.findOne({ _id: req.params.id}, function(err, movie) {
    if (err) {
      return res.send(err);
    }

    res.json(movie);
  });
});

router.route('/movies/:id').delete(function(req, res) {
  User.remove({
    _id: req.params.id
  }, function(err, user) {
    if (err) {
      return res.send(err);
    }

    res.json({ message: 'Successfully deleted' });
  });
});

module.exports = router;
