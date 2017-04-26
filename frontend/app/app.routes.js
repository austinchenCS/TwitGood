"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const frontpage_component_1 = require("./frontpage/frontpage.component");
const landing_component_1 = require("./landing/landing.component");
const Account = require("./account/index");
exports.routes = [
    { path: '', component: frontpage_component_1.FrontpageComponent, pathMatch: 'full' },
    { path: 'home', component: landing_component_1.LandingComponent,
        children: [
            { path: '', component: Account.AccountHomeComponent, pathMatch: 'full' },
            { path: 'summary/:handle', component: Account.AccountSummaryComponent },
            { path: 'statistics/:handle', component: Account.AccountStatisticsComponent },
            { path: 'engagement/:handle', component: Account.AccountEngagementComponent },
            { path: 'highlights/:handle', component: Account.AccountHighlightsComponent }
        ]
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map