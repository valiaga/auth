(function(){
    'use strict';

    angular
      .module('project_api.routes')
      .config(config);
    
    config.$inject = ['$routeProvider'];

    /**
     * @name config
     * @desc Define valid application routes
     */
    function config($routeProvider){
      $routeProvider.when('/register', {
          controller: 'RegisterController',
          controllerAs: 'vm',
          templateUrl: 'project_api/templates/authentication/register.html'
      }).otherwise('/')
    }
})();