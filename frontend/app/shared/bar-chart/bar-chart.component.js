"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let BarChartComponent = class BarChartComponent {
    constructor() {
        this.colorsOverride = [{
                backgroundColor: '#82d9cd',
                hoverBackgroundColor: '#21b4a4'
            }];
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            backgroundColor: 'fillPattern'
        };
        this.barChartType = 'bar';
        this.barChartLegend = true;
    }
    ngOnChanges() {
        this.barChartData = [
            { data: this.data, label: this.chartLabel },
        ];
    }
    ngOnInit() {
        this.barChartData = [
            { data: this.data, label: this.chartLabel },
        ];
        this.barChartLabels = this.bCL;
    }
    // events
    chartClicked(e) {
        console.log(e);
        console.log(this);
    }
    chartHovered(e) {
        console.log(e);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BarChartComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BarChartComponent.prototype, "bCL", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BarChartComponent.prototype, "chartLabel", void 0);
BarChartComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bar-chart',
        templateUrl: './bar-chart.component.html',
    })
], BarChartComponent);
exports.BarChartComponent = BarChartComponent;
//# sourceMappingURL=bar-chart.component.js.map