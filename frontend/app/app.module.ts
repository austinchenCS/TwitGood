import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
 imports: [ BrowserModule, FormsModule, HttpModule ],
 declarations: [ AppComponent, FrontpageComponent ],
 bootstrap: [ AppComponent ]
})
export class AppModule {
}