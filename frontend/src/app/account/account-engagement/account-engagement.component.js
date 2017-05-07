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
const user_repository_1 = require("../../api/user-repository");
const core_1 = require("@angular/core");
const user_1 = require("../../api/user");
const router_1 = require("@angular/router");
let AccountEngagementComponent = class AccountEngagementComponent {
    constructor(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.days = ['S', 'M', 'T', 'W', 'Th', 'F', 'S'];
        this.hoursNum = Array.from(Array(24)).map((e, i) => i);
        this.colorsActivity = [{
                backgroundColor: '#70cbf9',
                hoverBackgroundColor: '#00a7f1'
            }];
        this.colorsSuccess = [{
                backgroundColor: '#f4ee3e',
                hoverBackgroundColor: '#f2d600'
            }];
    }
    ngOnInit() {
        this.hours = new Array(this.hoursNum.length);
        for (var i = 0; i < this.hours.length; i++) {
            this.hours[i] = (i % 12 || 12).toString() + (Math.floor(i / 12) ? 'PM' : 'AM');
        }
        this.user = new user_1.User(this.userService.getUser());
        this.user.hourlysuccess = [35, 6, 2, 8, 10, 5, 20, 3, 8, 12, 50, 51, 64]; //Placeholders
        this.user.hourlyactivity = [35, 6, 2, 8, 10, 5, 20, 3, 8, 12, 50, 51, 64];
        this.user.weeklysuccess = [35, 6, 2, 8, 10, 5, 20, 3, 8, 12, 50, 51, 64];
        this.user.weeklyactivity = [35, 6, 2, 8, 10, 5, 20, 3, 8, 12, 50, 51, 64];
        this.userService.getUserData(this.user.twitterHandle).subscribe((data) => {
            this.userData = data,
                this.user.hourlysuccess = this.userData.hourlysuccess,
                this.user.hourlyactivity = this.userData.hourlyactivity,
                this.user.weeklysuccess = this.userData.weeklysuccess,
                this.user.weeklyactivity = this.userData.weeklyactivity;
        });
    }
};
AccountEngagementComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'account-engagement',
        templateUrl: 'account-engagement.component.html',
        styleUrls: ['account-engagement.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        user_repository_1.UserRepository])
], AccountEngagementComponent);
exports.AccountEngagementComponent = AccountEngagementComponent;
//# sourceMappingURL=account-engagement.component.js.map