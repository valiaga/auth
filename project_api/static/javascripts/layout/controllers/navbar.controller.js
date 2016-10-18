/**
 * NavbarController
 * @namespace project_api.layout.controllers
 */
(function (){
  'use strict';

  angular
    .module('project_api.layout.controllers')
    .controller('NavbarController', NavbarController);
  
  NavbarController.$inject = ['$scope', 'Authentication'];

  /**
   * @namespace NavbarController
   */
  function NavbarController($scope, Authentication){
    var vm = this;

    vm.logout = logout;

    /**
     * @name logout
     * @desc Log the user out
     * @memberOf project_api.layout.controllers.NavbarController
     */
    function logout(){
      Authentication.logout();
    }
  }
})();