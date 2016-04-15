angular.module('Proschool',[])
.controller('PSController',function($scope){

  //Comentarios
  $scope.user = {
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
