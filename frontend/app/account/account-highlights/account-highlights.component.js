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
let AccountHighlightsComponent = class AccountHighlightsComponent {
    //user: User = new User("@johndoe",3,316,"../../images/Profile\ Picture.png");
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ;
};
AccountHighlightsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'account-highlights',
        templateUrl: 'account-highlights.component.html',
        styleUrls: ['account-highlights.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], AccountHighlightsComponent);
exports.AccountHighlightsComponent = AccountHighlightsComponent;
//# sourceMappingURL=account-highlights.component.js.map