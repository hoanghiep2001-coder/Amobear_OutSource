"use strict";
cc._RF.push(module, 'a8ad9wlsalIAKJl/cKXe1jI', 'Rocket');
// scripts/Component/Rocket.ts

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
exports.Rocket = void 0;
var GameConfig_1 = require("../config/GameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var Rocket = /** @class */ (function (_super) {
    __extends(Rocket, _super);
    function Rocket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bubble = null;
        _this.light_vfx = null;
        _this._rocket = null;
        _this._Board = null;
        _this._tween = null;
        return _this;
    }
    Rocket.prototype.start = function () {
        this._rocket = this.node.getChildByName("Rocket");
        this.activeIdleAnim();
    };
    Rocket.prototype.activeIdleAnim = function () {
        var _this = this;
        var floatRange = 22; // Biên độ dao động
        var duration = cc.math.randomRange(1.2, 2); // Thời gian chuyển động ngẫu nhiên
        this._tween = cc.tween(this._rocket)
            .by(duration, { y: floatRange }, { easing: cc.easing.sineInOut })
            .by(duration, { y: -floatRange }, { easing: cc.easing.sineInOut })
            .call(function () { return _this.activeIdleAnim(); }) // Lặp lại vô hạn
            .start();
    };
    Rocket.prototype.activeRocket = function () {
        this.node.scale = 0.3;
        this.disableBubble();
        this.activeVfx();
        if (this._tween)
            this._tween.stop();
        GameConfig_1.ConfigData.Game.isCanClick = false;
    };
    Rocket.prototype.lerpAngle = function (from, to, t) {
        var delta = ((to - from + 540) % 360) - 180; // Tính độ chênh lệch góc theo hướng ngắn nhất
        return from + delta * t;
    };
    Rocket.prototype.moveToAnother = function (pos, item, isRocketWithMatch) {
        var _this = this;
        var startPos = this.node.getPosition();
        // Tính toán góc xoay chính xác
        var direction = pos.sub(startPos);
        var targetAngle = Math.atan2(direction.y, direction.x) * (180 / Math.PI) + 180;
        var currentAngle = this.node.angle;
        var finalAngle = this.lerpAngle(currentAngle, targetAngle, 1); // Sử dụng hàm lerpAngle
        // Tăng thời gian di chuyển
        var distance = direction.mag();
        var minDist = 100, maxDist = 500;
        var minTime = 0.5, maxTime = 1.5;
        var t = Math.min(1, Math.max(0, (distance - minDist) / (maxDist - minDist)));
        var moveTime = minTime + t * (maxTime - minTime);
        // === 💫 Tạo điểm control để rocket bay vòng cung ===
        var normal = new cc.Vec2(-direction.y, direction.x).normalize(); // Vector vuông góc với hướng bay
        var arcHeight = distance * 0.68; // Độ cong (30% khoảng cách)
        var controlPoint = startPos.add(direction.mul(0.5)).add(normal.mul(arcHeight)); // Trung điểm + lệch vuông góc
        item.isActive = false;
        cc.tween(this.node)
            // .delay(0.15)
            .parallel(cc.tween().bezierTo(moveTime, startPos, controlPoint, pos), // Di chuyển theo Bezier
        cc.tween().to(moveTime, { angle: finalAngle }) // Xoay theo hướng chính xác
        )
            .call(function () {
            // SoundController.Instance(SoundController).playPrefabSound(PrefabSoundTrack.clearSound);
            var effectPos = _this.node.parent.convertToNodeSpaceAR(_this.node.parent.convertToWorldSpaceAR(_this.node.getPosition()));
            _this._Board.createExplosionFx(effectPos);
            _this.node.active = false;
            item.node.active = false;
            item.itemInShelfs.forEach(function (item) { if (item.isValid)
                item.node.active = false; });
            GameConfig_1.ConfigData.Idea.shelfEatenCount += 1;
            _this._Board.updateCombo();
            // this._Board.updateMatchCount();
            if (isRocketWithMatch) {
                GameConfig_1.ConfigData.Idea.shelfExplosionCount += 1;
                var startPos_1 = _this._Board.node.convertToNodeSpaceAR(_this.node.parent.convertToWorldSpaceAR(_this.node.position));
                if (_this._Board.shelves.filter(function (shelf) { return shelf.isActive; }).length > 0) {
                    _this._Board.create5Rockets(startPos_1, 0, 5);
                }
            }
        })
            .start();
    };
    Rocket.prototype.disableBubble = function () {
        this.bubble.active = false;
    };
    Rocket.prototype.activeVfx = function () {
        this.light_vfx.node.active = true;
    };
    __decorate([
        property(cc.Node)
    ], Rocket.prototype, "bubble", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], Rocket.prototype, "light_vfx", void 0);
    Rocket = __decorate([
        ccclass,
        menu('Helper/Rocket')
    ], Rocket);
    return Rocket;
}(cc.Component));
exports.Rocket = Rocket;

cc._RF.pop();