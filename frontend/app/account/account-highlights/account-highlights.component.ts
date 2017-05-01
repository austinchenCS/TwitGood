import { Component, ElementRef } from '@angular/core';
import { User } from '../api/user';

@Component({
    moduleId: module.id,
    selector: 'account-highlights',
    templateUrl: 'account-highlights.component.html',
    styleUrls: [ 'account-highlights.component.css' ]
})

export class AccountHighlightsComponent{
    //user: User = new User("@johndoe",3,316,"../../images/Profile\ Picture.png");

    constructor(private elementRef: ElementRef){};

    ngAfterViewInit(){
        var s = document.createElement('script');
        s.type = "text/javascript";
        s.src = "http://platform.twitter.com/widgets.js";
        this.elementRef.nativeElement.appendChild(s);
    }
}