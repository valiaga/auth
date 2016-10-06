/**
 * Project Api Routes
 * @namespace project_api.routes
 */
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
          templateUrl: '../../../templates/authentication/register.html'
      }).otherwise('/')
    }
})();