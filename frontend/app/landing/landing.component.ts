import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params, RouterLinkActive } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';

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
    private http: Http){
        this.route.params.subscribe(x => this.handle = x['handle']);
        this.http
			.get(this.userDataUrl+this.handle)
			.toPromise()
			.then(x => {
                this.imageSource = x.json().image_profile;
            })
			.catch(x => x.message);
    };
    
}