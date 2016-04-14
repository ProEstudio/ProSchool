angular.module('Proschool',[])
.controller('PSController',function($scope){


  //Comentarios
  $scope.user = ' jairperezs ';
  $scope.pots = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia esse, reprehenderit mollitia iusto consequuntur sunt voluptatum et veritatis maxime nam voluptates ut beatae dolores nesciunt, earum, doloribus eos obcaecati perspiciatis.';
  $scope.nuevoComentario = {
    user: $scope.user
  };
  $scope.comentarios = [];
  $scope.agregarComentario = function(){
    $scope.comentarios.push($scope.nuevoComentario);
    $scope.nuevoComentario = {
      user: $scope.user
    };
  };
});
