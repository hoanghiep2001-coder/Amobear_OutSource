
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f0fcvqdLtDC4pvgm7+2SDt', 'GameController');
// scripts/Controller/GameController.ts

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
exports.GameController = void 0;
var GameConfig_1 = require("../config/GameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Playable_Level_1 = null;
        _this.Playable_Level_2 = null;
        _this.currentLevel = null;
        return _this;
    }
    GameController.prototype.start = function () {
        this.createNewLevel();
    };
    GameController.prototype.createNewLevel = function () {
        if (this.currentLevel) {
            this.currentLevel.active = false;
            // this.node.removeChild(this.currentLevel);
            this.currentLevel.destroy();
        }
        var gameLevel = null;
        if (!GameConfig_1.ConfigData.Game.isMovedToNextLevel) {
            gameLevel = cc.instantiate(this.Playable_Level_1);
        }
        else {
            gameLevel = cc.instantiate(this.Playable_Level_2);
        }
        this.currentLevel = gameLevel;
        gameLevel.parent = this.node;
        gameLevel.position = new cc.Vec3(0, 0, 0);
    };
    __decorate([
        property(cc.Prefab)
    ], GameController.prototype, "Playable_Level_1", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameController.prototype, "Playable_Level_2", void 0);
    GameController = __decorate([
        ccclass,
        menu("Controller/GameController")
    ], GameController);
    return GameController;
}(cc.Component));
exports.GameController = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLG1EQUFrRDtBQUU1QyxJQUFBLEtBQTRCLEVBQUUsQ0FBQyxVQUFVLEVBQXhDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBaUIsQ0FBQztBQUloRDtJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQWtDQztRQS9CRyxzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFHbkMsc0JBQWdCLEdBQWMsSUFBSSxDQUFDO1FBRW5DLGtCQUFZLEdBQVksSUFBSSxDQUFDOztJQTBCakMsQ0FBQztJQXZCYSw4QkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFHTSx1Q0FBYyxHQUFyQjtRQUNJLElBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDakMsNENBQTRDO1lBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDL0I7UUFFRCxJQUFJLFNBQVMsR0FBWSxJQUFJLENBQUM7UUFDOUIsSUFBRyxDQUFDLHVCQUFVLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3BDLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDSCxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3QixTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUE5QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0REFDZTtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzREQUNlO0lBTjFCLGNBQWM7UUFGMUIsT0FBTztRQUNQLElBQUksQ0FBQywyQkFBMkIsQ0FBQztPQUNyQixjQUFjLENBa0MxQjtJQUFELHFCQUFDO0NBbENELEFBa0NDLENBbENtQyxFQUFFLENBQUMsU0FBUyxHQWtDL0M7QUFsQ1ksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBDb25maWdEYXRhIH0gZnJvbSBcIi4uL2NvbmZpZy9HYW1lQ29uZmlnXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHksIG1lbnV9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbkBtZW51KFwiQ29udHJvbGxlci9HYW1lQ29udHJvbGxlclwiKVxyXG5leHBvcnQgY2xhc3MgR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBQbGF5YWJsZV9MZXZlbF8xOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBQbGF5YWJsZV9MZXZlbF8yOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIGN1cnJlbnRMZXZlbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZU5ld0xldmVsKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVOZXdMZXZlbCgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRMZXZlbCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnJlbW92ZUNoaWxkKHRoaXMuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGdhbWVMZXZlbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAgICAgaWYoIUNvbmZpZ0RhdGEuR2FtZS5pc01vdmVkVG9OZXh0TGV2ZWwpIHtcclxuICAgICAgICAgICAgZ2FtZUxldmVsID0gY2MuaW5zdGFudGlhdGUodGhpcy5QbGF5YWJsZV9MZXZlbF8xKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnYW1lTGV2ZWwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlBsYXlhYmxlX0xldmVsXzIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSBnYW1lTGV2ZWw7XHJcbiAgICAgICAgZ2FtZUxldmVsLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBnYW1lTGV2ZWwucG9zaXRpb24gPSBuZXcgY2MuVmVjMygwLDAsMCk7XHJcbiAgICB9XHJcbn1cclxuIl19