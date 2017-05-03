import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params, RouterLinkActive } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { LoadingAnimateService } from 'ng2-loading-animate';
import { UserRepository } from '../api/user-repository';

@Component({
    moduleId: module.id,
    selector: 'landing',
    templateUrl: 'landing.component.html',
    styleUrls: [ 'landing.component.css' ],
})

export class LandingComponent {
    handle : string;
    imageSource : string;
    userDataUrl : string = "http://35.164.145.233/TwitGood/backend/public/user/info/";

    constructor(private router: Router,
    private route: ActivatedRoute,
    private http: Http,
    private userService: UserRepository,
    private _loadingSvc: LoadingAnimateService){
        this.handle = this.userService.getUser();
        if(this.userService.getCreated()){
            this.start();
        }
        this.http
			.get(this.userDataUrl+this.handle)
			.toPromise()
			.then(x => {
                this.imageSource = x.json().profile_image;
            })
			.catch(x => x.message);
    }

    start() {
        this._loadingSvc.setValue(true);
    }

    ngOnInit(){
        if(!this.userService.getLoginStatus()){
            console.log(this.userService.getLoginStatus());
            this.router.navigate([""]);
        }
    }
    
    terminateSession(){
        this.userService.logout();
        this.router.navigateByUrl('/');
    }
}