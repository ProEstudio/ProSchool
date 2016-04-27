angular.module('Proschool_v0.6', [])

  .controller('PSController',function($scope,$http){

    $scope.formData = {};

    // Cuando se cargue la página, pide del API todos los TODOs
    $http.get('/api')
      .success(function(data) {
          $scope.users = data;
          console.log(data);
      })
      .error(function(data) {
          console.log('Error: ' + data);
      });

    // Cuando se añade un nuevo User, manda el texto a la API
    $scope.createUser = function(){
      $http.post('/api', $scope.formData)
        .success(function(data) {
            $scope.formData = {};
            $scope.users = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error:' + data);
        });
    };

    // Borra un User despues de checkearlo como acabado
    $scope.deleteUser = function(id) {
      $http.delete('/api/user/' + id)
        .success(function(data) {
            $scope.users = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error:' + data);
        });
    };
  });
