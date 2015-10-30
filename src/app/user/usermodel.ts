module tsngdemo.user {

    export class UserEntity {
        constructor(public id, public first_name, public last_name) {
        }
        public enabled:number;
        public role:string;
        public group_ids:Array<number>;
    }
}
