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
const forms_1 = require("@angular/forms");
let ValueMatchDirective = ValueMatchDirective_1 = class ValueMatchDirective {
    constructor() {
        console.log(this);
    }
    validate(c) {
        return { "matching": false };
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ValueMatchDirective.prototype, "compare", void 0);
ValueMatchDirective = ValueMatchDirective_1 = __decorate([
    core_1.Directive({
        selector: 'value-match',
        providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(() => ValueMatchDirective_1), multi: true }]
    }),
    __metadata("design:paramtypes", [])
], ValueMatchDirective);
exports.ValueMatchDirective = ValueMatchDirective;
var ValueMatchDirective_1;
//# sourceMappingURL=value-match.directive.js.map