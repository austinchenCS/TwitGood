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
const login_details_1 = require("../api/login-details");
const http_1 = require("@angular/http");
const router_1 = require("@angular/router");
require("rxjs/add/operator/toPromise");
let FrontpageComponent = class FrontpageComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.loginFail = false;
        this.loginUrl = 'http://private-17592-twitgood.apiary-mock.com/users/auth';
        this.createUrl = 'https://private-17592-twitgood.apiary-mock.com/user/';
        this.create = false;
        this.details = new login_details_1.LoginDetails(false);
    }
    ;
    createFlip() {
        this.create = !this.create;
        this.details = new login_details_1.LoginDetails(this.create);
    }
    accountInteraction() {
        if (this.create) {
            this.http
                .post(this.createUrl, this.details)
                .toPromise()
                .then(x => this.validateResult(x.json()))
                .catch(x => x.message);
        }
        else {
            this.http
                .post(this.loginUrl, this.details)
                .toPromise()
                .then(x => this.validateResult(x.json()))
                .catch(x => x.message);
        }
    }
    validateResult(result) {
        console.log(result);
        if (result.success) {
            this.goToAccount(result.handle);
        }
        else {
            this.loginFail = true;
        }
    }
    goToAccount(handle) {
        console.log(handle);
        this.router.navigate(['summary/' + handle]);
    }
};
FrontpageComponent = __decorate([
    core_1.Component({
        selector: 'frontpage',
        templateUrl: './app/frontpage/frontpage.component.html',
        styleUrls: ['./app/frontpage/frontpage.component.css'],
    }),
    __metadata("design:paramtypes", [http_1.Http,
        router_1.Router])
], FrontpageComponent);
exports.FrontpageComponent = FrontpageComponent;
//# sourceMappingURL=frontpage.component.js.map