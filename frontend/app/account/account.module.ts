import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { FrontpageComponent } from './../frontpage/frontpage.component'

import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { AccountHighlightsComponent } from './account-highlights/account-highlights.component';
import { AccountStatisticsComponent } from './account-statistics/account-statistics.component';
import { AccountEngagementComponent } from './account-engagement/account-engagement.component';

import * as Shared from '../shared/index';

var routes = [
  {
    path: '',
    component: FrontpageComponent
  },
  {
    path: 'summary',
    component: AccountSummaryComponent
  },
  {
    path: 'statistics',
    component: AccountStatisticsComponent
  },
  {
    path: 'engagement',
    component: AccountEngagementComponent
  },
  {
    path: 'highlights',
    component: AccountHighlightsComponent
  },
  
];
@NgModule({
  imports:      [ 
    BrowserModule,
    Shared.SharedModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AccountSummaryComponent,
    AccountHighlightsComponent,
    AccountStatisticsComponent,
    AccountEngagementComponent
   ],
  exports: [
    AccountSummaryComponent,
    AccountHighlightsComponent,
    AccountStatisticsComponent,
    AccountEngagementComponent
  ]
})

export class AccountModule { }