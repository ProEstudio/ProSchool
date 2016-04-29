angular.module("FinalApp",["lumx","ngRoute"])
.config(function($routeProvider){
  $routeProvider
    .when('/',{
      controller:'MainController',
      templateUrl:'views/layout/login'
    });
});
