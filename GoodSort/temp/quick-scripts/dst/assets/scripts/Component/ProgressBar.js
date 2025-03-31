
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Component/ProgressBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f137DmDLJAz5N5aYgmgbny', 'ProgressBar');
// scripts/Component/ProgressBar.ts

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
exports.ProgressBar = void 0;
var GameConfig_1 = require("../config/GameConfig");
var SoundController_1 = require("../Controller/SoundController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ProgressSprite = null;
        _this.fxs = [];
        _this._fillRange = 0;
        _this._fillTimes = 0;
        return _this;
    }
    ProgressBar_1 = ProgressBar;
    Object.defineProperty(ProgressBar, "Instance", {
        get: function () {
            var _a;
            if (this._instance == null) {
                this._instance = (_a = cc.director
                    .getScene()) === null || _a === void 0 ? void 0 : _a.getComponentInChildren(ProgressBar_1);
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    ProgressBar.prototype.start = function () {
    };
    ProgressBar.prototype.fillRangeProgress = function () {
        var _this = this;
        this._fillRange += 0.3333;
        cc.tween(this.ProgressSprite)
            .to(0.2, { fillRange: this._fillRange }, { easing: cc.easing.sineIn })
            .call(function () {
            console.log("fill progress");
            if (_this._fillTimes < 2) {
                var fx = _this.fxs[_this._fillTimes];
                _this.activeFX(fx);
            }
            _this._fillTimes += 1;
            if (_this._fillRange >= 0.9) {
                GameConfig_1.ConfigData.Game.isWin = true;
                SoundController_1.SoundController.Instance(SoundController_1.SoundController).playDefaultSound(SoundController_1.DefaultSoundTrack.WinSound);
            }
        })
            .start();
    };
    ProgressBar.prototype.activeFX = function (fx) {
        fx.active = true;
        var circle = fx.children[0];
        var star = fx.children[1];
        cc.tween(star)
            .to(0.25, { scale: 1.3, opacity: 255 }, { easing: cc.easing.elasticOut })
            .to(0.25, { scale: 0, opacity: 0 }, { easing: cc.easing.elasticIn })
            .start();
        cc.tween(circle)
            .to(0.25, { opacity: 255, scale: 1 }, { easing: cc.easing.elasticOut })
            .to(0.25, { opacity: 0, scale: 1.5 }, { easing: cc.easing.sineIn })
            .start();
    };
    var ProgressBar_1;
    ProgressBar._instance = null;
    __decorate([
        property(cc.Sprite)
    ], ProgressBar.prototype, "ProgressSprite", void 0);
    __decorate([
        property([cc.Node])
    ], ProgressBar.prototype, "fxs", void 0);
    ProgressBar = ProgressBar_1 = __decorate([
        ccclass,
        menu('Component/ProgressBar')
    ], ProgressBar);
    return ProgressBar;
}(cc.Component));
exports.ProgressBar = ProgressBar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29tcG9uZW50XFxQcm9ncmVzc0Jhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELGlFQUFtRjtBQUU3RSxJQUFBLEtBQThCLEVBQUUsQ0FBQyxVQUFVLEVBQXpDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQUlsRDtJQUFpQywrQkFBWTtJQUE3QztRQUFBLHFFQTZEQztRQWhERyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyxTQUFHLEdBQWMsRUFBRSxDQUFDO1FBT3BCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDOztJQXFDM0IsQ0FBQztvQkE3RFksV0FBVztJQUdwQixzQkFBVyx1QkFBUTthQUFuQjs7WUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQUEsRUFBRSxDQUFDLFFBQVE7cUJBQ3ZCLFFBQVEsRUFBRSwwQ0FDVCxzQkFBc0IsQ0FBQyxhQUFXLENBQWdCLENBQUM7YUFDNUQ7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFTUywyQkFBSyxHQUFmO0lBRUEsQ0FBQztJQUlNLHVDQUFpQixHQUF4QjtRQUFBLGlCQWlCQztRQWhCRyxJQUFJLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQztRQUMxQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDeEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNyRSxJQUFJLENBQUM7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdCLElBQUksS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JCLElBQU0sRUFBRSxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNyQyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3JCO1lBQ0QsS0FBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7WUFDckIsSUFBSSxLQUFJLENBQUMsVUFBVSxJQUFJLEdBQUcsRUFBRTtnQkFDeEIsdUJBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDN0IsaUNBQWUsQ0FBQyxRQUFRLENBQUMsaUNBQWUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLG1DQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzFGO1FBQ0wsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUdPLDhCQUFRLEdBQWhCLFVBQWlCLEVBQVc7UUFDeEIsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2FBQ2IsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDeEUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbkUsS0FBSyxFQUFFLENBQUM7UUFFVCxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUNmLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3RFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2xFLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7SUF6RE0scUJBQVMsR0FBdUIsSUFBSSxDQUFDO0lBVzVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ2E7SUFHakM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7NENBQ0E7SUFoQlgsV0FBVztRQUZ2QixPQUFPO1FBQ1AsSUFBSSxDQUFDLHVCQUF1QixDQUFDO09BQ2pCLFdBQVcsQ0E2RHZCO0lBQUQsa0JBQUM7Q0E3REQsQUE2REMsQ0E3RGdDLEVBQUUsQ0FBQyxTQUFTLEdBNkQ1QztBQTdEWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ0RhdGEgfSBmcm9tIFwiLi4vY29uZmlnL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IHsgRGVmYXVsdFNvdW5kVHJhY2ssIFNvdW5kQ29udHJvbGxlciB9IGZyb20gXCIuLi9Db250cm9sbGVyL1NvdW5kQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbkBtZW51KCdDb21wb25lbnQvUHJvZ3Jlc3NCYXInKVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXRpYyBfaW5zdGFuY2U6IFByb2dyZXNzQmFyIHwgbnVsbCA9IG51bGw7XHJcbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCk6IFByb2dyZXNzQmFyIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IGNjLmRpcmVjdG9yXHJcbiAgICAgICAgICAgICAgICAuZ2V0U2NlbmUoKVxyXG4gICAgICAgICAgICAgICAgPy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFByb2dyZXNzQmFyKSBhcyBQcm9ncmVzc0JhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBQcm9ncmVzc1Nwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgZnhzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBfZmlsbFJhbmdlOiBudW1iZXIgPSAwO1xyXG4gICAgX2ZpbGxUaW1lczogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBmaWxsUmFuZ2VQcm9ncmVzcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9maWxsUmFuZ2UgKz0gMC4zMzMzO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuUHJvZ3Jlc3NTcHJpdGUpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHsgZmlsbFJhbmdlOiB0aGlzLl9maWxsUmFuZ2UgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW4gfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaWxsIHByb2dyZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2ZpbGxUaW1lcyA8IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmeCA9IHRoaXMuZnhzW3RoaXMuX2ZpbGxUaW1lc107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVGWChmeCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maWxsVGltZXMgKz0gMTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9maWxsUmFuZ2UgPj0gMC45KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlnRGF0YS5HYW1lLmlzV2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBTb3VuZENvbnRyb2xsZXIuSW5zdGFuY2UoU291bmRDb250cm9sbGVyKS5wbGF5RGVmYXVsdFNvdW5kKERlZmF1bHRTb3VuZFRyYWNrLldpblNvdW5kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgYWN0aXZlRlgoZng6IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgICAgICBmeC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGNpcmNsZSA9IGZ4LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgIGNvbnN0IHN0YXIgPSBmeC5jaGlsZHJlblsxXTtcclxuICAgICAgICBcclxuICAgICAgICBjYy50d2VlbihzdGFyKVxyXG4gICAgICAgIC50bygwLjI1LCB7IHNjYWxlOiAxLjMsIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmVsYXN0aWNPdXQgfSlcclxuICAgICAgICAudG8oMC4yNSwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmVsYXN0aWNJbiB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gIFxyXG4gICAgICAgIGNjLnR3ZWVuKGNpcmNsZSlcclxuICAgICAgICAudG8oMC4yNSwgeyBvcGFjaXR5OiAyNTUsIHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuZWxhc3RpY091dCB9KVxyXG4gICAgICAgIC50bygwLjI1LCB7IG9wYWNpdHk6IDAsIHNjYWxlOiAxLjUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW4gfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19