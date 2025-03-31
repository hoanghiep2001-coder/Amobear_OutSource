
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Component/TimeCount.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07195hY0adABKUOrChkM6cI', 'TimeCount');
// scripts/Component/TimeCount.ts

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
exports.TimeCount = void 0;
var GameConfig_1 = require("../config/GameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var TimeCount = /** @class */ (function (_super) {
    __extends(TimeCount, _super);
    function TimeCount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timeCount = 0;
        _this.countdownLabel = null;
        // @property(cc.Node)
        // warningLayout: cc.Node = null;
        _this.timeLeft = 0;
        _this.progress = 1;
        _this._isActiveTimeCount = false;
        return _this;
    }
    TimeCount.prototype.start = function () {
        this.progress = 1.0;
        this.timeLeft = this.timeCount;
        // this.updateTimeFillProgress();
    };
    TimeCount.prototype.activeTime = function () {
        this._isActiveTimeCount = true;
        this.schedule(this.updateTimer, 1);
    };
    TimeCount.prototype.updateTimer = function () {
        var _this = this;
        if (this.timeLeft > 0) {
            this.timeLeft -= 1;
            GameConfig_1.ConfigData.Game.isLoose && (function () { return _this.node.active = false; });
            if (this.timeLeft <= 9) {
                // red color
                this.countdownLabel.node.color = cc.color(255, 0, 0, 255);
                this.countdownLabel.string = "00:0" + this.timeLeft;
                GameConfig_1.ConfigData.UI.isActiveWarning = true;
                // this.warningLayout.active = true;
            }
            else
                this.countdownLabel.string = "00:" + this.timeLeft;
        }
        else {
            this.unschedule(this.updateTimer);
            this.countdownLabel.string = '00:00';
            GameConfig_1.ConfigData.Game.isLoose = true;
        }
    };
    TimeCount.prototype.onDisable = function () {
        this.node.active = false;
    };
    TimeCount.prototype.onDestroy = function () {
        this.node.active = false;
    };
    TimeCount.prototype.update = function (dt) {
        if (GameConfig_1.ConfigData.Game.isPlaying && !this._isActiveTimeCount)
            this.activeTime();
    };
    __decorate([
        property(cc.Integer)
    ], TimeCount.prototype, "timeCount", void 0);
    __decorate([
        property(cc.Label)
    ], TimeCount.prototype, "countdownLabel", void 0);
    TimeCount = __decorate([
        ccclass,
        menu("Component/TimeCount")
    ], TimeCount);
    return TimeCount;
}(cc.Component));
exports.TimeCount = TimeCount;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29tcG9uZW50XFxUaW1lQ291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3RGLG1EQUFrRDtBQUU1QyxJQUFBLEtBQTRCLEVBQUUsQ0FBQyxVQUFVLEVBQXhDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBaUIsQ0FBQztBQUloRDtJQUErQiw2QkFBWTtJQUEzQztRQUFBLHFFQWtFQztRQS9ERyxlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBR3RCLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBRWhDLHFCQUFxQjtRQUNyQixpQ0FBaUM7UUFFakMsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBWXJCLHdCQUFrQixHQUFZLEtBQUssQ0FBQzs7SUEwQ3hDLENBQUM7SUFuRGEseUJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBRXBCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUUvQixpQ0FBaUM7SUFDckMsQ0FBQztJQUlNLDhCQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUdPLCtCQUFXLEdBQW5CO1FBQUEsaUJBbUJDO1FBbEJHLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7WUFFbkIsdUJBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1lBRTVELElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7Z0JBQ25CLFlBQVk7Z0JBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLFNBQU8sSUFBSSxDQUFDLFFBQVUsQ0FBQztnQkFDcEQsdUJBQVUsQ0FBQyxFQUFFLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztnQkFDckMsb0NBQW9DO2FBQ3ZDOztnQkFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxRQUFNLElBQUksQ0FBQyxRQUFVLENBQUM7U0FFN0Q7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztZQUNyQyx1QkFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUdTLDZCQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFHUyw2QkFBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBR1MsMEJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFHLHVCQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0I7WUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDL0UsQ0FBQztJQTlERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dEQUNDO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ2E7SUFOdkIsU0FBUztRQUZyQixPQUFPO1FBQ1AsSUFBSSxDQUFDLHFCQUFxQixDQUFDO09BQ2YsU0FBUyxDQWtFckI7SUFBRCxnQkFBQztDQWxFRCxBQWtFQyxDQWxFOEIsRUFBRSxDQUFDLFNBQVMsR0FrRTFDO0FBbEVZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBDb25maWdEYXRhIH0gZnJvbSBcIi4uL2NvbmZpZy9HYW1lQ29uZmlnXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHksIG1lbnV9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbkBtZW51KFwiQ29tcG9uZW50L1RpbWVDb3VudFwiKVxyXG5leHBvcnQgY2xhc3MgVGltZUNvdW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHRpbWVDb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBjb3VudGRvd25MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gd2FybmluZ0xheW91dDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgdGltZUxlZnQ6IG51bWJlciA9IDA7XHJcbiAgICBwcm9ncmVzczogbnVtYmVyID0gMTsgXHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByb2dyZXNzID0gMS4wO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVMZWZ0ID0gdGhpcy50aW1lQ291bnQ7XHJcblxyXG4gICAgICAgIC8vIHRoaXMudXBkYXRlVGltZUZpbGxQcm9ncmVzcygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfaXNBY3RpdmVUaW1lQ291bnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBhY3RpdmVUaW1lKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2lzQWN0aXZlVGltZUNvdW50ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZXIsIDEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRpbWVyKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVMZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVMZWZ0IC09IDE7XHJcblxyXG4gICAgICAgICAgICBDb25maWdEYXRhLkdhbWUuaXNMb29zZSAmJiAoKCkgPT4gdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZUxlZnQgPD0gOSkge1xyXG4gICAgICAgICAgICAgICAgLy8gcmVkIGNvbG9yXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZG93bkxhYmVsLm5vZGUuY29sb3IgPSBjYy5jb2xvcigyNTUsIDAsIDAsIDI1NSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZG93bkxhYmVsLnN0cmluZyA9IGAwMDowJHt0aGlzLnRpbWVMZWZ0fWA7XHJcbiAgICAgICAgICAgICAgICBDb25maWdEYXRhLlVJLmlzQWN0aXZlV2FybmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLndhcm5pbmdMYXlvdXQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHRoaXMuY291bnRkb3duTGFiZWwuc3RyaW5nID0gYDAwOiR7dGhpcy50aW1lTGVmdH1gO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRkb3duTGFiZWwuc3RyaW5nID0gJzAwOjAwJztcclxuICAgICAgICAgICAgQ29uZmlnRGF0YS5HYW1lLmlzTG9vc2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZihDb25maWdEYXRhLkdhbWUuaXNQbGF5aW5nICYmICF0aGlzLl9pc0FjdGl2ZVRpbWVDb3VudCkgdGhpcy5hY3RpdmVUaW1lKClcclxuICAgIH1cclxufVxyXG4iXX0=