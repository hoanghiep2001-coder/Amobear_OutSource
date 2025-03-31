"use strict";
cc._RF.push(module, '11c87Vq+19Pa58eUEttW5Fu', 'MatchEffect');
// scripts/effect/MatchEffect.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MatchEffect = /** @class */ (function (_super) {
    __extends(MatchEffect, _super);
    function MatchEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchEffect.prototype.start = function () {
        cc.tween(this.star)
            .to(0.5, {
            opacity: 0,
            position: new cc.Vec3(0, 20, 0),
            scale: 1.2,
        })
            .start();
        cc.tween(this.star_2)
            .to(0.5, { scale: 1.3 }, { easing: cc.easing.elasticOut })
            .to(0.5, { scale: 0, opacity: 0 }, { easing: cc.easing.sineIn })
            .start();
        cc.tween(this.circle)
            .to(0.25, { opacity: 255, scale: 1 }, { easing: cc.easing.elasticOut })
            .to(0.25, { opacity: 0, scale: 1.5 }, { easing: cc.easing.sineIn })
            .start();
        cc.tween(this.glow)
            .to(1, {
            rotation: -360,
            opacity: 0,
        }, { easing: "quadOut" })
            // .to(1.5, {
            //   opacity: 0,
            // })
            // .union()
            .start();
    };
    __decorate([
        property(cc.Node)
    ], MatchEffect.prototype, "star", void 0);
    __decorate([
        property(cc.Node)
    ], MatchEffect.prototype, "glow", void 0);
    __decorate([
        property(cc.Node)
    ], MatchEffect.prototype, "star_2", void 0);
    __decorate([
        property(cc.Node)
    ], MatchEffect.prototype, "circle", void 0);
    MatchEffect = __decorate([
        ccclass
    ], MatchEffect);
    return MatchEffect;
}(cc.Component));
exports.default = MatchEffect;

cc._RF.pop();