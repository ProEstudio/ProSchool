angular.module("FinalApp",["ngRoute"])
.config(function($routeProvider,$locationProvider){
  $routeProvider.
      when('/', {
        templateUrl: 'partials/index',
        controller: IndexCtrl
      })
});
