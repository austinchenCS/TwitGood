"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const ng2_charts_1 = require("ng2-charts/ng2-charts");
const validation_component_1 = require("./validation/validation.component");
const bar_chart_component_1 = require("./bar-chart/bar-chart.component");
const value_match_directive_1 = require("./value-match/value-match.directive");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, ng2_charts_1.ChartsModule],
        declarations: [bar_chart_component_1.BarChartComponent, validation_component_1.ValidationComponent, value_match_directive_1.ValueMatchDirective],
        exports: [bar_chart_component_1.BarChartComponent, validation_component_1.ValidationComponent, value_match_directive_1.ValueMatchDirective]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map