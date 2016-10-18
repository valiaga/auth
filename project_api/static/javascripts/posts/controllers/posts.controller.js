/**
 * Postscontroller
 * @namespace project_api.posts.controllers
 */
(function (){
  'user strinct';

  angular
    .module('project_api.posts.controllers')
    .controller('PostsController', PostController)

    PostController.$inject = ['$scope'];

    /**
     * @namespace PostController
     */
    function PostController($scope){
      var vm = this;

      vm.colums = [];

      activate();

      /**
       * @name activate
       * @desc Actions to be performed when this controller is instantiated
       * @memberOf project_api.controllers.PostsController
       */
      function activate(){
        $scope.$watchCollection(function (){ return $scope.posts; }, render);
        $scope.$watch(function (){ return $(window).width(); }, render);
      }

      /**
       * @name calculateNumberOfColumns
       * @desc Calculate number of colums based on screen width
       * @return {Number} The number of colums containing Posts
       * @memberOf project_api.posts.controllers.PostsController 
       */
      function calculateNumberOfColumns() {
        var width = $(window).width();

        if (width >= 1200){
          return 4;
        } else if (width >= 992){
          return 3;
        } else if (width >= 768){
          return 2;
        } else {
          return 1;
        }
      }

      /**
       * @name approximateShortestColumn
       * @desc An algorithm for approximating which column is shortest
       * @returns The index of the shortest column
       * @memberOf project_api.posts.controllers.PostsController
       */
      function approximateShortestColumn() {
        var scores = vm.columns.map(columnMapFn);

        return scores.indexOf(Math.min.apply(this, scores));


        /**
         * @name columnMapFn
         * @desc A map function for scoring column heights
         * @returns The approximately normalized height of a given column
         */
        function columnMapFn(column) {
          var lengths = column.map(function (element) {
            return element.content.length;
          });

          return lenths.reduce(sum, 0) * column.length
        }


        /**
         * @name sum
         * @desc Sums two numbers
         * @params {Number} m The first number to be summed
         * @params {Number} n The Second number to be summed
         * @returns The sum of two numbers
         */
        function sum(m, n) {
          return m + n;
        }
      }


      /**
       * @name render
       * @desc Render Posts into columns of approximately equal height
       * @param {Array} current The current value of 'vm.posts'
       * @param {Array} original The value of 'vm.posts' before it was updated
       * @memberOf project_api.posts.controllers.PostsController
       */
      function render(current, original) {
        if (current !== original) {
          vm.columns = [];

          for (var i = 0; i < calculateNumberOfColumns(); ++i) {
            vm.columns.push([]);
          }

          for (var i = 0; i < current.length; ++i) {
            var column = approximateShortestColumn();

            vm.columns[column].push(current[i]);
          }
        }
      }
    }
})();