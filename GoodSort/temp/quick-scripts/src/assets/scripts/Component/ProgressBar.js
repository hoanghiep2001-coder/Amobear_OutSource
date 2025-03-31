"use strict";
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