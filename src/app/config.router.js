/**
 * Config for the router
 */
angular.module('tsngdemo')
.config(['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 'MODULE_CONFIG',
    function ($stateProvider,   $urlRouterProvider, JQ_CONFIG, MODULE_CONFIG) {
      $urlRouterProvider.otherwise('/user');
      $stateProvider.state('user', 
              {
  		    url:'/user',
  		    data: {
  		        pageTitle: 'User List Page'
  		    },
  		    templateUrl: 'user/user.html',
  		    controller: tsngdemo.user.UserListController,
                  controllerAs: 'vm',
                  resolve: {
                      user_list: function($stateParams) {
                          var user_list = [];
                          user_list.push(new tsngdemo.user.UserEntity(1, "Toto", "Titi"));
                          user_list.push(new tsngdemo.user.UserEntity(2, "Bob", "Alice"));
                          return user_list;
                      }
                  }
              }
      );
    }
  ]
);
