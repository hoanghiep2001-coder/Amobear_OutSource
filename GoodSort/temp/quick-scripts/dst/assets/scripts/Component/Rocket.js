
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Component/Rocket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29tcG9uZW50XFxSb2NrZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1EQUFrRDtBQUk1QyxJQUFBLEtBQThCLEVBQUUsQ0FBQyxVQUFVLEVBQXpDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQUlsRDtJQUE0QiwwQkFBWTtJQUF4QztRQUFBLHFFQWlIQztRQS9HRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGVBQVMsR0FBc0IsSUFBSSxDQUFDO1FBRXBDLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsWUFBTSxHQUFVLElBQUksQ0FBQztRQU9yQixZQUFNLEdBQWEsSUFBSSxDQUFDOztJQWtHNUIsQ0FBQztJQXZHYSxzQkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUdPLCtCQUFjLEdBQXRCO1FBQUEsaUJBU0M7UUFSRyxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQyxtQkFBbUI7UUFDMUMsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsbUNBQW1DO1FBRWpGLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQy9CLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNoRSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFF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SUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsQ0FBQztnQkFDekMsSUFBTSxVQUFRLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQ2xELEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQzdELENBQUM7Z0JBQ0YsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsUUFBUSxFQUFkLENBQWMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ2hFLEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzlDO2FBQ0o7UUFDTCxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBS08sOEJBQWEsR0FBckI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUdPLDBCQUFTLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBNUdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQzs2Q0FDUTtJQUwzQixNQUFNO1FBRmxCLE9BQU87UUFDUCxJQUFJLENBQUMsZUFBZSxDQUFDO09BQ1QsTUFBTSxDQWlIbEI7SUFBRCxhQUFDO0NBakhELEFBaUhDLENBakgyQixFQUFFLENBQUMsU0FBUyxHQWlIdkM7QUFqSFksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmQgZnJvbSBcIi4uL0JvYXJkXCI7XHJcbmltcG9ydCB7IENvbmZpZ0RhdGEgfSBmcm9tIFwiLi4vY29uZmlnL0dhbWVDb25maWdcIjtcclxuLy8gaW1wb3J0IHsgUHJlZmFiU291bmRUcmFjaywgU291bmRDb250cm9sbGVyIH0gZnJvbSBcIi4uL0NvbnRyb2xsZXIvU291bmRDb250cm9sbGVyXCI7XHJcbmltcG9ydCBTaGVsZiBmcm9tIFwiLi4vZ2FtZXBsYXkvU2hlbGZcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5AbWVudSgnSGVscGVyL1JvY2tldCcpXHJcbmV4cG9ydCBjbGFzcyBSb2NrZXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidWJibGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcclxuICAgIGxpZ2h0X3ZmeDogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xyXG5cclxuICAgIF9yb2NrZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgX0JvYXJkOiBCb2FyZCA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3JvY2tldCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlJvY2tldFwiKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUlkbGVBbmltKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3R3ZWVuOiBjYy5Ud2VlbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIGFjdGl2ZUlkbGVBbmltKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGZsb2F0UmFuZ2UgPSAyMjsgLy8gQmnDqm4gxJHhu5kgZGFvIMSR4buZbmdcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IGNjLm1hdGgucmFuZG9tUmFuZ2UoMS4yLCAyKTsgLy8gVGjhu51pIGdpYW4gY2h1eeG7g24gxJHhu5luZyBuZ+G6q3Ugbmhpw6puXHJcblxyXG4gICAgICAgIHRoaXMuX3R3ZWVuID0gY2MudHdlZW4odGhpcy5fcm9ja2V0KVxyXG4gICAgICAgICAgICAuYnkoZHVyYXRpb24sIHsgeTogZmxvYXRSYW5nZSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbk91dCB9KVxyXG4gICAgICAgICAgICAuYnkoZHVyYXRpb24sIHsgeTogLWZsb2F0UmFuZ2UgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW5PdXQgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5hY3RpdmVJZGxlQW5pbSgpKSAvLyBM4bq3cCBs4bqhaSB2w7QgaOG6oW5cclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBhY3RpdmVSb2NrZXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMC4zO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZUJ1YmJsZSgpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVmZ4KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3R3ZWVuKSB0aGlzLl90d2Vlbi5zdG9wKCk7XHJcbiAgICAgICAgQ29uZmlnRGF0YS5HYW1lLmlzQ2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbGVycEFuZ2xlKGZyb206IG51bWJlciwgdG86IG51bWJlciwgdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgZGVsdGEgPSAoKHRvIC0gZnJvbSArIDU0MCkgJSAzNjApIC0gMTgwOyAvLyBUw61uaCDEkeG7mSBjaMOqbmggbOG7h2NoIGfDs2MgdGhlbyBoxrDhu5tuZyBuZ+G6r24gbmjhuqV0XHJcbiAgICAgICAgcmV0dXJuIGZyb20gKyBkZWx0YSAqIHQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBtb3ZlVG9Bbm90aGVyKHBvczogY2MuVmVjMiwgaXRlbTogU2hlbGYsIGlzUm9ja2V0V2l0aE1hdGNoOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIFTDrW5oIHRvw6FuIGfDs2MgeG9heSBjaMOtbmggeMOhY1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBwb3Muc3ViKHN0YXJ0UG9zKTtcclxuICAgICAgICBsZXQgdGFyZ2V0QW5nbGUgPSBNYXRoLmF0YW4yKGRpcmVjdGlvbi55LCBkaXJlY3Rpb24ueCkgKiAoMTgwIC8gTWF0aC5QSSkgKyAxODA7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRBbmdsZSA9IHRoaXMubm9kZS5hbmdsZTtcclxuICAgICAgICBsZXQgZmluYWxBbmdsZSA9IHRoaXMubGVycEFuZ2xlKGN1cnJlbnRBbmdsZSwgdGFyZ2V0QW5nbGUsIDEpOyAvLyBT4butIGThu6VuZyBow6BtIGxlcnBBbmdsZVxyXG5cclxuICAgICAgICAvLyBUxINuZyB0aOG7nWkgZ2lhbiBkaSBjaHV54buDblxyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IGRpcmVjdGlvbi5tYWcoKTtcclxuICAgICAgICBsZXQgbWluRGlzdCA9IDEwMCwgbWF4RGlzdCA9IDUwMDtcclxuICAgICAgICBsZXQgbWluVGltZSA9IDAuNSwgbWF4VGltZSA9IDEuNTtcclxuICAgICAgICBsZXQgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIChkaXN0YW5jZSAtIG1pbkRpc3QpIC8gKG1heERpc3QgLSBtaW5EaXN0KSkpO1xyXG4gICAgICAgIGxldCBtb3ZlVGltZSA9IG1pblRpbWUgKyB0ICogKG1heFRpbWUgLSBtaW5UaW1lKTtcclxuXHJcbiAgICAgICAgLy8gPT09IPCfkqsgVOG6oW8gxJFp4buDbSBjb250cm9sIMSR4buDIHJvY2tldCBiYXkgdsOybmcgY3VuZyA9PT1cclxuICAgICAgICBsZXQgbm9ybWFsID0gbmV3IGNjLlZlYzIoLWRpcmVjdGlvbi55LCBkaXJlY3Rpb24ueCkubm9ybWFsaXplKCk7IC8vIFZlY3RvciB2dcO0bmcgZ8OzYyB24bubaSBoxrDhu5tuZyBiYXlcclxuICAgICAgICBsZXQgYXJjSGVpZ2h0ID0gZGlzdGFuY2UgKiAwLjY4OyAvLyDEkOG7mSBjb25nICgzMCUga2hv4bqjbmcgY8OhY2gpXHJcbiAgICAgICAgbGV0IGNvbnRyb2xQb2ludCA9IHN0YXJ0UG9zLmFkZChkaXJlY3Rpb24ubXVsKDAuNSkpLmFkZChub3JtYWwubXVsKGFyY0hlaWdodCkpOyAvLyBUcnVuZyDEkWnhu4NtICsgbOG7h2NoIHZ1w7RuZyBnw7NjXHJcblxyXG4gICAgICAgIGl0ZW0uaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAvLyAuZGVsYXkoMC4xNSlcclxuICAgICAgICAgICAgLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5iZXppZXJUbyhtb3ZlVGltZSwgc3RhcnRQb3MsIGNvbnRyb2xQb2ludCwgcG9zKSwgLy8gRGkgY2h1eeG7g24gdGhlbyBCZXppZXJcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8obW92ZVRpbWUsIHsgYW5nbGU6IGZpbmFsQW5nbGUgfSkgLy8gWG9heSB0aGVvIGjGsOG7m25nIGNow61uaCB4w6FjXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gU291bmRDb250cm9sbGVyLkluc3RhbmNlKFNvdW5kQ29udHJvbGxlcikucGxheVByZWZhYlNvdW5kKFByZWZhYlNvdW5kVHJhY2suY2xlYXJTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlZmZlY3RQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX0JvYXJkLmNyZWF0ZUV4cGxvc2lvbkZ4KGVmZmVjdFBvcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpdGVtLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpdGVtLml0ZW1JblNoZWxmcy5mb3JFYWNoKGl0ZW0gPT4geyBpZiAoaXRlbS5pc1ZhbGlkKSBpdGVtLm5vZGUuYWN0aXZlID0gZmFsc2U7IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIENvbmZpZ0RhdGEuSWRlYS5zaGVsZkVhdGVuQ291bnQgKz0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9Cb2FyZC51cGRhdGVDb21ibygpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5fQm9hcmQudXBkYXRlTWF0Y2hDb3VudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc1JvY2tldFdpdGhNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbmZpZ0RhdGEuSWRlYS5zaGVsZkV4cGxvc2lvbkNvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSB0aGlzLl9Cb2FyZC5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fQm9hcmQuc2hlbHZlcy5maWx0ZXIoc2hlbGYgPT4gc2hlbGYuaXNBY3RpdmUpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fQm9hcmQuY3JlYXRlNVJvY2tldHMoc3RhcnRQb3MsIDAsIDUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBkaXNhYmxlQnViYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYnViYmxlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGFjdGl2ZVZmeCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxpZ2h0X3ZmeC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=