import { Component, ViewChild } from '@angular/core';
import { FormsModule, Validators, NgForm } from '@angular/forms';
import { LoginDetails } from '../api/login-details';
import { Http, Headers, Response } from '@angular/http';
import { ValidationComponent } from './../shared/validation/validation.component';
import { ValueMatchDirective } from './../shared/value-match/value-match.directive';
import { Router } from '@angular/router';
import { UserRepository } from '../api/user-repository';
import 'rxjs/add/operator/toPromise';

@Component({
 selector: 'frontpage',
 templateUrl: './frontpage.component.html',
 styleUrls: [ './frontpage.component.css' ],
})
export class FrontpageComponent {

    @ViewChild("loginForm") myForm : NgForm;

    create : boolean;
    details : LoginDetails;
    loginFail : boolean = false;
    private loginUrl = 'https://private-17592-twitgood.apiary-mock.com/users/auth/';
    private createUrl = 'https://private-17592-twitgood.apiary-mock.com/user/';

    constructor(private http: Http,
    private router: Router,
    private userService: UserRepository){
        this.create = false;
        this.details = new LoginDetails(false);
    };

    ngOnInit(){
        if(this.userService.getLoginStatus()){
            this.router.navigate(["home"]);
        }
    }

    createFlip(){
        this.create = !this.create;
        this.details = new LoginDetails(this.create);
        this.loginFail = false;
        this.myForm.reset();
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
            if(this.create)
            {
                this.goToAccount(this.details.twitter_handle);
            }
            else
            {
                this.goToAccount(result.handle);
            }
        }
        else{
            this.loginFail = true;
        }
    }

    goToAccount(handle : string){
        console.log(handle);
        this.userService.setUser(handle);
        console.log(this.userService.getLoginStatus());
        this.router.navigate(['home']);
    }
}
