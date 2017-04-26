import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LandingComponent } from './landing/landing.component';
import * as Account from './account/index';

export const routes: Routes = [
  { path: '', component: FrontpageComponent, pathMatch: 'full' },
  { path: 'home', component: LandingComponent,
    children: [
      { path: '', component: Account.AccountHomeComponent, pathMatch: 'full' },
      { path: 'summary/:handle', component: Account.AccountSummaryComponent },
      { path: 'statistics/:handle', component: Account.AccountStatisticsComponent },
      { path: 'engagement/:handle', component: Account.AccountEngagementComponent },
      { path: 'highlights/:handle', component: Account.AccountHighlightsComponent }
    ]
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);