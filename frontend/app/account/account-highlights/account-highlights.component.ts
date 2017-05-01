import { UserRepository } from './../api/user-repository';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from '../api/user';

@Component({
    moduleId: module.id,
    selector: 'account-highlights',
    templateUrl: 'account-highlights.component.html',
    styleUrls: [ 'account-highlights.component.css' ],
})

export class AccountHighlightsComponent{
    //user: User = new User("@johndoe",3,316,"../../images/Profile\ Picture.png");
    favorited : string;
    retweeted : string;
    successful : string;
    handle : string;
    scriptInput = '<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>';
    @ViewChild("favoriteTarget") favoriteTarget : ElementRef;

    constructor(private elementRef: ElementRef,
                private userService: UserRepository,
                private route: ActivatedRoute,
				private router: Router){
                    
                };

    ngOnInit(){
      this.router.routerState.parent(this.route).params.subscribe(x => {
          this.handle = x['handle'];
          console.log(this.handle);
      });
      this.userService.getUserData(this.handle).subscribe(
        (data) => {
          this.successful = data.top_successful_tweet;
          this.retweeted = data.top_retweeted_tweet;
          this.favorited = data.top_favorited_tweet;
          this.runTwitter();
      });
    }

    runTwitter(){
        var s = document.createElement('script');
        s.type = "text/javascript";
        s.src = "http://platform.twitter.com/widgets.js";
        this.elementRef.nativeElement.appendChild(s);
    }
}