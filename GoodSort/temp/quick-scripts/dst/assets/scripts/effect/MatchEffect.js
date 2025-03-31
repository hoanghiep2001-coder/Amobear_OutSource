
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/effect/MatchEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '11c87Vq+19Pa58eUEttW5Fu', 'MatchEffect');
// scripts/effect/MatchEffect.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MatchEffect = /** @class */ (function (_super) {
    __extends(MatchEffect, _super);
    function MatchEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchEffect.prototype.start = function () {
        cc.tween(this.star)
            .to(0.5, {
            opacity: 0,
            position: new cc.Vec3(0, 20, 0),
            scale: 1.2,
        })
            .start();
        cc.tween(this.star_2)
            .to(0.5, { scale: 1.3 }, { easing: cc.easing.elasticOut })
            .to(0.5, { scale: 0, opacity: 0 }, { easing: cc.easing.sineIn })
            .start();
        cc.tween(this.circle)
            .to(0.25, { opacity: 255, scale: 1 }, { easing: cc.easing.elasticOut })
            .to(0.25, { opacity: 0, scale: 1.5 }, { easing: cc.easing.sineIn })
            .start();
        cc.tween(this.glow)
            .to(1, {
            rotation: -360,
            opacity: 0,
        }, { easing: "quadOut" })
            // .to(1.5, {
            //   opacity: 0,
            // })
            // .union()
            .start();
    };
    __decorate([
        property(cc.Node)
    ], MatchEffect.prototype, "star", void 0);
    __decorate([
        property(cc.Node)
    ], MatchEffect.prototype, "glow", void 0);
    __decorate([
        property(cc.Node)
    ], MatchEffect.prototype, "star_2", void 0);
    __decorate([
        property(cc.Node)
    ], MatchEffect.prototype, "circle", void 0);
    MatchEffect = __decorate([
        ccclass
    ], MatchEffect);
    return MatchEffect;
}(cc.Component));
exports.default = MatchEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZWZmZWN0XFxNYXRjaEVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDs7SUE0Q0EsQ0FBQztJQWxDQywyQkFBSyxHQUFMO1FBQ0UsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2hCLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLEVBQUUsQ0FBQztZQUNWLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDL0IsS0FBSyxFQUFFLEdBQUc7U0FDWCxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7UUFFWCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDbEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3pELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQy9ELEtBQUssRUFBRSxDQUFDO1FBRVQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3BCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3RFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2xFLEtBQUssRUFBRSxDQUFDO1FBRVgsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2hCLEVBQUUsQ0FDRCxDQUFDLEVBQ0Q7WUFDRSxRQUFRLEVBQUUsQ0FBQyxHQUFHO1lBQ2QsT0FBTyxFQUFFLENBQUM7U0FDWCxFQUNELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUN0QjtZQUNELGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsS0FBSztZQUNMLFdBQVc7YUFDVixLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUF6Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSjtJQUVkO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0o7SUFFZDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNGO0lBRWhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ0Y7SUFSRyxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBNEMvQjtJQUFELGtCQUFDO0NBNUNELEFBNENDLENBNUN3QyxFQUFFLENBQUMsU0FBUyxHQTRDcEQ7a0JBNUNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGNoRWZmZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBzdGFyOiBjYy5Ob2RlO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGdsb3c6IGNjLk5vZGU7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgc3Rhcl8yOiBjYy5Ob2RlO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGNpcmNsZTogY2MuTm9kZTtcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBjYy50d2Vlbih0aGlzLnN0YXIpXHJcbiAgICAgIC50bygwLjUsIHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgY2MuVmVjMygwLCAyMCwgMCksXHJcbiAgICAgICAgc2NhbGU6IDEuMixcclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgY2MudHdlZW4odGhpcy5zdGFyXzIpXHJcbiAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEuMyB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmVsYXN0aWNPdXQgfSlcclxuICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbiB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMuY2lyY2xlKVxyXG4gICAgICAudG8oMC4yNSwgeyBvcGFjaXR5OiAyNTUsIHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuZWxhc3RpY091dCB9KVxyXG4gICAgICAudG8oMC4yNSwgeyBvcGFjaXR5OiAwLCBzY2FsZTogMS41IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gICAgICBcclxuICAgIGNjLnR3ZWVuKHRoaXMuZ2xvdylcclxuICAgICAgLnRvKFxyXG4gICAgICAgIDEsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcm90YXRpb246IC0zNjAsXHJcbiAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBlYXNpbmc6IFwicXVhZE91dFwiIH1cclxuICAgICAgKVxyXG4gICAgICAvLyAudG8oMS41LCB7XHJcbiAgICAgIC8vICAgb3BhY2l0eTogMCxcclxuICAgICAgLy8gfSlcclxuICAgICAgLy8gLnVuaW9uKClcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==