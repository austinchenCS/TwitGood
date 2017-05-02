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
    userDataUrl : string = "https://private-17592-twitgood.apiary-mock.com/user/info/";

    constructor(private router: Router,
    private route: ActivatedRoute,
    private http: Http,
    private userService: UserRepository,
    private _loadingSvc: LoadingAnimateService){
        this.start();
        this.route.params.subscribe(x => this.handle = x['handle']);
        this.handle = this.userService.getUser();
        this.http
			.get(this.userDataUrl+this.handle)
			.toPromise()
			.then(x => {
                this.imageSource = x.json().image_profile;
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