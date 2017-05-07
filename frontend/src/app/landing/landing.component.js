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
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const http_1 = require("@angular/http");
const ng2_loading_animate_1 = require("ng2-loading-animate");
const user_repository_1 = require("../api/user-repository");
let LandingComponent = class LandingComponent {
    constructor(router, route, http, userService, _loadingSvc) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.userService = userService;
        this._loadingSvc = _loadingSvc;
        this.userDataUrl = "https://private-17592-twitgood.apiary-mock.com/user/info/";
        this.handle = this.userService.getUser();
        if (this.userService.getCreated()) {
            //this.start();
        }
        this.http
            .get(this.userDataUrl + this.handle)
            .toPromise()
            .then(x => {
            this.imageSource = x.json().image_profile;
        })
            .catch(x => x.message);
    }
    start() {
        this._loadingSvc.setValue(true);
    }
    ngOnInit() {
        if (!this.userService.getLoginStatus()) {
            console.log(this.userService.getLoginStatus());
            this.router.navigate([""]);
        }
    }
    terminateSession() {
        this.userService.logout();
        this.router.navigateByUrl('/');
    }
};
LandingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'landing',
        templateUrl: 'landing.component.html',
        styleUrls: ['landing.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        http_1.Http,
        user_repository_1.UserRepository,
        ng2_loading_animate_1.LoadingAnimateService])
], LandingComponent);
exports.LandingComponent = LandingComponent;
//# sourceMappingURL=landing.component.js.map