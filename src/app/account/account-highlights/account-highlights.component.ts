import { UserRepository } from '../../api/user-repository';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from '../../api/user';
import { DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
    moduleId: module.id,
    selector: 'account-highlights',
    templateUrl: 'account-highlights.component.html',
    styleUrls: [ 'account-highlights.component.css' ],
})

export class AccountHighlightsComponent{
    favorited : any;
    retweeted : any;
    successful : any;
    handle : string;
    user: User;
    scriptInput = '<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>';
    @ViewChild("favoriteTarget") favoriteTarget : ElementRef;

    constructor(private elementRef: ElementRef,
                private userService: UserRepository,
                private route: ActivatedRoute,
                protected sanitizer: DomSanitizer,
				private router: Router){
                    
                };

    ngOnInit(){
      this.user = new User(this.userService.getUser());
      this.userService.getUserData(this.handle).subscribe(
        (data) => {
          //this.successful = data.top_successful_tweet;
          //console.log('raw data: ');
          //console.dir(data.top_successful_tweet);

          this.successful = this.sanitizer.bypassSecurityTrustHtml(this.addCenterAlignmentToTweet(data.top_successful_tweet)),
          //this.retweeted = data.top_retweeted_tweet;
          this.retweeted = this.sanitizer.bypassSecurityTrustHtml(this.addCenterAlignmentToTweet(data.top_retweeted_tweet)),
          //this.favorited = data.top_favorited_tweet;
          this.favorited = this.sanitizer.bypassSecurityTrustHtml(this.addCenterAlignmentToTweet(data.top_favorited_tweet)),
          
        //   this.buildTweet(data.top_successful_tweet);
        //   this.buildTweet(data.top_retweeted_tweet);
        //   this.buildTweet(data.top_favorited_tweet);
          
          this.runTwitter();
      });
    }

    runTwitter(){
        var s = document.createElement('script');
        s.type = "text/javascript";
        s.src = "http://platform.twitter.com/widgets.js";
        this.elementRef.nativeElement.appendChild(s);
    }

    // builds a tweet element with the given twitter link and appends it to the document
    buildTweet(s: string) {
        // build the outer blockquote
        let tweetElement = document.createElement('blockquote');
        tweetElement.className = 'twitter-tweet';

        // build the inner link element
        let tweetLinkElement = document.createElement('a');
        tweetLinkElement.href = s;
        tweetLinkElement.innerHTML = 'penis';

        // put the link element inside of the blockquote
        tweetElement.appendChild(tweetLinkElement);

        // append it to the end
        this.elementRef.nativeElement.appendChild(tweetElement);
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