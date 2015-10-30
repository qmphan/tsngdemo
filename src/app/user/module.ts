angular.module('tsngdemo.user', [
    'tsngdemo.api','angular-confirm'
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('user.detail', {
            parent: 'user',
            url: '/{userId:[0-9]{1,6}|new}',
            templateUrl: 'user/user-form.html',
            controller: tsngdemo.user.UserEditFormController,
            controllerAs: "vm",
            resolve: {
	            user: function ($stateParams) {
                        return new tsngdemo.user.UserEntity(parseInt($stateParams.userid), "Toto", "Tata");
	            },
	            role_list: function () {
	                return ['Role1', 'Role2'];
	            },
	            group_list: function () {
	                return ['Group1', 'Group2'];
	            }
            }
        });
}]);


