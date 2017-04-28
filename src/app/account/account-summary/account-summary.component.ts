import { UserRepository } from './../api/user-repository';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { User } from '../api/user';
import { UserData } from '../api/user-data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	moduleId: module.id,
  selector: 'account-summary',
  templateUrl: 'account-summary.component.html',
  styleUrls: [ 'account-summary.component.css' ],
})

export class AccountSummaryComponent{
    user: User; //= new User("twitgood",3,316,"../../images/Profile\ Picture.png");
    xAxisLabels: string[]; //= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12','13','14','15','16','17',''];
    hours : number[] = Array.from(Array(24)).map((e,i)=>i);
    chartTitle = 'Hourly Tweeting';
    userData: any;

    	constructor(private router: Router,
                private route: ActivatedRoute,
                private userService: UserRepository){}

      ngOnInit(){
        this.xAxisLabels = new Array<string>(this.hours.length);

        for(var i=0;i<this.xAxisLabels.length;i++){
          this.xAxisLabels[i] = this.hours[i].toString();
        }

        this.user = new User("twitgood",3,316,"../../images/Profile\ Picture.png");
        
        this.userService.getUserData(this.user.twitterHandle).subscribe(
          (data) => {this.userData = data,this.user.hourlytweeting = this.userData.hourlyactivity}
        );            
      }

      printUD(){
        console.log(this.user.hourlytweeting);

      }
}