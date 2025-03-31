
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScaleEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NhbGVFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlDLCtCQUFZO0lBQTdDO1FBQUEscUVBK0JDO1FBN0JRLGVBQVMsR0FBRyxHQUFHLENBQUM7O0lBNkJ6QixDQUFDO0lBM0JDLDJCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFDRSxvQ0FBb0M7UUFDcEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7UUFFZix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBRzFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNoQixhQUFhLENBQ1osRUFBRTthQUNDLEtBQUssRUFBRTthQUNQLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7YUFDbkQsSUFBSSxDQUNILEVBQUU7YUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNoQixFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQ3pELENBQ0o7YUFDQSxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUE1QkQ7UUFEQyxRQUFRO2tEQUNjO0lBRlosV0FBVztRQUR2QixPQUFPO09BQ0ssV0FBVyxDQStCdkI7SUFBRCxrQkFBQztDQS9CRCxBQStCQyxDQS9CZ0MsRUFBRSxDQUFDLFNBQVMsR0ErQjVDO0FBL0JZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBTY2FsZUVmZmVjdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5XHJcbiAgcHVibGljIHNjYWxlU2l6ZSA9IDEuMTtcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLlN0YXJ0RWZmZWN0KCk7XHJcbiAgfVxyXG5cclxuICBTdGFydEVmZmVjdCgpIHtcclxuICAgIC8vIGxldCBzdGFydFNjYWxlID0gdGhpcy5ub2RlLnNjYWxlO1xyXG4gICAgbGV0IHVwU2NhbGUgPSAxLjM1O1xyXG4gICAgbGV0IGRvd25TY2FsZSA9IDEuMztcclxuICAgIGxldCB0aW1lID0gMC41O1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHVwU2NhbGUpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZG93blNjYWxlKTtcclxuICAgIFxyXG5cclxuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgY2NcclxuICAgICAgICAgIC50d2VlbigpXHJcbiAgICAgICAgICAudG8odGltZSwgeyBzY2FsZTogdXBTY2FsZSB9LCB7IGVhc2luZzogXCJzaW5lT3V0XCIgfSlcclxuICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICBjY1xyXG4gICAgICAgICAgICAgIC50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgLnRvKHRpbWUsIHsgc2NhbGU6IGRvd25TY2FsZSB9LCB7IGVhc2luZzogXCJzaW5lT3V0XCIgfSlcclxuICAgICAgICAgIClcclxuICAgICAgKVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcbn1cclxuIl19