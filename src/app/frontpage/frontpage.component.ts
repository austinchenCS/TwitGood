import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginDetails } from '../api/login-details';
import { Http, Headers, Response } from '@angular/http';
import { ValidationComponent } from './../shared/validation/validation.component';
import { Router } from '@angular/router'
import 'rxjs/add/operator/toPromise';

@Component({
 selector: 'frontpage',
 templateUrl: './frontpage.component.html',
 styleUrls: [ './frontpage.component.css' ],
})
export class FrontpageComponent {
    create : boolean;
    details : LoginDetails;
    loginFail : boolean = false;
    private loginUrl = 'https://private-17592-twitgood.apiary-mock.com/users/auth/';
    private createUrl = 'https://private-17592-twitgood.apiary-mock.com/user/';

    constructor(private http: Http,
    private router: Router){
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
        if(result.success){
            this.goToAccount(result.handle);
        }
        else{
            this.loginFail = true;
        }
    }

    goToAccount(handle : string){
        console.log(handle);
        this.router.navigate(['home/'+handle]);
    }
}
