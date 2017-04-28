import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ValidationComponent } from './validation/validation.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  imports: [ BrowserModule, ChartsModule ],
  declarations: [ BarChartComponent, ValidationComponent ],
  exports: [ BarChartComponent, ValidationComponent ]
})

export class SharedModule { }