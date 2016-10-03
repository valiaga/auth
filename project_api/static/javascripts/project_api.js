/**
 * Project_api
 * @namespace project_api
 */
(function(){
    'use strict';

    angular
        .module('project_api', [
            'project_api.config',
            'project_api.routes',
            'project_api.authentication'
        ]);
    /**
     * Routes
     * @name project_api.routes  
     */
    angular
        .module('project_api.routes', ['ngRoute']);

    angular
        .module('project_api.config', []);
    
    angular
        .module('project_api')
        .run(run)
    
    run.$inject = ['$http'];

    /**
     * @name run
     * @desc Update xsrf $http headers to align with Django's defaults
     */
    function run($http){
        $http.defaults.xrfsHeaderName = 'X-CSRFToken';
        $http.defaults.xrfsHeaderName = 'csrftoken';
    }
})