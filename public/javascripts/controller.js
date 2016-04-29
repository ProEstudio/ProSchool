angular
    .module("Proschool_v0.6", ["satellizer"])
    .config(function($authProvider, $stateProvider) {
        // Parametros de configuración
        $authProvider.loginUrl = "/api/auth/login";
        $authProvider.signupUrl = "/api/auth/signup";
        $authProvider.tokenName = "token";
        $authProvider.tokenPrefix = "Proschool_v0.6";

        // Configuración de las rutas/estados
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "views/index.html",
                controller: "HomeController"
            })
            .state("login", {
                url: "/login",
                templateUrl: "views/login",
                controller: "LoginController",
                controllerAs: "login"
            })
            .state("signup", {
                url: "/signup",
                templateUrl: "views/signup.html",
                controller: "SignUpController",
                controllerAs: "signup"
            })
            .state("logout", {
                url: "/logout",
                templateUrl: null,
                controller: "LogoutController"
            })
            .state("private", {
                url: "/private",
                templateUrl: "views/private.html",
                controller: "PrivateController",
                controllerAs: "private"
            });
    })
    .config(['$httpProvider', 'satellizer.config', function($httpProvider, config) {
      $httpProvider.interceptors.push(['$q', function($q) {
        var tokenName = config.tokenPrefix ? config.tokenPrefix + '_' + config.tokenName : config.tokenName;
        return {
          request: function(httpConfig) {
            var token = localStorage.getItem(tokenName);
            if (token && config.httpInterceptor) {
              token = config.authHeader === 'Authorization' ? 'Bearer ' + token : token;
              httpConfig.headers[config.authHeader] = token;
            }
            return httpConfig;
          },
          responseError: function(response) {
            return $q.reject(response);
          }
        };
      }]);
    }]);

angular
    .module("myApp.controllers")
    .controller("SignUpController", SignUpController)
    .controller("LoginController", LoginController)
    .controller("LogoutController", LogoutController);

function SignUpController($auth, $location) {
    var vm = this;
    this.signup = function() {
        $auth.signup({
            email: vm.email,
            password: vm.password
        })
        .then(function() {
            // Si se ha registrado correctamente,
            // Podemos redirigirle a otra parte
            $location.path("/private");
        })
        .catch(function(response) {
            // Si ha habido errores, llegaremos a esta función
        });
    };
}

function LoginController($auth, $location) {
    var vm = this;
    this.login = function(){
        $auth.login({
            email: vm.email,
            password: vm.password
        })
        .then(function(){
            // Si se ha logueado correctamente, lo tratamos aquí.
            // Podemos también redirigirle a una ruta
            $location.path("/private");
        })
        .catch(function(response){
            // Si ha habido errores llegamos a esta parte
        });
    };
}

function LogoutController($auth, $location) {
    $auth.logout()
        .then(function() {
            // Desconectamos al usuario y lo redirijimos
            $location.path("/");
        });
}

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
