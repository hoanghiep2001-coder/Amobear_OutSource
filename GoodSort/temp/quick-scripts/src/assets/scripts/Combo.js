"use strict";
cc._RF.push(module, '6aeebWfMF1DeKRgydKYHFLZ', 'Combo');
// scripts/Combo.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Combo = /** @class */ (function (_super) {
    __extends(Combo, _super);
    function Combo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.combo = -2;
        // Cooldown duration in seconds
        _this.cooldownTime = 5;
        // Variable to track remaining cooldown
        _this.remainingCooldown = 0;
        return _this;
    }
    Combo.prototype.updateCombo = function () {
        var _this = this;
        this.combo++;
        this.scheduleOnce(function () {
            _this.comboEffect.active = _this.combo > 0;
        }, 0.6);
        // this.comboBar.active = this.combo > 0;
        // this.remainingCooldown = this.cooldownTime;
        // this.comboLabel.string = "COMBO X" + this.combo;
        // Optional: You might want to disable combo actions here
    };
    Combo.prototype.stopCombo = function () {
        this.comboBar.active = false;
        this.combo = 0;
        this.remainingCooldown = 0;
    };
    Combo.prototype.update = function (dt) {
        if (this.remainingCooldown > 0) {
            // Decrease the remaining cooldown time
            this.remainingCooldown -= dt;
            if (this.remainingCooldown <= 0) {
                // Optional: Re-enable combo actions here
                this.stopCombo();
                return;
            }
            // Update the progress bar
            this.bar.progress = this.remainingCooldown / this.cooldownTime;
        }
    };
    __decorate([
        property(cc.Node)
    ], Combo.prototype, "comboBar", void 0);
    __decorate([
        property(cc.Node)
    ], Combo.prototype, "comboEffect", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], Combo.prototype, "bar", void 0);
    __decorate([
        property(cc.Label)
    ], Combo.prototype, "comboLabel", void 0);
    Combo = __decorate([
        ccclass
    ], Combo);
    return Combo;
}(cc.Component));
exports.default = Combo;

cc._RF.pop();