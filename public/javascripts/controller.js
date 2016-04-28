angular
    .module("Proschool_v0.6", ["satellizer"])
    .config(function($authProvider) {
        // Parametros de configuración
        $authProvider.loginUrl = "/api/auth/login";
        $authProvider.signupUrl = "/api/auth/signup";
        $authProvider.tokenName = "token";
        $authProvider.tokenPrefix = "Proschool_v0.6";
    });
/**angular.module('Proschool',[])
.controller('PSController',function($scope){

  //Comentarios
  $scope.user = {
    type:'Alumno',
    name: 'Jair Perez',
    username: 'jairperezs',
    pots:['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia esse, reprehenderit mollitia iusto consequuntur','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia esse, reprehenderit mollitia iusto consequuntur']
  };
  $scope.nuevoComentario = {
    user: $scope.user.username
  };
  $scope.comentarios = [];
  $scope.agregarComentario = function(){
    $scope.comentarios.push($scope.nuevoComentario);
    $scope.nuevoComentario = {
      user: $scope.user.username
    };
  };
});
**/
