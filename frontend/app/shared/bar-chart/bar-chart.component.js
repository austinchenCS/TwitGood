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
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
    }
    ngOnInit() {
        this.vector = this.model;
        this.barChartData = [
            { data: this.vector, label: 'Series A' },
            { data: this.model, label: 'Series B' }
        ];
    }
    // events
    chartClicked(e) {
        console.log(e);
        console.log(this.model.length);
    }
    chartHovered(e) {
        console.log(e);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BarChartComponent.prototype, "model", void 0);
BarChartComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bar-chart',
        templateUrl: './bar-chart.component.html',
    })
], BarChartComponent);
exports.BarChartComponent = BarChartComponent;
//# sourceMappingURL=bar-chart.component.js.map