import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'landing',
    templateUrl: 'landing.component.html',
    styleUrls: [ 'landing.component.css' ],
})

export class LandingComponent {
    handle ='johndoe';

    constructor(private router: Router,
    private route: ActivatedRoute){};
    
}