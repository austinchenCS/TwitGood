import { Component } from '@angular/core';
import { User } from '../api/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	moduleId: module.id,
  selector: 'account-summary',
  templateUrl: 'account-summary.component.html',
  styleUrls: [ 'account-summary.component.css' ]
})

export class AccountSummaryComponent{
    user: User = new User("@johndoe",3,316,"../../images/Profile\ Picture.png");
    xAxisLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','10','11'];
    chartTitle = 'Hourly Tweeting';

    	constructor(private router: Router,
                private route: ActivatedRoute){}
}