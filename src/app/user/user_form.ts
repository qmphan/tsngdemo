/// <reference path="module.ts"/>

module tsngdemo.user {

    export class UserEditFormController extends tsngdemo.BaseController {
        static $inject = ['toaster', 'user', 'role_list', 'group_list'];
        protected selectedGroups = [];

        constructor(private toaster, public user:UserEntity, public role_list, public group_list) {
            super();
            console.log("UserEditFormController constructor got called");
            this.selectedGroups = [];
            this.group_list = group_list;
        }

        public updateMe() {
        }

        /**
         * @type: success | error | info | warning | waiting
         */
        private showMessage = (type, message) => {
            this.toaster.pop(type, "Hello", message);
        }
    }
}
