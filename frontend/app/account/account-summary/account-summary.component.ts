import { UserRepository } from './../api/user-repository';
import { Component, OnInit } from '@angular/core';
import { User } from '../api/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	moduleId: module.id,
  selector: 'account-summary',
  templateUrl: 'account-summary.component.html',
  styleUrls: [ 'account-summary.component.css' ],
})

export class AccountSummaryComponent{
    user: User;
    xAxisLabels: string[] = ['S','M','T','W','Th','F','S'];
    hours : number[] = Array.from(Array(24)).map((e,i)=>i);
    chartTitle = 'Tweet Success by Days';
    userData: any;

    constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserRepository){}

    ngOnInit(){
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