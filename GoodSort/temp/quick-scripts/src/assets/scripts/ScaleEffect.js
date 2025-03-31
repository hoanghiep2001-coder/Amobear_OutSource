"use strict";
cc._RF.push(module, 'c5b75gyUB9GMKmg7DduQ0Al', 'ScaleEffect');
// scripts/ScaleEffect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaleEffect = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScaleEffect = /** @class */ (function (_super) {
    __extends(ScaleEffect, _super);
    function ScaleEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scaleSize = 1.1;
        return _this;
    }
    ScaleEffect.prototype.start = function () {
        this.StartEffect();
    };
    ScaleEffect.prototype.StartEffect = function () {
        // let startScale = this.node.scale;
        var upScale = 1.35;
        var downScale = 1.3;
        var time = 0.5;
        // console.log(upScale);
        // console.log(downScale);
        cc.tween(this.node)
            .repeatForever(cc
            .tween()
            .to(time, { scale: upScale }, { easing: "sineOut" })
            .then(cc
            .tween(this.node)
            .to(time, { scale: downScale }, { easing: "sineOut" })))
            .start();
    };
    __decorate([
        property
    ], ScaleEffect.prototype, "scaleSize", void 0);
    ScaleEffect = __decorate([
        ccclass
    ], ScaleEffect);
    return ScaleEffect;
}(cc.Component));
exports.ScaleEffect = ScaleEffect;

cc._RF.pop();