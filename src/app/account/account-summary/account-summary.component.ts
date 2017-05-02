import { UserRepository } from '../../api/user-repository';
import { Component, OnInit, Input, AfterViewInit, ElementRef } from '@angular/core';
import { User } from '../../api/user';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeHtml} from '@angular/platform-browser';

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
    tweetHTML: any;

    constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserRepository,
              protected sanitizer: DomSanitizer,
              private elementRef:ElementRef){}

    ngOnInit(){
      this.user = new User(this.userService.getUser());
      this.user.weeklysuccess = [35,6,2,8,10,5,20,3,8,12,50,51,64]; //Placeholders
      this.user.topwords = ['35','6'];

      this.userService.getUserData(this.user.twitterHandle).subscribe(
        (data) => {this.userData = data,
          this.user.weeklysuccess = this.userData.weeklysuccess,
          this.user.topwords = this.userData.topwords,
          this.user.top_successful_tweet = this.userData.top_successful_tweet,
          this.tweetHTML = this.sanitizer.bypassSecurityTrustHtml(this.addCenterAlignmentToTweet(this.user.top_successful_tweet)),
          this.insertScript() 
      });
    }

    ngAfterViewInit() {
    }

    insertScript(){
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = "http://platform.twitter.com/widgets.js";
      this.elementRef.nativeElement.appendChild(s);
    }

    addCenterAlignmentToTweet(s:string){
      let str = 'blockquote class="twitter-tweet';
      let cstr = ' tw-align-center';
      var n = str.length;
      var m:number;
      m = s.indexOf('blockquote class="twitter-tweet');
      let idx = n+m;
      return s.slice(0, idx) + cstr + s.slice(idx + Math.abs(0));
    }
}