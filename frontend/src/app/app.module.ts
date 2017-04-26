import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import * as Account from './account/index';
import * as Shared from './shared/index';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent, 
    FrontpageComponent, 
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    Account.AccountModule,
    Shared.SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
