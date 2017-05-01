import { UserRepository } from './../api/user-repository';
import { Component, OnInit } from '@angular/core';
import { User } from '../api/user';
//import { UserData } from '../api/user-data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	moduleId: module.id,
  selector: 'account-summary',
  templateUrl: 'account-summary.component.html',
  styleUrls: [ 'account-summary.component.css' ],
})

export class AccountSummaryComponent{
    user: User;
    xAxisLabels: string[] = ['S','M','T','W','Th','F','S']; //= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12','13','14','15','16','17',''];
    hours : number[] = Array.from(Array(24)).map((e,i)=>i);
    chartTitle = 'Tweet Success by Days';
    userData: any;

    constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserRepository){}

    ngOnInit(){
        this.xAxisLabels = new Array<string>(this.hours.length);

        for(var i=0;i<24;i++){
          this.xAxisLabels[i] = (i%12 || 12).toString()+(Math.floor(i/12) ? 'PM' : 'AM');
        }

      this.user = new User('twitgood'); 
      this.user.weeklysuccess = [35,6,2,8,10,5,20,3,8,12,50,51,64]; //Placeholders
      this.user.topwords = ['35','6'];
      
      this.userService.getUserData(this.user.twitterHandle).subscribe(
        (data) => {this.userData = data,
          this.user.weeklysuccess = this.userData.weeklysuccess,
          this.user.topwords = this.userData.topwords,
          this.user.top_successful_tweet = this.userData.top_successful_tweet
        }
      );            
    }
}