"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const frontpage_component_1 = require("./frontpage/frontpage.component");
const landing_component_1 = require("./landing/landing.component");
const Account = require("./account/index");
exports.routes = [
    { path: '', component: frontpage_component_1.FrontpageComponent, pathMatch: 'full' },
    { path: 'home/:handle', component: landing_component_1.LandingComponent,
        children: [
            { path: '', component: Account.AccountHomeComponent, pathMatch: 'full' },
            { path: 'summary', component: Account.AccountSummaryComponent },
            { path: 'statistics', component: Account.AccountStatisticsComponent },
            { path: 'engagement', component: Account.AccountEngagementComponent },
            { path: 'highlights', component: Account.AccountHighlightsComponent }
        ]
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map