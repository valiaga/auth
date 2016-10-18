/**
 * Posts
 * @namespace project_api.posts.directives
 */
(function(){
  'use strict';

  angular
    .module('project_api.posts.directives')
    .directive('posts', posts);

  /**
   * @namespace Posts
   */

  function posts(){
    /**
     * @name directive
     * @desc The directive to be returned
     * @memberOf project_api.posts.directives.Posts
     */
    var directive = {
        controller: 'PostsController',
        controllerAs: 'vm',
        restrict: 'E',
        scope: {
            posts: '='
        },
        templateUrl: '/static/templates/posts/posts.html'
    };

    return directive;
  }
})();