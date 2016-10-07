/**
 * Authentication Module
 * @namespace project_api.authentication
 */
(function(){
    'use strict';

    angular
        .module('project_api.authentication', [
            'project_api.authentication.controllers',
            'project_api.authentication.services'
        ])
    
    /**
     * Insert Modules
     * @name modules
     */
    angular
        .module('project_api.authentication.controllers', []);

    angular
        .module('project_api.authentication.services', ['ngCookies']);    
})();
