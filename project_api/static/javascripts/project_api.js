/**
<<<<<<< HEAD
 * project api
 * @namespace project_api
 */
(function () {
  'use strict';

  angular
    .module('project_api', [
      'project_api.config',
      'project_api.routes',
      'project_api.authentication'
    ]);

  angular
    .module('thinkster')
    .run(run);

  run.$inject = ['$http'];

  angular
    .module('project_api.routes', ['ngRoute']);
  angular
    .module('project_api.config', []);

  /**
  * @name run
  * @desc Update xsrf $http headers to align with Django's defaults
  */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }

})();
=======
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
>>>>>>> 7f84731117dada3f4981638352d6d5d69a88e46f
