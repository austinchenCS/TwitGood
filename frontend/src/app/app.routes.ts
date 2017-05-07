import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LandingComponent } from './landing/landing.component';
import * as Account from './account/index';

export const routes: Routes = [
  { path: '', component: FrontpageComponent, pathMatch: 'full' },
  { path: 'home', component: LandingComponent,
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      { path: 'summary', component: Account.AccountSummaryComponent },
      { path: 'detail', component: Account.AccountDetailComponent },
      { path: 'engagement', component: Account.AccountEngagementComponent }
    ]
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);