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
        templateUrl: '/static/templates/authentication/register.html'
      }).when('/login', {
        controller: 'LoginController',
        controllerAs: 'vm',
        templateUrl: '/static/templates/authentication/login.html'
      }).when('/', {
        controller: 'IndexController',
        controllerAs: 'vm',
        templateUrl: '/static/templates/layout/index.html'
      }).when('/+:username', {
        controller: 'ProfileController',
        controllerAs: 'vm',
        templateUrl: '/static/templates/profiles/profile.html'
      }).otherwise('/');
    }
})();