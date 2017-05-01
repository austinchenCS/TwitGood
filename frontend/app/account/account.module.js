"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/http");
const user_repository_1 = require("./api/user-repository");
const account_summary_component_1 = require("./account-summary/account-summary.component");
const account_highlights_component_1 = require("./account-highlights/account-highlights.component");
const account_detail_component_1 = require("./account-detail/account-detail.component");
const account_engagement_component_1 = require("./account-engagement/account-engagement.component");
const account_home_component_1 = require("./account-home/account-home.component");
const Shared = require("../shared/index");
let AccountModule = class AccountModule {
};
AccountModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            Shared.SharedModule,
            http_1.HttpModule
        ],
        declarations: [
            account_summary_component_1.AccountSummaryComponent,
            account_highlights_component_1.AccountHighlightsComponent,
            account_detail_component_1.AccountDetailComponent,
            account_engagement_component_1.AccountEngagementComponent,
            account_home_component_1.AccountHomeComponent
        ],
        exports: [
            account_summary_component_1.AccountSummaryComponent,
            account_highlights_component_1.AccountHighlightsComponent,
            account_detail_component_1.AccountDetailComponent,
            account_engagement_component_1.AccountEngagementComponent,
            account_home_component_1.AccountHomeComponent
        ],
        providers: [user_repository_1.UserRepository]
    })
], AccountModule);
exports.AccountModule = AccountModule;
//# sourceMappingURL=account.module.js.map