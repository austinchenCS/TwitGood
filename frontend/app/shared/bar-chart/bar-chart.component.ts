import { Component, Input, OnInit } from '@angular/core';
 
@Component({
  moduleId: module.id,
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent {
  @Input() model : Array<number>;
  vector : Array<number>;
  
  ngOnInit(){
    this.vector = this.model;
    this.barChartData = [
    {data: this.vector, label: 'Series A'},
    {data: this.model, label: 'Series B'}
  ];
  }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','10','11'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
    console.log(this.model.length);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}