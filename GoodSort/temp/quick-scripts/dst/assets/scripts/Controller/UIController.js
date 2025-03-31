
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/UIController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '617423I8J9BdoAa1UyDwt6t', 'UIController');
// scripts/Controller/UIController.ts

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
exports.UIController = void 0;
var Responsive_1 = require("../Component/Responsive");
var TimeCount_1 = require("../Component/TimeCount");
var GameConfig_1 = require("../config/GameConfig");
var GameController_1 = require("./GameController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var UIController = /** @class */ (function (_super) {
    __extends(UIController, _super);
    function UIController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Responsive = null;
        _this.EndCard = null;
        _this.TimeCountPrefab = null;
        _this._tc = null;
        _this.warning = null;
        _this._isActivedWarning = false;
        return _this;
    }
    UIController.prototype.init = function () {
        GameConfig_1.ConfigData.Helper.maxRocketCanSpawn = 4;
        GameConfig_1.ConfigData.Idea.fakeRocketPoses = [];
        GameConfig_1.ConfigData.Idea.shelf = [];
        GameConfig_1.ConfigData.Idea.shelfEatenCount = 0;
        GameConfig_1.ConfigData.Idea.shelfExplosionCount = 0;
    };
    UIController.prototype.start = function () {
        this.init();
        GameConfig_1.ConfigData.Game.isHasTimeCount && this.createTimeCount();
    };
    UIController.prototype.createTimeCount = function () {
        var _tc = cc.instantiate(this.TimeCountPrefab);
        _tc.parent = this.node;
        _tc.setPosition(0, 0, 0);
        this._tc = _tc.getComponent(TimeCount_1.TimeCount);
        this.Responsive.setResObject(_tc);
    };
    UIController.prototype.activeWarning = function () {
        if (this._isActivedWarning)
            return;
        this._isActivedWarning = true;
        this.warning.active = true;
    };
    UIController.prototype.moveToNextScene = function () {
        this.init();
        // Board.Instance.restartLevel();
        var _Scene = this.getRootNode(this.node);
        this.scheduleOnce(function () {
            _Scene.getComponentInChildren(GameController_1.GameController).createNewLevel();
            GameConfig_1.ConfigData.Game.isMovedToNextLevel = true;
        }, 1);
    };
    UIController.prototype.getRootNode = function (node) {
        while (node.parent) {
            node = node.parent;
        }
        return node;
    };
    UIController.prototype.showEndCard = function () {
        GameConfig_1.ConfigData.Game.isShowEndCard = true;
        this.EndCard.active = true;
    };
    UIController.prototype.update = function (dt) {
        if (GameConfig_1.ConfigData.Game.isShowEndCard)
            return;
        if (GameConfig_1.ConfigData.Game.isWin && !this.EndCard.active) {
            this.showEndCard();
        }
        if (GameConfig_1.ConfigData.Game.isHasTimeCount && GameConfig_1.ConfigData.UI.isActiveWarning) {
            this.activeWarning();
        }
        if (GameConfig_1.ConfigData.Game.isMovedToNextLevel && GameConfig_1.ConfigData.Idea.shelfEatenCount >= 24 && !this.EndCard.active) {
            this.showEndCard();
        }
        if (!GameConfig_1.ConfigData.Game.isMovedToNextLevel && GameConfig_1.ConfigData.Idea.shelfEatenCount >= 24) {
            this.moveToNextScene();
        }
        if (GameConfig_1.ConfigData.Game.isLoose && !this.EndCard.active) {
            if (GameConfig_1.ConfigData.Game.isHasTimeCount)
                this._tc.node.active = false;
            if (GameConfig_1.ConfigData.UI.isActiveWarning)
                this.warning.active = false;
            this.showEndCard();
        }
    };
    __decorate([
        property(Responsive_1.Responsive)
    ], UIController.prototype, "Responsive", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "EndCard", void 0);
    __decorate([
        property(cc.Prefab)
    ], UIController.prototype, "TimeCountPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], UIController.prototype, "warning", void 0);
    UIController = __decorate([
        ccclass,
        menu("Controller/UIController")
    ], UIController);
    return UIController;
}(cc.Component));
exports.UIController = UIController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcVUlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd0RixzREFBcUQ7QUFDckQsb0RBQW1EO0FBQ25ELG1EQUFrRDtBQUNsRCxtREFBa0Q7QUFFNUMsSUFBQSxLQUE4QixFQUFFLENBQUMsVUFBVSxFQUF6QyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFJbEQ7SUFBa0MsZ0NBQVk7SUFBOUM7UUFBQSxxRUFvR0M7UUFqR0csZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFOUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUl4QixxQkFBZSxHQUFjLElBQUksQ0FBQztRQUNsQyxTQUFHLEdBQWMsSUFBSSxDQUFDO1FBR3RCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUEyQnhCLHVCQUFpQixHQUFZLEtBQUssQ0FBQzs7SUE0RHZDLENBQUM7SUFwRlcsMkJBQUksR0FBWjtRQUNJLHVCQUFVLENBQUMsTUFBTSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN4Qyx1QkFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JDLHVCQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDM0IsdUJBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQyx1QkFBVSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUdTLDRCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWix1QkFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLElB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QUNqRSxJQUFJLHVCQUFVLENBQUMsRUFBRSxDQUFDLGVBQWU7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQy9ELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUEvRkQ7UUFEQyxRQUFRLENBQUMsdUJBQVUsQ0FBQztvREFDUztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNNO0lBSXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ2M7SUFJbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDTTtJQWJmLFlBQVk7UUFGeEIsT0FBTztRQUNQLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztPQUNuQixZQUFZLENBb0d4QjtJQUFELG1CQUFDO0NBcEdELEFBb0dDLENBcEdpQyxFQUFFLENBQUMsU0FBUyxHQW9HN0M7QUFwR1ksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4uL0JvYXJkXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmUgfSBmcm9tIFwiLi4vQ29tcG9uZW50L1Jlc3BvbnNpdmVcIjtcclxuaW1wb3J0IHsgVGltZUNvdW50IH0gZnJvbSBcIi4uL0NvbXBvbmVudC9UaW1lQ291bnRcIjtcclxuaW1wb3J0IHsgQ29uZmlnRGF0YSB9IGZyb20gXCIuLi9jb25maWcvR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuQG1lbnUoXCJDb250cm9sbGVyL1VJQ29udHJvbGxlclwiKVxyXG5leHBvcnQgY2xhc3MgVUlDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoUmVzcG9uc2l2ZSlcclxuICAgIFJlc3BvbnNpdmU6IFJlc3BvbnNpdmUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBFbmRDYXJkOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIFRpbWVDb3VudFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIF90YzogVGltZUNvdW50ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdhcm5pbmc6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgQ29uZmlnRGF0YS5IZWxwZXIubWF4Um9ja2V0Q2FuU3Bhd24gPSA0O1xyXG4gICAgICAgIENvbmZpZ0RhdGEuSWRlYS5mYWtlUm9ja2V0UG9zZXMgPSBbXTtcclxuICAgICAgICBDb25maWdEYXRhLklkZWEuc2hlbGYgPSBbXTtcclxuICAgICAgICBDb25maWdEYXRhLklkZWEuc2hlbGZFYXRlbkNvdW50ID0gMDtcclxuICAgICAgICBDb25maWdEYXRhLklkZWEuc2hlbGZFeHBsb3Npb25Db3VudCA9IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBDb25maWdEYXRhLkdhbWUuaXNIYXNUaW1lQ291bnQgJiYgdGhpcy5jcmVhdGVUaW1lQ291bnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVUaW1lQ291bnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgX3RjID0gY2MuaW5zdGFudGlhdGUodGhpcy5UaW1lQ291bnRQcmVmYWIpO1xyXG4gICAgICAgIF90Yy5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgX3RjLnNldFBvc2l0aW9uKDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuX3RjID0gX3RjLmdldENvbXBvbmVudChUaW1lQ291bnQpO1xyXG4gICAgICAgIHRoaXMuUmVzcG9uc2l2ZS5zZXRSZXNPYmplY3QoX3RjKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX2lzQWN0aXZlZFdhcm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgYWN0aXZlV2FybmluZygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5faXNBY3RpdmVkV2FybmluZykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX2lzQWN0aXZlZFdhcm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMud2FybmluZy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIG1vdmVUb05leHRTY2VuZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAvLyBCb2FyZC5JbnN0YW5jZS5yZXN0YXJ0TGV2ZWwoKTtcclxuICAgICAgICBjb25zdCBfU2NlbmUgPSB0aGlzLmdldFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBfU2NlbmUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihHYW1lQ29udHJvbGxlcikuY3JlYXRlTmV3TGV2ZWwoKTtcclxuICAgICAgICAgICAgQ29uZmlnRGF0YS5HYW1lLmlzTW92ZWRUb05leHRMZXZlbCA9IHRydWU7XHJcbiAgICAgICAgfSwgMSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0Um9vdE5vZGUobm9kZTogY2MuTm9kZSk6IGNjLk5vZGUge1xyXG4gICAgICAgIHdoaWxlIChub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNob3dFbmRDYXJkKCk6IHZvaWQge1xyXG4gICAgICAgIENvbmZpZ0RhdGEuR2FtZS5pc1Nob3dFbmRDYXJkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkVuZENhcmQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25maWdEYXRhLkdhbWUuaXNTaG93RW5kQ2FyZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoQ29uZmlnRGF0YS5HYW1lLmlzV2luICYmICF0aGlzLkVuZENhcmQuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0VuZENhcmQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChDb25maWdEYXRhLkdhbWUuaXNIYXNUaW1lQ291bnQgJiYgQ29uZmlnRGF0YS5VSS5pc0FjdGl2ZVdhcm5pbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVXYXJuaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQ29uZmlnRGF0YS5HYW1lLmlzTW92ZWRUb05leHRMZXZlbCAmJiBDb25maWdEYXRhLklkZWEuc2hlbGZFYXRlbkNvdW50ID49IDI0ICYmICF0aGlzLkVuZENhcmQuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0VuZENhcmQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghQ29uZmlnRGF0YS5HYW1lLmlzTW92ZWRUb05leHRMZXZlbCAmJiBDb25maWdEYXRhLklkZWEuc2hlbGZFYXRlbkNvdW50ID49IDI0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVRvTmV4dFNjZW5lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQ29uZmlnRGF0YS5HYW1lLmlzTG9vc2UgJiYgIXRoaXMuRW5kQ2FyZC5hY3RpdmUpIHtcclxuICAgICAgICAgICAgaWYgKENvbmZpZ0RhdGEuR2FtZS5pc0hhc1RpbWVDb3VudCkgdGhpcy5fdGMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKENvbmZpZ0RhdGEuVUkuaXNBY3RpdmVXYXJuaW5nKSB0aGlzLndhcm5pbmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0VuZENhcmQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==