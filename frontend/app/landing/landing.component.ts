import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'landing',
    templateUrl: 'landing.component.html',
    styleUrls: [ 'landing.component.css' ],
})

export class LandingComponent {
    handle : string;

    constructor(private router: Router,
    private route: ActivatedRoute){
        this.route.params.subscribe(x => this.handle = x['handle']);
    };
    
}