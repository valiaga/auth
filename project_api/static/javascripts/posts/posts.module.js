(function (){
  'use strict';

  angular
    .module('project_api.posts',[
        'project_api.posts.controllers',
        'project_api.posts.directives',
        'project_api.posts.services'
    ]);

  angular
    .module('project_api.posts.controllers', []);

  angular
    .module('project_api.posts.directives', ['ngDialog']);

  angular
    .module('project_api.posts.services', []);

})();