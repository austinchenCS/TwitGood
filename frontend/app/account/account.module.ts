import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FrontpageComponent } from './../frontpage/frontpage.component'
import { UserRepository } from './api/user-repository';

import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { AccountHighlightsComponent } from './account-highlights/account-highlights.component';
import { AccountStatisticsComponent } from './account-statistics/account-statistics.component';
import { AccountEngagementComponent } from './account-engagement/account-engagement.component';
import { AccountHomeComponent } from './account-home/account-home.component';

import * as Shared from '../shared/index';

@NgModule({
  imports:      [ 
    BrowserModule,
    Shared.SharedModule,
    HttpModule
  ],
  declarations: [
    AccountSummaryComponent,
    AccountHighlightsComponent,
    AccountStatisticsComponent,
    AccountEngagementComponent,
    AccountHomeComponent
   ],
  exports: [
    AccountSummaryComponent,
    AccountHighlightsComponent,
    AccountStatisticsComponent,
    AccountEngagementComponent,
    AccountHomeComponent
  ],
  providers: [UserRepository]
})

export class AccountModule { }