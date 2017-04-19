import { Component } from '@angular/core';
import { LoginDetails } from '../api/login-details';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
 selector: 'frontpage',
 templateUrl: './app/frontpage/frontpage.component.html',
 styleUrls: [ './app/frontpage/frontpage.component.css' ],
})
export class FrontpageComponent {
    create : boolean;
    details : LoginDetails;
    loginFail : boolean = false;
    private loginUrl = 'http://private-17592-twitgood.apiary-mock.com/users/auth';
    private createUrl = 'http://private-17592-twitgood.apiary-mock.com/user';

    constructor(private http: Http){
        this.create = false;
        this.details = new LoginDetails(false);
    };

    createFlip(){
        this.create = !this.create;
        this.details = new LoginDetails(this.create);
    }

    accountInteraction(){
        if(this.create){
            this.http
			.post(this.createUrl, this.details)
			.toPromise()
			.then(x => this.validateResult(x.json()))
			.catch(x => x.message);
        }
        else{
            this.http
			.post(this.loginUrl, this.details)
			.toPromise()
			.then(x => this.validateResult(x.json()))
			.catch(x => x.message);
        }
    }

    validateResult(result : any){
        console.log(result);
        if(result.data.success){
            this.goToAccount(result.data.twitter_handle);
        }
        else{
            this.loginFail = true;
        }
    }

    goToAccount(handle : string){

    }
}
