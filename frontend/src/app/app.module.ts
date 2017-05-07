import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routing, appRoutingProviders } from './app.routes';
import * as Account from './account/index';
import * as Shared from './shared/index';
import { LandingComponent } from './landing/landing.component';
import { LoadingAnimateModule, LoadingAnimateService } from 'ng2-loading-animate';
import { UserRepository } from './api/user-repository';

@NgModule({
 imports: [ BrowserModule,
            FormsModule,
            HttpModule,
            RouterModule,
            Account.AccountModule,
            Shared.SharedModule,
            LoadingAnimateModule.forRoot(),
            routing ],
 declarations: [ AppComponent, FrontpageComponent, LandingComponent ],
 providers: [ appRoutingProviders, LoadingAnimateService, UserRepository],
 bootstrap: [ AppComponent ]
})
export class AppModule {
}