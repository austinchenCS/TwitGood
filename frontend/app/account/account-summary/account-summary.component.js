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
const user_1 = require("../api/user");
const router_1 = require("@angular/router");
let AccountSummaryComponent = class AccountSummaryComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.user = new user_1.User("@johndoe", 3, 316, "../../images/Profile\ Picture.png");
        this.xAxisLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
        this.chartTitle = 'Hourly Tweeting';
    }
};
AccountSummaryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'account-summary',
        templateUrl: 'account-summary.component.html',
        styleUrls: ['account-summary.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute])
], AccountSummaryComponent);
exports.AccountSummaryComponent = AccountSummaryComponent;
//# sourceMappingURL=account-summary.component.js.map