export class LoginDetails{
    email : string;
    password : string;
    twitter_handle : string;
    first_name : string;
    confirm : string;
    create : boolean;
    api_key = "deprecated";
    api_secret = "deprecated";

    constructor(create : boolean){
        this.create = create;
    }
}