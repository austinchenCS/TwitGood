"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = require("./../api/user-repository");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const platform_browser_1 = require("@angular/platform-browser");
let AccountHighlightsComponent = class AccountHighlightsComponent {
    constructor(elementRef, userService, route, sanitizer, router) {
        this.elementRef = elementRef;
        this.userService = userService;
        this.route = route;
        this.sanitizer = sanitizer;
        this.router = router;
        this.scriptInput = '<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>';
    }
    ;
    ngOnInit() {
        this.router.routerState.parent(this.route).params.subscribe(x => {
            this.handle = x['handle'];
            console.log(this.handle);
        });
        this.userService.getUserData(this.handle).subscribe((data) => {
            this.successful = data.top_successful_tweet;
            this.successful = this.sanitizer.bypassSecurityTrustHtml(this.addCenterAlignmentToTweet(this.successful));
            this.retweeted = data.top_retweeted_tweet;
            this.retweeted = this.sanitizer.bypassSecurityTrustHtml(this.addCenterAlignmentToTweet(this.retweeted));
            this.favorited = data.top_favorited_tweet;
            this.favorited = this.sanitizer.bypassSecurityTrustHtml(this.addCenterAlignmentToTweet(this.favorited));
            this.runTwitter();
        });
    }
    runTwitter() {
        var s = document.createElement('script');
        s.type = "text/javascript";
        s.src = "http://platform.twitter.com/widgets.js";
        this.elementRef.nativeElement.appendChild(s);
    }
    addCenterAlignmentToTweet(s) {
        let str = 'blockquote class="twitter-tweet';
        let cstr = ' tw-align-center';
        var n = str.length;
        var m;
        m = s.indexOf('blockquote class="twitter-tweet');
        let idx = n + m;
        return s.slice(0, idx) + cstr + s.slice(idx + Math.abs(0));
    }
};
__decorate([
    core_1.ViewChild("favoriteTarget"),
    __metadata("design:type", core_1.ElementRef)
], AccountHighlightsComponent.prototype, "favoriteTarget", void 0);
AccountHighlightsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'account-highlights',
        templateUrl: 'account-highlights.component.html',
        styleUrls: ['account-highlights.component.css'],
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        user_repository_1.UserRepository,
        router_1.ActivatedRoute,
        platform_browser_1.DomSanitizer,
        router_1.Router])
], AccountHighlightsComponent);
exports.AccountHighlightsComponent = AccountHighlightsComponent;
//# sourceMappingURL=account-highlights.component.js.map