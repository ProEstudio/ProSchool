/* jshint node: true */

exports.index = function(req, res){
  res.render('index');
};

exports.login = function (req, res) {
  res.render('login');
};

exports.home = function (req, res) {
  res.render('home');
};

exports.perfil = function (req, res) {
  res.render('perfil/estudiante/index');
};

exports.notas = function (req, res) {
  res.render('perfil/estudiante/periodo');
};

exports.actividad = function (req, res) {
  res.render('perfil/estudiante/actividad');
};

exports.horario = function (req, res) {
  res.render('perfil/estudiante/horario');
};