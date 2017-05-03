import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Color } from 'ng2-charts/ng2-charts';
 
@Component({
  moduleId: module.id,
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent {
  @Input() data : Array<number>;
  @Input() bCL : Array<string>;
  @Input() chartLabel : string;
  @Input() colorsInput: Array<Color>;
  
  ngOnChanges(){
    this.barChartData = [
      {data: this.data, label: this.chartLabel},
    ];
  }
  ngOnInit(){
    this.barChartData = [
      {data: this.data, label: this.chartLabel},
    ];
    this.barChartLabels = this.bCL;
    
    if(this.colorsInput)
      this.colorsOverride = this.colorsInput;
  }
  colorsOverride: Array<Color> = [{
    backgroundColor: '#82d9cd',
    hoverBackgroundColor: '#21b4a4'
  }];
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    backgroundColor: 'fillPattern'
  };
  public barChartLabels:string[];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
    console.log(this);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}