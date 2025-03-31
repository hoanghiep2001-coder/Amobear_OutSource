
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Combo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29tYm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUErQ0M7UUFuQ1MsV0FBSyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzNCLCtCQUErQjtRQUN2QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUNqQyx1Q0FBdUM7UUFDL0IsdUJBQWlCLEdBQVcsQ0FBQyxDQUFDOztJQStCeEMsQ0FBQztJQTdCQywyQkFBVyxHQUFYO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNSLHlDQUF5QztRQUN6Qyw4Q0FBOEM7UUFDOUMsbURBQW1EO1FBQ25ELHlEQUF5RDtJQUMzRCxDQUFDO0lBQ0QseUJBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELHNCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLHVDQUF1QztZQUN2QyxJQUFJLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDO1lBQzdCLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsRUFBRTtnQkFDL0IseUNBQXlDO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLE9BQU87YUFDUjtZQUNELDBCQUEwQjtZQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNoRTtJQUNILENBQUM7SUE1Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDQTtJQUVsQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0NBQ0w7SUFHcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDRTtJQVZGLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0ErQ3pCO0lBQUQsWUFBQztDQS9DRCxBQStDQyxDQS9Da0MsRUFBRSxDQUFDLFNBQVMsR0ErQzlDO2tCQS9Db0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21ibyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgY29tYm9CYXI6IGNjLk5vZGU7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgY29tYm9FZmZlY3Q6IGNjLk5vZGU7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICBiYXI6IGNjLlByb2dyZXNzQmFyO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgY29tYm9MYWJlbDogY2MuTGFiZWw7XHJcblxyXG4gIHByaXZhdGUgY29tYm86IG51bWJlciA9IC0yO1xyXG4gIC8vIENvb2xkb3duIGR1cmF0aW9uIGluIHNlY29uZHNcclxuICBwcml2YXRlIGNvb2xkb3duVGltZTogbnVtYmVyID0gNTtcclxuICAvLyBWYXJpYWJsZSB0byB0cmFjayByZW1haW5pbmcgY29vbGRvd25cclxuICBwcml2YXRlIHJlbWFpbmluZ0Nvb2xkb3duOiBudW1iZXIgPSAwO1xyXG5cclxuICB1cGRhdGVDb21ibygpIHtcclxuICAgIHRoaXMuY29tYm8rKztcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5jb21ib0VmZmVjdC5hY3RpdmUgPSB0aGlzLmNvbWJvID4gMDtcclxuICAgIH0sIDAuNik7XHJcbiAgICAvLyB0aGlzLmNvbWJvQmFyLmFjdGl2ZSA9IHRoaXMuY29tYm8gPiAwO1xyXG4gICAgLy8gdGhpcy5yZW1haW5pbmdDb29sZG93biA9IHRoaXMuY29vbGRvd25UaW1lO1xyXG4gICAgLy8gdGhpcy5jb21ib0xhYmVsLnN0cmluZyA9IFwiQ09NQk8gWFwiICsgdGhpcy5jb21ibztcclxuICAgIC8vIE9wdGlvbmFsOiBZb3UgbWlnaHQgd2FudCB0byBkaXNhYmxlIGNvbWJvIGFjdGlvbnMgaGVyZVxyXG4gIH1cclxuICBzdG9wQ29tYm8oKSB7XHJcbiAgICB0aGlzLmNvbWJvQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5jb21ibyA9IDA7XHJcbiAgICB0aGlzLnJlbWFpbmluZ0Nvb2xkb3duID0gMDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShkdCkge1xyXG4gICAgaWYgKHRoaXMucmVtYWluaW5nQ29vbGRvd24gPiAwKSB7XHJcbiAgICAgIC8vIERlY3JlYXNlIHRoZSByZW1haW5pbmcgY29vbGRvd24gdGltZVxyXG4gICAgICB0aGlzLnJlbWFpbmluZ0Nvb2xkb3duIC09IGR0O1xyXG4gICAgICBpZiAodGhpcy5yZW1haW5pbmdDb29sZG93biA8PSAwKSB7XHJcbiAgICAgICAgLy8gT3B0aW9uYWw6IFJlLWVuYWJsZSBjb21ibyBhY3Rpb25zIGhlcmVcclxuICAgICAgICB0aGlzLnN0b3BDb21ibygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBVcGRhdGUgdGhlIHByb2dyZXNzIGJhclxyXG4gICAgICB0aGlzLmJhci5wcm9ncmVzcyA9IHRoaXMucmVtYWluaW5nQ29vbGRvd24gLyB0aGlzLmNvb2xkb3duVGltZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19