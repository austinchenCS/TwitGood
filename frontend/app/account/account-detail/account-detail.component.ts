import { UserData } from './../api/user-data';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../api/user';
import { UserRepository } from './../api/user-repository';

@Component({
    moduleId: module.id,
    selector: 'account-detail',
    templateUrl: 'account-detail.component.html',
    styleUrls: [ 'account-detail.component.css' ]
})

export class AccountDetailComponent{
    user: User;
    userData: any;
    constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserRepository){}

    ngOnInit(){
      this.route.parent.params.subscribe(x => {
          this.user = new User(x['handle']);
          console.log(this.user);
      });
      
      this.userService.getUserData(this.user.twitterHandle).subscribe(
        (data) => {this.userData = data,
            this.user.accountage = this.userData.accountage,
            this.user.tophashtags = this.userData.tophashtags,
            this.user.topwords = this.userData.topwords,
            this.user.positive = this.userData.positive;
        }
      );            
    }
}