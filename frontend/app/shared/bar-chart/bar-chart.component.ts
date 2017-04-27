import { Component, Input, OnInit, OnChanges } from '@angular/core';
 
@Component({
  moduleId: module.id,
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent {
  @Input() data : Array<number>;
  @Input() bCL : Array<string>;
  @Input() chartLabel : string;
  
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
  }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    //showLines: false,
    backgroundColor: 'fillPattern'
  };
  public barChartLabels:string[]; //= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','10','11'];
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