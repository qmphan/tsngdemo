module tsngdemo {

    export class DemoService{
        public static $inject = ['$http', '$q'];
        constructor(private $http, private $q) {

        }

        public getHello() {
            return "Hello"
        }
    }
}

angular.module('tsngdemo.api').service('demo_service', tsngdemo.DemoService);

