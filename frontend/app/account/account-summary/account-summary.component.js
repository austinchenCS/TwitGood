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
//import { UserData } from '../api/user-data';
const router_1 = require("@angular/router");
let AccountSummaryComponent = class AccountSummaryComponent {
    constructor(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.xAxisLabels = ['S', 'M', 'T', 'W', 'Th', 'F', 'S']; //= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12','13','14','15','16','17',''];
        this.hours = Array.from(Array(24)).map((e, i) => i);
        this.chartTitle = 'Tweet Success by Days';
    }
    ngOnInit() {
        this.xAxisLabels = new Array(this.hours.length);
        for (var i = 0; i < 24; i++) {
            this.xAxisLabels[i] = (i % 12 || 12).toString() + (Math.floor(i / 12) ? 'PM' : 'AM');
            this.user = new user_1.User('twitgood');
            this.user.weeklysuccess = [35, 6, 2, 8, 10, 5, 20, 3, 8, 12, 50, 51, 64]; //Placeholders
            this.user.topwords = ['35', '6'];
            this.userService.getUserData(this.user.twitterHandle).subscribe((data) => {
                this.userData = data,
                    this.user.weeklysuccess = this.userData.weeklysuccess,
                    this.user.topwords = this.userData.topwords,
                    this.user.top_successful_tweet = this.userData.top_successful_tweet;
            });
        }
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
        user_repository_1.UserRepository])
], AccountSummaryComponent);
exports.AccountSummaryComponent = AccountSummaryComponent;
//# sourceMappingURL=account-summary.component.js.map