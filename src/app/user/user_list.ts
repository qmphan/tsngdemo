/// <reference path="module.ts"/>

module tsngdemo.user {
    export class UserListController extends tsngdemo.BaseController {
        static $inject = ['user_list'];

        constructor(public user_list:Array<UserEntity>) {
            super();
        }
    }
}
