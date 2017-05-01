import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ValidationComponent } from './validation/validation.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ValueMatchDirective } from './value-match/value-match.directive';
import { EscapeHtmlPipe } from './escape-html.pipe';

@NgModule({
  imports: [ BrowserModule, ChartsModule ],
  declarations: [ BarChartComponent, ValidationComponent, ValueMatchDirective, EscapeHtmlPipe ],
  exports: [ BarChartComponent, ValidationComponent, ValueMatchDirective, EscapeHtmlPipe ]
})

export class SharedModule { }