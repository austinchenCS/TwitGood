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
const user_1 = require("../api/user");
const router_1 = require("@angular/router");
const platform_browser_1 = require("@angular/platform-browser");
const ng2_loading_animate_1 = require("ng2-loading-animate");
let AccountSummaryComponent = class AccountSummaryComponent {
    constructor(router, route, userService, sanitizer, elementRef, _loadingSvc) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.elementRef = elementRef;
        this._loadingSvc = _loadingSvc;
        this.xAxisLabels = ['S', 'M', 'T', 'W', 'Th', 'F', 'S'];
        this.hours = Array.from(Array(24)).map((e, i) => i);
        this.chartTitle = 'Tweet Success by Days';
    }
    ngOnInit() {
        this.route.parent.params.subscribe(x => {
            this.user = new user_1.User(x['handle']);
            console.log(this.user);
        });
        this.user.weeklysuccess = [35, 6, 2, 8, 10, 5, 20, 3, 8, 12, 50, 51, 64]; //Placeholders
        this.user.topwords = ['35', '6'];
        setTimeout(() => {
            this.userService.getUserData(this.user.twitterHandle).subscribe((data) => {
                this.userData = data,
                    this.user.weeklysuccess = this.userData.weeklysuccess,
                    this.user.topwords = this.userData.topwords,
                    this.user.top_successful_tweet = this.userData.top_successful_tweet,
                    this.tweetHTML = this.sanitizer.bypassSecurityTrustHtml(this.addCenterAlignmentToTweet(this.user.top_successful_tweet)),
                    this.insertScript(),
                    this.stop();
            });
        }, 2000);
    }
    ngAfterViewInit() {
    }
    insertScript() {
        var s = document.createElement("script");
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
    stop() {
        this._loadingSvc.setValue(false);
    }
};
AccountSummaryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'account-summary',
        templateUrl: 'account-summary.component.html',
        styleUrls: ['account-summary.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        user_repository_1.UserRepository,
        platform_browser_1.DomSanitizer,
        core_1.ElementRef,
        ng2_loading_animate_1.LoadingAnimateService])
], AccountSummaryComponent);
exports.AccountSummaryComponent = AccountSummaryComponent;
//# sourceMappingURL=account-summary.component.js.map