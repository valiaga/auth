/**
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