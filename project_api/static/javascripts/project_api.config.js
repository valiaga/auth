/**
 * Config
 * @namespace project_api.config
 */
(function(){
  'use strict';
    
  angular
    .module('project_api.config')
    .config(config);
    
  config.$inject = ['$locationProvider', '$httpProvider'];

  /**
   * @name config
   * @desc Enable HTML5 routing
   */
  function config($locationProvider, $httpProvider){
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  }
})();
