"use strict";
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