(function(){
    'use strict';

    angular
        .module('project_api.authentication', [
            'project_api.authentication.controllers',
            'project_api.authentication.services'
        ])

    angular
        .module('project_api.authentication.controllers', []);

    angular
        .module('project_api.authentication.services', ['ngCookies']);    
})();
