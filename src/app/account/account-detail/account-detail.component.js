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
const user_1 = require("../api/user");
const user_repository_1 = require("./../api/user-repository");
let AccountDetailComponent = class AccountDetailComponent {
    constructor(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
    }
    ngOnInit() {
        this.router.routerState.parent(this.route).params.subscribe(x => {
            this.user = new user_1.User(x['handle']);
            console.log(this.user);
        });
        this.userService.getUserData(this.user.twitterHandle).subscribe((data) => {
            this.userData = data,
                this.user.accountage = this.userData.accountage,
                this.user.tophashtags = this.userData.tophashtags,
                this.user.topwords = this.userData.topwords;
        });
    }
};
AccountDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'account-detail',
        templateUrl: 'account-detail.component.html',
        styleUrls: ['account-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        user_repository_1.UserRepository])
], AccountDetailComponent);
exports.AccountDetailComponent = AccountDetailComponent;
//# sourceMappingURL=account-detail.component.js.map