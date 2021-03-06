/**
 * Project_api
 * @namespace project_api
 */
(function(){
    /**
     * Declare Module mi project
     * @name Project_api
     */
   angular.module('project_api', []);
})();

(function(){
    'use strict';

    angular
      .module('project_api', [
        'project_api.config',
        'project_api.routes',
        
        'project_api.authentication',
        'project_api.layout',
        'project_api.posts',
        'project_api.utils',
        'project_api.profiles'
      ]);
    
    /**
     * Dependencias Definidas
     * @name project_api.dependences  
     */
    
    angular
      .module('project_api.config', []);
    
    angular
      .module('project_api.routes', ['ngRoute']);

    /**
     * Reference to Project_api
     */
    angular
      .module('project_api')
      .run(run)
    
    //run.$inject = ['$http', '$cookies'];
    run.$inject = ['$http'];

    /**
     * @name run
     * @desc Update xsrf $http headers to align with Django's defaults
     */
    function run($http){
      $http.defaults.xrfsHeaderName = 'X-CSRFToken';
      $http.defaults.xrfsHeaderName = 'csrftoken';

      //$http.defaults.headers.post['X-CSRFToken'] = $cookies.get('csrftoken');
    }
})();

