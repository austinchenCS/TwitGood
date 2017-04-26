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
const router_1 = require("@angular/router");
const frontpage_component_1 = require("./../frontpage/frontpage.component");
const account_summary_component_1 = require("./account-summary/account-summary.component");
const account_highlights_component_1 = require("./account-highlights/account-highlights.component");
const account_statistics_component_1 = require("./account-statistics/account-statistics.component");
const account_engagement_component_1 = require("./account-engagement/account-engagement.component");
const Shared = require("../shared/index");
var routes = [
    {
        path: '',
        component: frontpage_component_1.FrontpageComponent
    },
    {
        path: 'summary/:handle',
        component: account_summary_component_1.AccountSummaryComponent
    },
    {
        path: 'statistics/:handle',
        component: account_statistics_component_1.AccountStatisticsComponent
    },
    {
        path: 'engagement/:handle',
        component: account_engagement_component_1.AccountEngagementComponent
    },
    {
        path: 'highlights/:handle',
        component: account_highlights_component_1.AccountHighlightsComponent
    },
];
let AccountModule = class AccountModule {
};
AccountModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            Shared.SharedModule,
            router_1.RouterModule.forRoot(routes),
        ],
        declarations: [
            account_summary_component_1.AccountSummaryComponent,
            account_highlights_component_1.AccountHighlightsComponent,
            account_statistics_component_1.AccountStatisticsComponent,
            account_engagement_component_1.AccountEngagementComponent
        ],
        exports: [
            account_summary_component_1.AccountSummaryComponent,
            account_highlights_component_1.AccountHighlightsComponent,
            account_statistics_component_1.AccountStatisticsComponent,
            account_engagement_component_1.AccountEngagementComponent
        ]
    })
], AccountModule);
exports.AccountModule = AccountModule;
//# sourceMappingURL=account.module.js.map