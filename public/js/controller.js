angular.module('MyFirstApp',[])
.controller("FirstController",function($scope,$http){
  $scope.posts = [];
  $http.get("http://jsonplaceholder.typicode.com/posts")
  .success(function(data){
    $scope.posts = data;
  })
  .error(function(err){

  });
  $scope.nuevaActividad = {};
  $scope.name = 'Jair perez';
  $scope.user = 'jairperezs';
  $scope.actividades = [
    {
      tarea: 'Trabajo de Sociales',
      comentario: 'a'
    },
    {
      tarea: 'Trabajo de matematica',
      comentario: 'Nada no la hice'
    }
  ];
  $scope.agregarActividad = function(){
    $scope.actividades.push($scope.nuevaActividad);
    $scope.nuevaActividad = {};
  };
  $scope.nuevoComentario = {};
  $scope.comentarios = [
    {
      comentario: 'Bueno'
    }
  ];
  $scope.agregarComentario = function(){
    $scope.comentarios.push($scope.nuevoComentario);
    $scope.nuevoComentario = {};
  };
  $scope.nuevoComen = {};
  $scope.comen = function(){
    var actividad = [];
    actividad = $scope.actividades;
    console.log(actividad[1].comentario);
  };
});
