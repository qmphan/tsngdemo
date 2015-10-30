module tsngdemo {

    export class CommonAPI  {
        public static $http;
        public static $q;

        public static wsCall(method:string, url:string, params_in:any) {
            var params = {};
            if (params_in) {
                angular.extend(params, params_in);
            }
            if (method ==='GET') {
                return CommonAPI.$http.get(url, {params: params});
            }
            else if (method ==='POST'){
                return CommonAPI.$http.post(url, params);
            }
            else {
                throw new Error("Unknown method " + method);
            }
        }

        public static wsGet(url:string, params:any) {
            return this.wsCall('GET', url, params);
        }

        public static wsPost(url:string, params:any) {
            return this.wsCall('POST', url, params);
        }

        public static joinURL(...url_parts:string[]):string {
            var ret:string;
            for (var i = 0; i < url_parts.length; i++) {
                var s = url_parts[i];
                if (ret) {
                    if (ret[ret.length-1] === '/' || (s.length > 0 && s[0] === '/')) {
                        ret += s;
                    }
                    else {
                        ret += '/' + s;
                    }
                }
                else {
                    ret = s;
                }
            }
            return ret;
        }

        public static clearObject(obj) {
            for (var member in obj) {
                delete obj[member];
            }
        }

        public static merge(dest, src) {
            CommonAPI.clearObject(dest);
            angular.merge(dest, src);
        }
    }
}

angular.module('tsngdemo.api')
    .service('CommonAPI', ['$http', '$q', function($http, $q) {
        tsngdemo.CommonAPI.$http = $http;
        tsngdemo.CommonAPI.$q = $q;
        return tsngdemo.CommonAPI;
    }]);
