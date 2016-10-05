/**
<<<<<<< HEAD
 * Authentication module
 * @namespace 
 */
(function () {
  'use strict';

  angular
    .module('project_api.authentication', [
      'project_api.authentication.controllers',
      'project_api.authentication.services'
    ]);

  angular
    .module('project_api.authentication.controllers', []);

  angular
    .module('project_api.authentication.services', ['ngCookies']);
})();
=======
 * Authentication Module
 * @namespace project_api.authentication
 */
(function(){
    'use strict';

    angular
        .module('project_api.authentication', [
            'project_api.authentication.controllers',
            'project_api.authentication.controllers'
        ])
    angular
        .module('project_api.authentication.controllers', []);

    angular
        .module('project_api.authentication.services', ['ngCookies']);    
})
>>>>>>> 7f84731117dada3f4981638352d6d5d69a88e46f
