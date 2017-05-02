import { UserRepository } from '../../api/user-repository';
import { Component, OnInit } from '@angular/core';
import { User } from '../../api/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'account-engagement',
    templateUrl: 'account-engagement.component.html',
    styleUrls: [ 'account-engagement.component.css' ],
})

export class AccountEngagementComponent{
    user: User;
    days: string[] = ['S','M','T','W','Th','F','S'];
    hours: string[];
    hoursNum : number[] = Array.from(Array(24)).map((e,i)=>i);
    userData: any;

    constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserRepository){}

    ngOnInit(){
      this.hours = new Array<string>(this.hoursNum.length);

      for(var i=0;i<this.hours.length;i++){
        this.hours[i] = (i%12 || 12).toString()+(Math.floor(i/12) ? 'PM' : 'AM');
      }

              //this.xAxisLabels = new Array<string>(this.hours.length);

        // for(var i=0;i<24;i++)
        //   this.xAxisLabels[i] = (i%12 || 12).toString()+(Math.floor(i/12) ? 'PM' : 'AM');
        
      this.user = new User(this.userService.getUser());
      this.user.hourlysuccess = [35,6,2,8,10,5,20,3,8,12,50,51,64]; //Placeholders
      this.user.hourlyactivity = [35,6,2,8,10,5,20,3,8,12,50,51,64]; 
      this.user.weeklysuccess = [35,6,2,8,10,5,20,3,8,12,50,51,64]; 
      this.user.weeklyactivity = [35,6,2,8,10,5,20,3,8,12,50,51,64];
      
      this.userService.getUserData(this.user.twitterHandle).subscribe(
        (data) => {this.userData = data,
            this.user.hourlysuccess = this.userData.hourlysuccess,
            this.user.hourlyactivity = this.userData.hourlyactivity,
            this.user.weeklysuccess = this.userData.weeklysuccess,
            this.user.weeklyactivity = this.userData.weeklyactivity
        }
      );            
    }
}