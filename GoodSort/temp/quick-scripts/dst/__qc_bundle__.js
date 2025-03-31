
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/AdsManager');
require('./assets/scripts/Board');
require('./assets/scripts/CollisionManager');
require('./assets/scripts/Combo');
require('./assets/scripts/ComboEffect');
require('./assets/scripts/Component/ProgressBar');
require('./assets/scripts/Component/Responsive');
require('./assets/scripts/Component/Rocket');
require('./assets/scripts/Component/TimeCount');
require('./assets/scripts/Controller/GameController');
require('./assets/scripts/Controller/SoundController');
require('./assets/scripts/Controller/UIController');
require('./assets/scripts/Hand');
require('./assets/scripts/ScaleEffect');
require('./assets/scripts/config/Config');
require('./assets/scripts/config/GameConfig');
require('./assets/scripts/config/ItemConfig');
require('./assets/scripts/effect/MatchEffect');
require('./assets/scripts/gameplay/Item');
require('./assets/scripts/gameplay/Shelf');
require('./assets/scripts/gameplay/Slot');
require('./assets/scripts/utils/Singleton');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Component/Responsive.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0242bp4Y59D5ZeiRI9h+FzU', 'Responsive');
// scripts/Component/Responsive.ts

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
exports.Responsive = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overall = null;
        _this.warning = null;
        // @property(GamePlay)
        // GamePlay: GamePlay = null;
        // @property)
        //: = null;
        // state
        _this.device = "";
        _this.isRotate = false;
        _this.HORIZONTAL_IPX = "horizontal_IPX";
        _this.HORIZONTAL_TABLET = "horizontal_Tablet";
        _this.VERTICAL_IPX = "vertical_IPX";
        _this.VERTICAL_MOBILE = "vertical_Mobile";
        _this._timeCount = null;
        return _this;
    }
    Responsive.prototype.onLoad = function () {
    };
    Responsive.prototype.start = function () {
    };
    Responsive.prototype.handleRotate = function () {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            this.isRotate = true;
            this.setHorizontal();
        }
        else {
            this.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
        }
        else {
            this.setHorizontalForTablet();
        }
    };
    Responsive.prototype.setHorizontalForIpX = function () {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_IPX;
        this.overall.setScale(1, 1);
        if (this._timeCount) {
            this._timeCount.setPosition(0, 800);
        }
        // IPX
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 2) {
            this.warning.setScale(1.2 * 3.375, 0.36 * 4);
        }
        // IP 6 / 7 / 8
        else {
            this.warning.setScale(.97 * 3.375, 0.36 * 4);
        }
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        console.log("hor_tab");
        if (this._timeCount) {
            this._timeCount.setPosition(0, 800);
        }
        this.overall.setScale(1, 1);
        this.warning.setScale(0.71 * 3.375, 0.36 * 4);
    };
    Responsive.prototype.setVertical = function () {
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
            this.setIphoneX();
        }
        else {
            this.setMobile();
        }
    };
    Responsive.prototype.setIphoneX = function () {
        if (this.VERTICAL_IPX === this.device) {
            return;
        }
        this.device = this.VERTICAL_IPX;
        if (this._timeCount) {
            this._timeCount.setPosition(0, 850);
        }
        this.overall.setScale(0.9, 0.9);
        this.warning.setScale(0.28 * 3.375, 0.4 * 4);
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        this.overall.setScale(1, 1);
        if (this._timeCount) {
            this._timeCount.setPosition(0, 800);
        }
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 1.5) {
            if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6
                && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
                // mobile mode applovin
                this.warning.setScale(0.296 * 3.375, 0.42 * 4);
                return;
            }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.warning.setScale(0.296 * 3.375, 0.43 * 4);
        }
        else {
            // Ipad
            console.log("ver_tab");
            this.warning.setScale(0.4 * 3.375, 0.36 * 4);
        }
    };
    Responsive.prototype.setResObject = function (timeCount) {
        this._timeCount = timeCount;
        this.device = "";
        // console.log("check");
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "overall", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "warning", void 0);
    Responsive = __decorate([
        ccclass
    ], Responsive);
    return Responsive;
}(cc.Component));
exports.Responsive = Responsive;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29tcG9uZW50XFxSZXNwb25zaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFnQyw4QkFBWTtJQUE1QztRQUFBLHFFQXdKQztRQXRKRyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsc0JBQXNCO1FBQ3RCLDZCQUE2QjtRQUM3QixhQUFhO1FBQ2IsV0FBVztRQUVYLFFBQVE7UUFDUixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsb0JBQWMsR0FBVyxnQkFBZ0IsQ0FBQztRQUMxQyx1QkFBaUIsR0FBVyxtQkFBbUIsQ0FBQztRQUNoRCxrQkFBWSxHQUFXLGNBQWMsQ0FBQztRQUN0QyxxQkFBZSxHQUFXLGlCQUFpQixDQUFDO1FBMkg1QyxnQkFBVSxHQUFZLElBQUksQ0FBQzs7SUFZL0IsQ0FBQztJQXJJYSwyQkFBTSxHQUFoQjtJQUVBLENBQUM7SUFFUywwQkFBSyxHQUFmO0lBRUEsQ0FBQztJQUVPLGlDQUFZLEdBQXBCO1FBQ0ksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcs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QUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBRWxEO2FBQU07WUFDSCxPQUFPO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7SUFJTSxpQ0FBWSxHQUFuQixVQUFvQixTQUFrQjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQix3QkFBd0I7SUFFNUIsQ0FBQztJQUdTLDJCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFySkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNNO0lBSmYsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQXdKdEI7SUFBRCxpQkFBQztDQXhKRCxBQXdKQyxDQXhKK0IsRUFBRSxDQUFDLFNBQVMsR0F3SjNDO0FBeEpZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgUmVzcG9uc2l2ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG92ZXJhbGw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3YXJuaW5nOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShHYW1lUGxheSlcclxuICAgIC8vIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkpXHJcbiAgICAvLzogPSBudWxsO1xyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBkZXZpY2U6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEhPUklaT05UQUxfSVBYOiBzdHJpbmcgPSBcImhvcml6b250YWxfSVBYXCI7XHJcbiAgICBIT1JJWk9OVEFMX1RBQkxFVDogc3RyaW5nID0gXCJob3Jpem9udGFsX1RhYmxldFwiO1xyXG4gICAgVkVSVElDQUxfSVBYOiBzdHJpbmcgPSBcInZlcnRpY2FsX0lQWFwiO1xyXG4gICAgVkVSVElDQUxfTU9CSUxFOiBzdHJpbmcgPSBcInZlcnRpY2FsX01vYmlsZVwiO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSb3RhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPiBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzUm90YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JvdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlcnRpY2FsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIDwgMC42NSkge1xyXG4gICAgICAgICAgICAvLyBJcGhvbmUgNiAvIDYgcGx1cyAvIDcgLyA3IFBsdXMgLyBYXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvcklwWCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWxGb3JJcFgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuSE9SSVpPTlRBTF9JUFggPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5IT1JJWk9OVEFMX0lQWDtcclxuICAgICAgICB0aGlzLm92ZXJhbGwuc2V0U2NhbGUoMSwxKTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLl90aW1lQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGltZUNvdW50LnNldFBvc2l0aW9uKDAsIDgwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJUFhcclxuICAgICAgICBpZihjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgPj0gMikge1xyXG4gICAgICAgICAgICB0aGlzLndhcm5pbmcuc2V0U2NhbGUoMS4yICogMy4zNzUsIDAuMzYgKiA0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElQIDYgLyA3IC8gOFxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy53YXJuaW5nLnNldFNjYWxlKC45NyAqIDMuMzc1LCAwLjM2ICogNCk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9yVGFibGV0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkhPUklaT05UQUxfVEFCTEVUID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQ7ICAgXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaG9yX3RhYlwiKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5fdGltZUNvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWVDb3VudC5zZXRQb3NpdGlvbigwLCA4MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm92ZXJhbGwuc2V0U2NhbGUoMSwxKTtcclxuICAgICAgICB0aGlzLndhcm5pbmcuc2V0U2NhbGUoMC43MSAqIDMuMzc1LCAwLjM2ICogNCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VmVydGljYWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldElwaG9uZVgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1vYmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldElwaG9uZVgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuVkVSVElDQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfSVBYO1xyXG5cclxuICAgICAgICBpZih0aGlzLl90aW1lQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGltZUNvdW50LnNldFBvc2l0aW9uKDAsIDg1MCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm92ZXJhbGwuc2V0U2NhbGUoMC45LDAuOSk7XHJcbiAgICAgICAgdGhpcy53YXJuaW5nLnNldFNjYWxlKDAuMjggKiAzLjM3NSwgMC40ICAqIDQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0TW9iaWxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLlZFUlRJQ0FMX01PQklMRSA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfTU9CSUxFO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub3ZlcmFsbC5zZXRTY2FsZSgxLDEpO1xyXG4gICAgICAgIGlmKHRoaXMuX3RpbWVDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lQ291bnQuc2V0UG9zaXRpb24oMCwgODAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPiAxLjUpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA+PSAwLjYgXHJcbiAgICAgICAgICAgICYmIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNjIpIHtcclxuICAgICAgICAgICAgICAgIC8vIG1vYmlsZSBtb2RlIGFwcGxvdmluXHJcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmcuc2V0U2NhbGUoMC4yOTYgKiAzLjM3NSwgMC40MiAqIDQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJcGhvbmUgNiAvIDYgUGx1cyAvIDcgLyA3IFBsdXMgICBcclxuICAgICAgICAgICAgdGhpcy53YXJuaW5nLnNldFNjYWxlKDAuMjk2ICogMy4zNzUsIDAuNDMgKiA0KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSXBhZFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZlcl90YWJcIik7XHJcbiAgICAgICAgICAgIHRoaXMud2FybmluZy5zZXRTY2FsZSgwLjQgKiAzLjM3NSwgMC4zNiAqIDQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgX3RpbWVDb3VudDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgc2V0UmVzT2JqZWN0KHRpbWVDb3VudDogY2MuTm9kZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3RpbWVDb3VudCA9IHRpbWVDb3VudDtcclxuICAgICAgICB0aGlzLmRldmljZSA9IFwiXCI7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGVja1wiKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSb3RhdGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/CollisionManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe5daaJLUZJII2AqQMrSiJz', 'CollisionManager');
// scripts/CollisionManager.ts

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
var director = cc.director;
var CollisionManager = /** @class */ (function (_super) {
    __extends(CollisionManager, _super);
    function CollisionManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollisionManager.prototype.start = function () { };
    CollisionManager.prototype.onLoad = function () {
        director.getCollisionManager().enabled = true;
        // director.getCollisionManager().enabledDebugDraw = true;
        // director.getCollisionManager().enabledDrawBoundingBox = true;
    };
    CollisionManager = __decorate([
        ccclass
    ], CollisionManager);
    return CollisionManager;
}(cc.Component));
exports.default = CollisionManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29sbGlzaW9uTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUNwQyxJQUFBLFFBQVEsR0FBSyxFQUFFLFNBQVAsQ0FBUTtBQUd4QjtJQUE4QyxvQ0FBWTtJQUExRDs7SUFPQSxDQUFDO0lBTlcsZ0NBQUssR0FBZixjQUF5QixDQUFDO0lBQ2hCLGlDQUFNLEdBQWhCO1FBQ0UsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUM5QywwREFBMEQ7UUFDMUQsZ0VBQWdFO0lBQ2xFLENBQUM7SUFOa0IsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0FPcEM7SUFBRCx1QkFBQztDQVBELEFBT0MsQ0FQNkMsRUFBRSxDQUFDLFNBQVMsR0FPekQ7a0JBUG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmNvbnN0IHsgZGlyZWN0b3IgfSA9IGNjO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlzaW9uTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge31cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgLy8gZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xyXG4gICAgLy8gZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREcmF3Qm91bmRpbmdCb3ggPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/Singleton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '441d656bHlMPpyDY1fpDC7F', 'Singleton');
// scripts/utils/Singleton.ts

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
var Singleton = /** @class */ (function (_super) {
    __extends(Singleton, _super);
    function Singleton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Singleton.Instance = function (c) {
        if (this._instance == null) {
            this._instance = new c();
        }
        return this._instance;
    };
    Singleton._instance = null;
    Singleton = __decorate([
        ccclass
    ], Singleton);
    return Singleton;
}(cc.Component));
exports.default = Singleton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdXRpbHNcXFNpbmdsZXRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyw2QkFBWTtJQUF0RDs7SUFRQSxDQUFDO0lBUGlCLGtCQUFRLEdBQXRCLFVBQTBCLENBQWU7UUFDckMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7U0FDNUI7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNhLG1CQUFTLEdBQUcsSUFBSSxDQUFDO0lBUGQsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQVE3QjtJQUFELGdCQUFDO0NBUkQsQUFRQyxDQVJ5QyxFQUFFLENBQUMsU0FBUyxHQVFyRDtrQkFSb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5nbGV0b248VD4gZXh0ZW5kcyBjYy5Db21wb25lbnR7XHJcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlPFQ+KGM6IHtuZXcoKTogVDsgfSkgOiBUe1xyXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgYygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIF9pbnN0YW5jZSA9IG51bGw7XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Hand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18398oync9Di7q0xYZioUT+', 'Hand');
// scripts/Hand.ts

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
var Hand = /** @class */ (function (_super) {
    __extends(Hand, _super);
    function Hand() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.startItem = null;
        _this.endSlot = null;
        _this.endItem = null;
        _this.endPosition = null;
        return _this;
        // update (dt) {}
    }
    Hand.prototype.startMove = function () {
        if (this.startItem === null || this.endPosition === null) {
            this.node.active = false;
            return;
        }
        this.node.active = true;
        var offset = new cc.Vec3(80, -25, 0);
        var offset2 = new cc.Vec2(30, -25);
        // const tempPos = this.endSlot.node.parent.convertToWorldSpaceAR(
        //   this.endSlot.node.getPosition()
        // );
        // let endPos = this.startItem.node.parent.convertToWorldSpaceAR(tempPos);
        this.node.setParent(this.startItem.node.parent);
        this.node.setPosition(this.startItem.node.position.add(offset));
        cc.tween(this.node)
            .repeatForever(cc
            .tween(this.node)
            .delay(0.4)
            .to(1.2, {
            position: this.endPosition.add(offset),
        })
            .then(cc.tween(this.node).to(0, {
            position: this.startItem.node.position.add(offset),
        })))
            .start();
    };
    Hand.prototype.setStartItem = function (item) {
        this.startItem = item;
    };
    Hand.prototype.setEndSlot = function (item) {
        if (this.endSlot === null) {
            this.endSlot = item;
        }
    };
    Hand.prototype.setEndItem = function (item) {
        if (this.endItem === null) {
            this.endItem = item;
        }
    };
    Hand.prototype.setEndPosition = function (endPosition) {
        this.endPosition = endPosition;
    };
    Hand.prototype.start = function () { };
    Hand = __decorate([
        ccclass
    ], Hand);
    return Hand;
}(cc.Component));
exports.default = Hand;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSGFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUNFLHdCQUF3QjtRQUQxQixxRUFnRUM7UUE3REMsZUFBZTtRQUVQLGVBQVMsR0FBUyxJQUFJLENBQUM7UUFDdkIsYUFBTyxHQUFTLElBQUksQ0FBQztRQUNyQixhQUFPLEdBQVMsSUFBSSxDQUFDO1FBQ3JCLGlCQUFXLEdBQVksSUFBSSxDQUFDOztRQXVEcEMsaUJBQWlCO0lBQ25CLENBQUM7SUFyREMsd0JBQVMsR0FBVDtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxrRUFBa0U7UUFDbEUsb0NBQW9DO1FBQ3BDLEtBQUs7UUFDTCwwRUFBMEU7UUFFMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNoQixhQUFhLENBQ1osRUFBRTthQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2hCLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixFQUFFLENBQUMsR0FBRyxFQUFFO1lBQ1AsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztTQUN2QyxDQUFDO2FBQ0QsSUFBSSxDQUNILEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1NBQ25ELENBQUMsQ0FDSCxDQUNKO2FBQ0EsS0FBSyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsMkJBQVksR0FBWixVQUFhLElBQVU7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUNELHlCQUFVLEdBQVYsVUFBVyxJQUFVO1FBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBQ0QseUJBQVUsR0FBVixVQUFXLElBQVU7UUFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQjtJQUNILENBQUM7SUFDRCw2QkFBYyxHQUFkLFVBQWUsV0FBb0I7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUdELG9CQUFLLEdBQUwsY0FBVSxDQUFDO0lBN0RRLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FnRXhCO0lBQUQsV0FBQztDQWhFRCxBQWdFQyxDQWhFaUMsRUFBRSxDQUFDLFNBQVMsR0FnRTdDO2tCQWhFb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBJdGVtIGZyb20gXCIuL2dhbWVwbGF5L0l0ZW1cIjtcclxuaW1wb3J0IFNsb3QgZnJvbSBcIi4vZ2FtZXBsYXkvU2xvdFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgcHJpdmF0ZSBzdGFydEl0ZW06IEl0ZW0gPSBudWxsO1xyXG4gIHByaXZhdGUgZW5kU2xvdDogU2xvdCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBlbmRJdGVtOiBJdGVtID0gbnVsbDtcclxuICBwcml2YXRlIGVuZFBvc2l0aW9uOiBjYy5WZWMzID0gbnVsbDtcclxuXHJcblxyXG4gIHN0YXJ0TW92ZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXJ0SXRlbSA9PT0gbnVsbCB8fCB0aGlzLmVuZFBvc2l0aW9uID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgbGV0IG9mZnNldCA9IG5ldyBjYy5WZWMzKDgwLCAtMjUsIDApO1xyXG4gICAgbGV0IG9mZnNldDIgPSBuZXcgY2MuVmVjMigzMCwgLTI1KTtcclxuICAgIC8vIGNvbnN0IHRlbXBQb3MgPSB0aGlzLmVuZFNsb3Qubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKFxyXG4gICAgLy8gICB0aGlzLmVuZFNsb3Qubm9kZS5nZXRQb3NpdGlvbigpXHJcbiAgICAvLyApO1xyXG4gICAgLy8gbGV0IGVuZFBvcyA9IHRoaXMuc3RhcnRJdGVtLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0ZW1wUG9zKTtcclxuXHJcbiAgICB0aGlzLm5vZGUuc2V0UGFyZW50KHRoaXMuc3RhcnRJdGVtLm5vZGUucGFyZW50KTtcclxuICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLnN0YXJ0SXRlbS5ub2RlLnBvc2l0aW9uLmFkZChvZmZzZXQpKTtcclxuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgY2NcclxuICAgICAgICAgIC50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAuZGVsYXkoMC40KVxyXG4gICAgICAgICAgLnRvKDEuMiwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5lbmRQb3NpdGlvbi5hZGQob2Zmc2V0KSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuc3RhcnRJdGVtLm5vZGUucG9zaXRpb24uYWRkKG9mZnNldCksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApXHJcbiAgICAgIClcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG4gIHNldFN0YXJ0SXRlbShpdGVtOiBJdGVtKSB7XHJcbiAgICB0aGlzLnN0YXJ0SXRlbSA9IGl0ZW07XHJcbiAgfVxyXG4gIHNldEVuZFNsb3QoaXRlbTogU2xvdCkge1xyXG4gICAgaWYgKHRoaXMuZW5kU2xvdCA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmVuZFNsb3QgPSBpdGVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRFbmRJdGVtKGl0ZW06IEl0ZW0pIHtcclxuICAgIGlmICh0aGlzLmVuZEl0ZW0gPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5lbmRJdGVtID0gaXRlbTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0RW5kUG9zaXRpb24oZW5kUG9zaXRpb246IGNjLlZlYzMpIHtcclxuICAgIHRoaXMuZW5kUG9zaXRpb24gPSBlbmRQb3NpdGlvbjtcclxuICB9XHJcblxyXG5cclxuICBzdGFydCgpIHsgfVxyXG5cclxuICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ComboEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae7b5Z81DlLEZ9r9hIjqDEF', 'ComboEffect');
// scripts/ComboEffect.ts

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
var ComboEffect = /** @class */ (function (_super) {
    __extends(ComboEffect, _super);
    function ComboEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComboEffect.prototype.start = function () {
        cc.tween(this.node)
            .delay(0.7)
            .to(1.5, {
            opacity: 0,
        })
            .start();
    };
    ComboEffect = __decorate([
        ccclass
    ], ComboEffect);
    return ComboEffect;
}(cc.Component));
exports.default = ComboEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29tYm9FZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBU0EsQ0FBQztJQVJDLDJCQUFLLEdBQUw7UUFDRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDaEIsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFSa0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQVMvQjtJQUFELGtCQUFDO0NBVEQsQUFTQyxDQVR3QyxFQUFFLENBQUMsU0FBUyxHQVNwRDtrQkFUb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21ib0VmZmVjdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgc3RhcnQoKSB7XHJcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgIC5kZWxheSgwLjcpXHJcbiAgICAgIC50bygxLjUsIHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/config/Config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63518mv8qRB/au7YZOxeUpQ', 'Config');
// scripts/config/Config.ts

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
var ItemConfig_1 = require("./ItemConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Config = /** @class */ (function (_super) {
    __extends(Config, _super);
    function Config() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Config_1 = Config;
    Object.defineProperty(Config, "Instance", {
        get: function () {
            var _a;
            if (this._instance == null) {
                this._instance = (_a = cc.director
                    .getScene()) === null || _a === void 0 ? void 0 : _a.getComponentInChildren(Config_1);
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    var Config_1;
    Config._instance = null;
    __decorate([
        property([ItemConfig_1.default])
    ], Config.prototype, "itemConfig", void 0);
    Config = Config_1 = __decorate([
        ccclass
    ], Config);
    return Config;
}(cc.Component));
exports.default = Config;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29uZmlnXFxDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEOztJQWFBLENBQUM7ZUFib0IsTUFBTTtJQUt6QixzQkFBVyxrQkFBUTthQUFuQjs7WUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO2dCQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQUEsRUFBRSxDQUFDLFFBQVE7cUJBQ3pCLFFBQVEsRUFBRSwwQ0FDVCxzQkFBc0IsQ0FBQyxRQUFNLENBQVcsQ0FBQzthQUM5QztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTs7SUFSTSxnQkFBUyxHQUFrQixJQUFJLENBQUM7SUFGdkM7UUFEQyxRQUFRLENBQUMsQ0FBQyxvQkFBVSxDQUFDLENBQUM7OENBQ0E7SUFGSixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBYTFCO0lBQUQsYUFBQztDQWJELEFBYUMsQ0FibUMsRUFBRSxDQUFDLFNBQVMsR0FhL0M7a0JBYm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXRlbUNvbmZpZyBmcm9tIFwiLi9JdGVtQ29uZmlnXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlnIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoW0l0ZW1Db25maWddKVxyXG4gIGl0ZW1Db25maWc6IEl0ZW1Db25maWc7XHJcblxyXG4gIHN0YXRpYyBfaW5zdGFuY2U6IENvbmZpZyB8IG51bGwgPSBudWxsO1xyXG4gIHN0YXRpYyBnZXQgSW5zdGFuY2UoKTogQ29uZmlnIHtcclxuICAgIGlmICh0aGlzLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gY2MuZGlyZWN0b3JcclxuICAgICAgICAuZ2V0U2NlbmUoKVxyXG4gICAgICAgID8uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihDb25maWcpIGFzIENvbmZpZztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameplay/Shelf.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ad77UEmdJI8qCQc8KWemOr', 'Shelf');
// scripts/gameplay/Shelf.ts

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
exports.ShelfType = void 0;
var ProgressBar_1 = require("../Component/ProgressBar");
var GameConfig_1 = require("../config/GameConfig");
var SoundController_1 = require("../Controller/SoundController");
var Item_1 = require("./Item");
var Slot_1 = require("./Slot");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Shelf = /** @class */ (function (_super) {
    __extends(Shelf, _super);
    function Shelf() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shelfSprites = [];
        _this.slots = [];
        _this.layers = [];
        // isActive: boolean = true;
        // itemInShelfs: Item[] = [];
        // @property(cc.Prefab)
        // rocketHelper: cc.Prefab = null;
        _this._Board = null;
        _this._itemContainer = null;
        return _this;
    }
    Shelf.prototype.onLoad = function () {
        this.sprite = this.getComponent(cc.Sprite);
    };
    // _isHasRocket: boolean = false;
    // _isSpawnRocket: boolean = false;
    Shelf.prototype.start = function () {
        // const num: number = cc.math.randomRangeInt(0, 2);
        // const random: boolean = num === 1 ? true : false;
        // if(random) this._isHasRocket = true;
    };
    // public _canSpawnRocket: boolean = false;
    // _rocket: Rocket = null;
    // private spawnRocket(pos: cc.Vec2, parent: cc.Node): void {
    //   if (!this._canSpawnRocket || ConfigData.Helper.maxRocketCanSpawn <= 0) return;
    //   // this._isSpawnRocket = true;
    //   ConfigData.Helper.maxRocketCanSpawn -= 1;
    //   const _r = cc.instantiate(this.rocketHelper);
    //   _r.parent = parent;
    //   _r.setPosition(0, 130);
    //   _r.setScale(0.23);
    //   this._rocket = _r.getComponent(Rocket);
    //   parent.getComponent(Item)._isHasRocket = true;
    //   // const _rWPos = parent.convertToWorldSpaceAR(_r.getPosition());
    //   // ConfigData.Idea.fakeRocketPoses.push(parent.getPosition());
    //   // ConfigData.Idea.fakeRocketPoses.push(this.node.getPosition());
    //   ConfigData.Idea.shelf.push(this);
    // }
    Shelf.prototype.initialize = function () { };
    Shelf.prototype.addItem = function (itemId, positionIndex, layer, parent, board, config) {
        var item = cc.instantiate(this.itemPrefab).getComponent(Item_1.default);
        item._Board = board;
        item._Config = config;
        item.setId(itemId);
        if (this.layers[layer] == null) {
            this.layers[layer] = [];
        }
        this.layers[layer].push(item);
        this.node.addChild(item.node, -1 * layer);
        var tempPos = item.node.parent.convertToWorldSpaceAR(this.slots[positionIndex].node
            .getPosition()
            .add(new cc.Vec2(0, 0)));
        var tempBehindPos = item.node.parent.convertToWorldSpaceAR(this.slots[positionIndex].node
            .getPosition()
            .add(new cc.Vec2(0, layer * GameConfig_1.layoutConfig.backItemOffsetY)));
        var itemPos = parent.convertToNodeSpaceAR(tempPos);
        item.node.setParent(parent);
        item.node.setPosition(itemPos);
        var behindPos = parent.convertToNodeSpaceAR(tempBehindPos);
        this._itemContainer = parent;
        if (layer == 0) {
            this.slots[positionIndex].setItem(item);
            item.setSlot(this.slots[positionIndex]);
        }
        item.handleMoveToBehind(behindPos, layer);
        item.setIndex(positionIndex);
        // item.node.setScale(0.1, 0.1);
        return item;
    };
    Shelf.prototype.setShelfType = function (shelfType) {
        switch (shelfType) {
            case ShelfType.Middle:
                this.sprite.spriteFrame = this.shelfSprites[0];
                break;
            case ShelfType.Left:
                this.sprite.spriteFrame = this.shelfSprites[1];
                break;
            case ShelfType.Right:
                this.sprite.spriteFrame = this.shelfSprites[2];
                this.node.scaleX = -1;
                break;
            default:
                break;
        }
    };
    Shelf.prototype.testMatch = function (lastItemId, layer) {
        if (this.layers[layer] == null) {
            return false;
        }
        if (this.layers[layer].length < 2)
            return false;
        if (this.layers[layer][0].id == this.layers[layer][1].id &&
            this.layers[layer][0].id == lastItemId) {
            return true;
        }
        return false;
    };
    Shelf.prototype.checkMatch = function () {
        for (var i = 0; i < this.slots.length; i++) {
            if (this.slots[i].isEmpty())
                return false;
        }
        if (this.slots[0].item.id === this.slots[1].item.id &&
            this.slots[0].item.id === this.slots[2].item.id) {
            var effectPos = this._Board.node.convertToNodeSpaceAR(this.node.parent.convertToWorldSpaceAR(this.node.position));
            for (var i = 0; i < this.slots.length; i++) {
                // this.slots[i].item._isHasRocket && ConfigData.Idea.isShelfExplosionWhenHitRocket && this.changeParentRocket()
                // this.slots[i].item._isHasRocket
                //   && ConfigData.Idea.isShelfExplosionWhenHitRocket
                //   && this._Board.createRockets(effectPos);
                this.removeItem(this.slots[i].item);
                this.slots[i].item.match();
                this.slots[i].setEmpty();
            }
            // console.log(this.slots[0].item);
            // console.log(this.slots[1].item);
            // console.log(this.slots[2].item);
            // this.IsMatchWithRocket() && ConfigData.Idea.isShelfExplosionWhenHitRocket && this._rocket.activeRocket();
            this.createMatchFx(effectPos);
            this.checkBackLayer();
            ProgressBar_1.ProgressBar.Instance.fillRangeProgress();
            SoundController_1.SoundController.Instance(SoundController_1.SoundController).playPrefabSound(SoundController_1.PrefabSoundTrack.tripleMatchSortSound);
            // this._Board.updateCombo();
            this._Board.updateMatchCount();
            return true;
        }
        return false;
    };
    Shelf.prototype.changeParentRocket = function () {
        // const _wp = this._rocket.node.convertToWorldSpaceAR(this._rocket.node.getPosition())
        // this._rocket.node.parent = this._itemContainer;
        // this._rocket.node.setPosition(this._itemContainer.convertToNodeSpaceAR(_wp))
        // this._rocket.activeRocket();
        // Board.Instance.setRocketHighestZindex();
    };
    Shelf.prototype.createMatchFx = function (effectPos) {
        var effect = cc.instantiate(this.matchPrefab);
        effect.setParent(this._Board.node);
        effect.setPosition(effectPos);
    };
    Shelf.prototype.checkBackLayer = function () {
        var allEmpty = true;
        for (var i = 0; i < this.slots.length; i++) {
            if (!this.slots[i].isEmpty()) {
                allEmpty = false;
            }
        }
        if (allEmpty) {
            var lay = 0;
            for (var i = 0; i < this.layers.length; i++) {
                if (this.layers[i].length > 0) {
                    if (lay == 0) {
                        for (var j = 0; j < this.layers[i].length; j++) {
                            var item = this.layers[i][j];
                            if (item === null || item === undefined)
                                continue;
                            item.setActive(true);
                            item.setSlot(this.slots[item.index]);
                            this.slots[item.index].setItem(this.layers[i][j]);
                        }
                    }
                    for (var j = 0; j < this.layers[i].length; j++) {
                        var index = j;
                        var item = this.layers[i][index];
                        if (item === null || item === undefined)
                            continue;
                        item.node.active = lay < 2;
                        var tempPos = this.node.convertToWorldSpaceAR(this.slots[item.index].node
                            .getPosition()
                            .add(new cc.Vec2(0, lay * GameConfig_1.layoutConfig.backItemOffsetY)));
                        var target = item.node.parent.convertToNodeSpaceAR(tempPos);
                        item.moveTo(target);
                    }
                    lay++;
                }
            }
        }
    };
    Shelf.prototype.replaceItem = function (oldItem, newItem) {
        for (var i = 0; i < this.layers.length; i++) {
            if (this.layers[i] === null || this.layers[i] === undefined)
                continue;
            for (var j = 0; j < this.layers[i].length; j++) {
                if (this.layers[i][j] === oldItem) {
                    this.layers[i][j] = newItem;
                    return;
                }
            }
        }
    };
    Shelf.prototype.removeItem = function (item) {
        for (var i = 0; i < this.layers.length; i++) {
            if (this.layers[i] === null || this.layers[i] === undefined)
                continue;
            for (var j = 0; j < this.layers[i].length; j++) {
                if (this.layers[i][j] === item) {
                    this.layers[i].splice(j, 1);
                    return;
                }
            }
        }
    };
    __decorate([
        property([cc.Prefab])
    ], Shelf.prototype, "itemPrefab", void 0);
    __decorate([
        property([cc.Prefab])
    ], Shelf.prototype, "matchPrefab", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Shelf.prototype, "shelfSprites", void 0);
    __decorate([
        property([Slot_1.default])
    ], Shelf.prototype, "slots", void 0);
    Shelf = __decorate([
        ccclass
    ], Shelf);
    return Shelf;
}(cc.Component));
exports.default = Shelf;
var ShelfType;
(function (ShelfType) {
    ShelfType[ShelfType["Middle"] = 0] = "Middle";
    ShelfType[ShelfType["Left"] = 1] = "Left";
    ShelfType[ShelfType["Right"] = 2] = "Right";
})(ShelfType = exports.ShelfType || (exports.ShelfType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZXBsYXlcXFNoZWxmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx3REFBdUQ7QUFHdkQsbURBQWlGO0FBQ2pGLGlFQUFrRjtBQUNsRiwrQkFBMEI7QUFDMUIsK0JBQTBCO0FBRXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBd1FDO1FBaFFDLGtCQUFZLEdBQXFCLEVBQUUsQ0FBQztRQUdwQyxXQUFLLEdBQVcsRUFBRSxDQUFDO1FBRVosWUFBTSxHQUFhLEVBQUUsQ0FBQztRQUU3Qiw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLHVCQUF1QjtRQUN2QixrQ0FBa0M7UUFFbEMsWUFBTSxHQUFVLElBQUksQ0FBQztRQXVDckIsb0JBQWMsR0FBWSxJQUFJLENBQUM7O0lBNk1qQyxDQUFDO0lBbFBDLHNCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFHRCxpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ3pCLHFCQUFLLEdBQWY7UUFDRSxvREFBb0Q7UUFDcEQsb0RBQW9EO1FBQ3BELHVDQUF1QztJQUN6QyxDQUFDO0lBR0QsMkNBQTJDO0lBQzNDLDBCQUEwQjtJQUMxQiw2REFBNkQ7SUFDN0QsbUZBQW1GO0lBQ25GLG1DQUFtQztJQUNuQyw4Q0FBOEM7SUFDOUMsa0RBQWtEO0lBQ2xELHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLDRDQUE0QztJQUM1QyxtREFBbUQ7SUFDbkQsc0VBQXNFO0lBQ3RFLG1FQUFtRTtJQUNuRSxzRUFBc0U7SUFDdEUsc0NBQXNDO0lBQ3RDLElBQUk7SUFJ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LElBQUksQ0FBQyxFQUFFO3dCQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDOUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDL0IsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxTQUFTO2dDQUFFLFNBQVM7NEJBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDbkQ7cUJBQ0Y7b0JBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUM5QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBQ2QsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxTQUFTOzRCQUFFLFNBQVM7d0JBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7d0JBQzNCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUk7NkJBQ3hCLFdBQVcsRUFBRTs2QkFDYixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcseUJBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUMzRCxDQUFDO3dCQUNGLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUNyQjtvQkFDRCxHQUFHLEVBQUUsQ0FBQztpQkFDUDthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBR0QsMkJBQVcsR0FBWCxVQUFZLE9BQWEsRUFBRSxPQUFPO1FBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUztnQkFBRSxTQUFTO1lBQ3RFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDOUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQU8sRUFBRTtvQkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7b0JBQzVCLE9BQU87aUJBQ1I7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUdELDBCQUFVLEdBQVYsVUFBVyxJQUFVO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUztnQkFBRSxTQUFTO1lBQ3RFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDOUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtvQkFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM1QixPQUFPO2lCQUNSO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFwUUQ7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7NkNBQ0E7SUFHdEI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7OENBQ0M7SUFHdkI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7K0NBQ1M7SUFHcEM7UUFEQyxRQUFRLENBQUMsQ0FBQyxjQUFJLENBQUMsQ0FBQzt3Q0FDRTtJQVhBLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0F3UXpCO0lBQUQsWUFBQztDQXhRRCxBQXdRQyxDQXhRa0MsRUFBRSxDQUFDLFNBQVMsR0F3UTlDO2tCQXhRb0IsS0FBSztBQXlRMUIsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ25CLDZDQUFNLENBQUE7SUFDTix5Q0FBSSxDQUFBO0lBQ0osMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFKVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUlwQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb2FyZCBmcm9tIFwiLi4vQm9hcmRcIjtcclxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXIgfSBmcm9tIFwiLi4vQ29tcG9uZW50L1Byb2dyZXNzQmFyXCI7XHJcbmltcG9ydCB7IFJvY2tldCB9IGZyb20gXCIuLi9Db21wb25lbnQvUm9ja2V0XCI7XHJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4uL2NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0IHsgYW5pbWF0aW9uQ29uZmlnLCBDb25maWdEYXRhLCBsYXlvdXRDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IHsgUHJlZmFiU291bmRUcmFjaywgU291bmRDb250cm9sbGVyIH0gZnJvbSBcIi4uL0NvbnRyb2xsZXIvU291bmRDb250cm9sbGVyXCI7XHJcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcclxuaW1wb3J0IFNsb3QgZnJvbSBcIi4vU2xvdFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoZWxmIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgaXRlbVByZWZhYjogY2MuUHJlZmFiO1xyXG5cclxuICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgbWF0Y2hQcmVmYWI6IGNjLlByZWZhYjtcclxuXHJcbiAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgc2hlbGZTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShbU2xvdF0pXHJcbiAgc2xvdHM6IFNsb3RbXSA9IFtdO1xyXG4gIHB1YmxpYyBzcHJpdGU6IGNjLlNwcml0ZTtcclxuICBwdWJsaWMgbGF5ZXJzOiBJdGVtW11bXSA9IFtdO1xyXG5cclxuICAvLyBpc0FjdGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgLy8gaXRlbUluU2hlbGZzOiBJdGVtW10gPSBbXTtcclxuICAvLyBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gIC8vIHJvY2tldEhlbHBlcjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgX0JvYXJkOiBCb2FyZCA9IG51bGw7XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuc3ByaXRlID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICB9XHJcblxyXG5cclxuICAvLyBfaXNIYXNSb2NrZXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvLyBfaXNTcGF3blJvY2tldDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgIC8vIGNvbnN0IG51bTogbnVtYmVyID0gY2MubWF0aC5yYW5kb21SYW5nZUludCgwLCAyKTtcclxuICAgIC8vIGNvbnN0IHJhbmRvbTogYm9vbGVhbiA9IG51bSA9PT0gMSA/IHRydWUgOiBmYWxzZTtcclxuICAgIC8vIGlmKHJhbmRvbSkgdGhpcy5faXNIYXNSb2NrZXQgPSB0cnVlO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIHB1YmxpYyBfY2FuU3Bhd25Sb2NrZXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvLyBfcm9ja2V0OiBSb2NrZXQgPSBudWxsO1xyXG4gIC8vIHByaXZhdGUgc3Bhd25Sb2NrZXQocG9zOiBjYy5WZWMyLCBwYXJlbnQ6IGNjLk5vZGUpOiB2b2lkIHtcclxuICAvLyAgIGlmICghdGhpcy5fY2FuU3Bhd25Sb2NrZXQgfHwgQ29uZmlnRGF0YS5IZWxwZXIubWF4Um9ja2V0Q2FuU3Bhd24gPD0gMCkgcmV0dXJuO1xyXG4gIC8vICAgLy8gdGhpcy5faXNTcGF3blJvY2tldCA9IHRydWU7XHJcbiAgLy8gICBDb25maWdEYXRhLkhlbHBlci5tYXhSb2NrZXRDYW5TcGF3biAtPSAxO1xyXG4gIC8vICAgY29uc3QgX3IgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJvY2tldEhlbHBlcik7XHJcbiAgLy8gICBfci5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgLy8gICBfci5zZXRQb3NpdGlvbigwLCAxMzApO1xyXG4gIC8vICAgX3Iuc2V0U2NhbGUoMC4yMyk7XHJcbiAgLy8gICB0aGlzLl9yb2NrZXQgPSBfci5nZXRDb21wb25lbnQoUm9ja2V0KTtcclxuICAvLyAgIHBhcmVudC5nZXRDb21wb25lbnQoSXRlbSkuX2lzSGFzUm9ja2V0ID0gdHJ1ZTtcclxuICAvLyAgIC8vIGNvbnN0IF9yV1BvcyA9IHBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoX3IuZ2V0UG9zaXRpb24oKSk7XHJcbiAgLy8gICAvLyBDb25maWdEYXRhLklkZWEuZmFrZVJvY2tldFBvc2VzLnB1c2gocGFyZW50LmdldFBvc2l0aW9uKCkpO1xyXG4gIC8vICAgLy8gQ29uZmlnRGF0YS5JZGVhLmZha2VSb2NrZXRQb3Nlcy5wdXNoKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAvLyAgIENvbmZpZ0RhdGEuSWRlYS5zaGVsZi5wdXNoKHRoaXMpO1xyXG4gIC8vIH1cclxuXHJcblxyXG5cclxuICBpbml0aWFsaXplKCkgeyB9XHJcblxyXG5cclxuICBfaXRlbUNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgYWRkSXRlbShcclxuICAgIGl0ZW1JZDogbnVtYmVyLFxyXG4gICAgcG9zaXRpb25JbmRleDogbnVtYmVyLFxyXG4gICAgbGF5ZXI6IG51bWJlcixcclxuICAgIHBhcmVudDogY2MuTm9kZSxcclxuICAgIGJvYXJkOiBCb2FyZCxcclxuICAgIGNvbmZpZzogQ29uZmlnXHJcbiAgKTogSXRlbSB7XHJcbiAgICBjb25zdCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtUHJlZmFiKS5nZXRDb21wb25lbnQoSXRlbSk7XHJcbiAgICBpdGVtLl9Cb2FyZCA9IGJvYXJkO1xyXG4gICAgaXRlbS5fQ29uZmlnID0gY29uZmlnO1xyXG4gICAgaXRlbS5zZXRJZChpdGVtSWQpO1xyXG4gICAgaWYgKHRoaXMubGF5ZXJzW2xheWVyXSA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMubGF5ZXJzW2xheWVyXSA9IFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sYXllcnNbbGF5ZXJdLnB1c2goaXRlbSk7XHJcblxyXG4gICAgdGhpcy5ub2RlLmFkZENoaWxkKGl0ZW0ubm9kZSwgLTEgKiBsYXllcik7XHJcblxyXG4gICAgY29uc3QgdGVtcFBvcyA9IGl0ZW0ubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKFxyXG4gICAgICB0aGlzLnNsb3RzW3Bvc2l0aW9uSW5kZXhdLm5vZGVcclxuICAgICAgICAuZ2V0UG9zaXRpb24oKVxyXG4gICAgICAgIC5hZGQobmV3IGNjLlZlYzIoMCwgMCkpXHJcbiAgICApO1xyXG4gICAgY29uc3QgdGVtcEJlaGluZFBvcyA9IGl0ZW0ubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKFxyXG4gICAgICB0aGlzLnNsb3RzW3Bvc2l0aW9uSW5kZXhdLm5vZGVcclxuICAgICAgICAuZ2V0UG9zaXRpb24oKVxyXG4gICAgICAgIC5hZGQobmV3IGNjLlZlYzIoMCwgbGF5ZXIgKiBsYXlvdXRDb25maWcuYmFja0l0ZW1PZmZzZXRZKSlcclxuICAgICk7XHJcbiAgICBjb25zdCBpdGVtUG9zID0gcGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRlbXBQb3MpO1xyXG4gICAgaXRlbS5ub2RlLnNldFBhcmVudChwYXJlbnQpO1xyXG4gICAgaXRlbS5ub2RlLnNldFBvc2l0aW9uKGl0ZW1Qb3MpO1xyXG5cclxuICAgIGNvbnN0IGJlaGluZFBvcyA9IHBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0ZW1wQmVoaW5kUG9zKTtcclxuXHJcbiAgICB0aGlzLl9pdGVtQ29udGFpbmVyID0gcGFyZW50O1xyXG5cclxuICAgIGlmIChsYXllciA9PSAwKSB7XHJcbiAgICAgIHRoaXMuc2xvdHNbcG9zaXRpb25JbmRleF0uc2V0SXRlbShpdGVtKTtcclxuICAgICAgaXRlbS5zZXRTbG90KHRoaXMuc2xvdHNbcG9zaXRpb25JbmRleF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGl0ZW0uaGFuZGxlTW92ZVRvQmVoaW5kKGJlaGluZFBvcywgbGF5ZXIpO1xyXG4gICAgaXRlbS5zZXRJbmRleChwb3NpdGlvbkluZGV4KTtcclxuICAgIC8vIGl0ZW0ubm9kZS5zZXRTY2FsZSgwLjEsIDAuMSk7XHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9XHJcbiAgc2V0U2hlbGZUeXBlKHNoZWxmVHlwZTogU2hlbGZUeXBlKSB7XHJcbiAgICBzd2l0Y2ggKHNoZWxmVHlwZSkge1xyXG4gICAgICBjYXNlIFNoZWxmVHlwZS5NaWRkbGU6XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnNoZWxmU3ByaXRlc1swXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTaGVsZlR5cGUuTGVmdDpcclxuICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc2hlbGZTcHJpdGVzWzFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNoZWxmVHlwZS5SaWdodDpcclxuICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc2hlbGZTcHJpdGVzWzJdO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRlc3RNYXRjaChsYXN0SXRlbUlkOiBudW1iZXIsIGxheWVyOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmxheWVyc1tsYXllcl0gPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5sYXllcnNbbGF5ZXJdLmxlbmd0aCA8IDIpIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5sYXllcnNbbGF5ZXJdWzBdLmlkID09IHRoaXMubGF5ZXJzW2xheWVyXVsxXS5pZCAmJlxyXG4gICAgICB0aGlzLmxheWVyc1tsYXllcl1bMF0uaWQgPT0gbGFzdEl0ZW1JZFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBjaGVja01hdGNoKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNsb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnNsb3RzW2ldLmlzRW1wdHkoKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnNsb3RzWzBdLml0ZW0uaWQgPT09IHRoaXMuc2xvdHNbMV0uaXRlbS5pZCAmJlxyXG4gICAgICB0aGlzLnNsb3RzWzBdLml0ZW0uaWQgPT09IHRoaXMuc2xvdHNbMl0uaXRlbS5pZFxyXG4gICAgKSB7XHJcblxyXG4gICAgICBjb25zdCBlZmZlY3RQb3MgPSB0aGlzLl9Cb2FyZC5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5wb3NpdGlvbilcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbG90cy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNsb3RzW2ldLml0ZW0uX2lzSGFzUm9ja2V0ICYmIENvbmZpZ0RhdGEuSWRlYS5pc1NoZWxmRXhwbG9zaW9uV2hlbkhpdFJvY2tldCAmJiB0aGlzLmNoYW5nZVBhcmVudFJvY2tldCgpXHJcbiAgICAgICAgLy8gdGhpcy5zbG90c1tpXS5pdGVtLl9pc0hhc1JvY2tldFxyXG4gICAgICAgIC8vICAgJiYgQ29uZmlnRGF0YS5JZGVhLmlzU2hlbGZFeHBsb3Npb25XaGVuSGl0Um9ja2V0XHJcbiAgICAgICAgLy8gICAmJiB0aGlzLl9Cb2FyZC5jcmVhdGVSb2NrZXRzKGVmZmVjdFBvcyk7XHJcblxyXG4gICAgICAgIHRoaXMucmVtb3ZlSXRlbSh0aGlzLnNsb3RzW2ldLml0ZW0pO1xyXG4gICAgICAgIHRoaXMuc2xvdHNbaV0uaXRlbS5tYXRjaCgpO1xyXG4gICAgICAgIHRoaXMuc2xvdHNbaV0uc2V0RW1wdHkoKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2xvdHNbMF0uaXRlbSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2xvdHNbMV0uaXRlbSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2xvdHNbMl0uaXRlbSk7XHJcblxyXG4gICAgICAvLyB0aGlzLklzTWF0Y2hXaXRoUm9ja2V0KCkgJiYgQ29uZmlnRGF0YS5JZGVhLmlzU2hlbGZFeHBsb3Npb25XaGVuSGl0Um9ja2V0ICYmIHRoaXMuX3JvY2tldC5hY3RpdmVSb2NrZXQoKTtcclxuXHJcblxyXG4gICAgICB0aGlzLmNyZWF0ZU1hdGNoRngoZWZmZWN0UG9zKTtcclxuICAgICAgdGhpcy5jaGVja0JhY2tMYXllcigpO1xyXG4gICAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5maWxsUmFuZ2VQcm9ncmVzcygpO1xyXG4gICAgICBTb3VuZENvbnRyb2xsZXIuSW5zdGFuY2UoU291bmRDb250cm9sbGVyKS5wbGF5UHJlZmFiU291bmQoUHJlZmFiU291bmRUcmFjay50cmlwbGVNYXRjaFNvcnRTb3VuZCk7XHJcbiAgICAgIC8vIHRoaXMuX0JvYXJkLnVwZGF0ZUNvbWJvKCk7XHJcbiAgICAgIHRoaXMuX0JvYXJkLnVwZGF0ZU1hdGNoQ291bnQoKTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgY2hhbmdlUGFyZW50Um9ja2V0KCk6IHZvaWQge1xyXG4gICAgLy8gY29uc3QgX3dwID0gdGhpcy5fcm9ja2V0Lm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuX3JvY2tldC5ub2RlLmdldFBvc2l0aW9uKCkpXHJcbiAgICAvLyB0aGlzLl9yb2NrZXQubm9kZS5wYXJlbnQgPSB0aGlzLl9pdGVtQ29udGFpbmVyO1xyXG4gICAgLy8gdGhpcy5fcm9ja2V0Lm5vZGUuc2V0UG9zaXRpb24odGhpcy5faXRlbUNvbnRhaW5lci5jb252ZXJ0VG9Ob2RlU3BhY2VBUihfd3ApKVxyXG4gICAgLy8gdGhpcy5fcm9ja2V0LmFjdGl2ZVJvY2tldCgpO1xyXG4gICAgLy8gQm9hcmQuSW5zdGFuY2Uuc2V0Um9ja2V0SGlnaGVzdFppbmRleCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTWF0Y2hGeChlZmZlY3RQb3MpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVmZmVjdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubWF0Y2hQcmVmYWIpO1xyXG4gICAgZWZmZWN0LnNldFBhcmVudCh0aGlzLl9Cb2FyZC5ub2RlKTtcclxuICAgIGVmZmVjdC5zZXRQb3NpdGlvbihlZmZlY3RQb3MpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNoZWNrQmFja0xheWVyKCkge1xyXG4gICAgbGV0IGFsbEVtcHR5ID0gdHJ1ZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoIXRoaXMuc2xvdHNbaV0uaXNFbXB0eSgpKSB7XHJcbiAgICAgICAgYWxsRW1wdHkgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGFsbEVtcHR5KSB7XHJcbiAgICAgIGxldCBsYXkgPSAwO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGF5ZXJzW2ldLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGlmIChsYXkgPT0gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubGF5ZXJzW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMubGF5ZXJzW2ldW2pdO1xyXG4gICAgICAgICAgICAgIGlmIChpdGVtID09PSBudWxsIHx8IGl0ZW0gPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgaXRlbS5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgaXRlbS5zZXRTbG90KHRoaXMuc2xvdHNbaXRlbS5pbmRleF0pO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2xvdHNbaXRlbS5pbmRleF0uc2V0SXRlbSh0aGlzLmxheWVyc1tpXVtqXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5sYXllcnNbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gajtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMubGF5ZXJzW2ldW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLmFjdGl2ZSA9IGxheSA8IDI7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKFxyXG4gICAgICAgICAgICAgIHRoaXMuc2xvdHNbaXRlbS5pbmRleF0ubm9kZVxyXG4gICAgICAgICAgICAgICAgLmdldFBvc2l0aW9uKClcclxuICAgICAgICAgICAgICAgIC5hZGQobmV3IGNjLlZlYzIoMCwgbGF5ICogbGF5b3V0Q29uZmlnLmJhY2tJdGVtT2Zmc2V0WSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBpdGVtLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRlbXBQb3MpO1xyXG4gICAgICAgICAgICBpdGVtLm1vdmVUbyh0YXJnZXQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGF5Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmVwbGFjZUl0ZW0ob2xkSXRlbTogSXRlbSwgbmV3SXRlbSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxheWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5sYXllcnNbaV0gPT09IG51bGwgfHwgdGhpcy5sYXllcnNbaV0gPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5sYXllcnNbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnNbaV1bal0gPT09IG9sZEl0ZW0pIHtcclxuICAgICAgICAgIHRoaXMubGF5ZXJzW2ldW2pdID0gbmV3SXRlbTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICByZW1vdmVJdGVtKGl0ZW06IEl0ZW0pIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMubGF5ZXJzW2ldID09PSBudWxsIHx8IHRoaXMubGF5ZXJzW2ldID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubGF5ZXJzW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGF5ZXJzW2ldW2pdID09PSBpdGVtKSB7XHJcbiAgICAgICAgICB0aGlzLmxheWVyc1tpXS5zcGxpY2UoaiwgMSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5leHBvcnQgZW51bSBTaGVsZlR5cGUge1xyXG4gIE1pZGRsZSxcclxuICBMZWZ0LFxyXG4gIFJpZ2h0LFxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Component/ProgressBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29tcG9uZW50XFxQcm9ncmVzc0Jhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELGlFQUFtRjtBQUU3RSxJQUFBLEtBQThCLEVBQUUsQ0FBQyxVQUFVLEVBQXpDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQUlsRDtJQUFpQywrQkFBWTtJQUE3QztRQUFBLHFFQTZEQztRQWhERyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyxTQUFHLEdBQWMsRUFBRSxDQUFDO1FBT3BCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDOztJQXFDM0IsQ0FBQztvQkE3RFksV0FBVztJQUdwQixzQkFBVyx1QkFBUTthQUFuQjs7WUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQUEsRUFBRSxDQUFDLFFBQVE7cUJBQ3ZCLFFBQVEsRUFBRSwwQ0FDVCxzQkFBc0IsQ0FBQyxhQUFXLENBQWdCLENBQUM7YUFDNUQ7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFTUywyQkFBSyxHQUFmO0lBRUEsQ0FBQztJQUlNLHVDQUFpQixHQUF4QjtRQUFBLGlCQWlCQztRQWhCRyxJQUFJLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQztRQUMxQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDeEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNyRSxJQUFJLENBQUM7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdCLElBQUksS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JCLElBQU0sRUFBRSxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNyQyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3JCO1lBQ0QsS0FBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7WUFDckIsSUFBSSxLQUFJLENBQUMsVUFBVSxJQUFJLEdBQUcsRUFBRTtnQkFDeEIsdUJBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDN0IsaUNBQWUsQ0FBQyxRQUFRLENBQUMsaUNBQWUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLG1DQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzFGO1FBQ0wsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUdPLDhCQUFRLEdBQWhCLFVBQWlCLEVBQVc7UUFDeEIsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2FBQ2IsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDeEUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbkUsS0FBSyxFQUFFLENBQUM7UUFFVCxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUNmLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3RFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2xFLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7SUF6RE0scUJBQVMsR0FBdUIsSUFBSSxDQUFDO0lBVzVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ2E7SUFHakM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7NENBQ0E7SUFoQlgsV0FBVztRQUZ2QixPQUFPO1FBQ1AsSUFBSSxDQUFDLHVCQUF1QixDQUFDO09BQ2pCLFdBQVcsQ0E2RHZCO0lBQUQsa0JBQUM7Q0E3REQsQUE2REMsQ0E3RGdDLEVBQUUsQ0FBQyxTQUFTLEdBNkQ1QztBQTdEWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ0RhdGEgfSBmcm9tIFwiLi4vY29uZmlnL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IHsgRGVmYXVsdFNvdW5kVHJhY2ssIFNvdW5kQ29udHJvbGxlciB9IGZyb20gXCIuLi9Db250cm9sbGVyL1NvdW5kQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbkBtZW51KCdDb21wb25lbnQvUHJvZ3Jlc3NCYXInKVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXRpYyBfaW5zdGFuY2U6IFByb2dyZXNzQmFyIHwgbnVsbCA9IG51bGw7XHJcbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCk6IFByb2dyZXNzQmFyIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IGNjLmRpcmVjdG9yXHJcbiAgICAgICAgICAgICAgICAuZ2V0U2NlbmUoKVxyXG4gICAgICAgICAgICAgICAgPy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFByb2dyZXNzQmFyKSBhcyBQcm9ncmVzc0JhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBQcm9ncmVzc1Nwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgZnhzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBfZmlsbFJhbmdlOiBudW1iZXIgPSAwO1xyXG4gICAgX2ZpbGxUaW1lczogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBmaWxsUmFuZ2VQcm9ncmVzcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9maWxsUmFuZ2UgKz0gMC4zMzMzO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuUHJvZ3Jlc3NTcHJpdGUpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHsgZmlsbFJhbmdlOiB0aGlzLl9maWxsUmFuZ2UgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW4gfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaWxsIHByb2dyZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2ZpbGxUaW1lcyA8IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmeCA9IHRoaXMuZnhzW3RoaXMuX2ZpbGxUaW1lc107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVGWChmeCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maWxsVGltZXMgKz0gMTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9maWxsUmFuZ2UgPj0gMC45KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlnRGF0YS5HYW1lLmlzV2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBTb3VuZENvbnRyb2xsZXIuSW5zdGFuY2UoU291bmRDb250cm9sbGVyKS5wbGF5RGVmYXVsdFNvdW5kKERlZmF1bHRTb3VuZFRyYWNrLldpblNvdW5kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgYWN0aXZlRlgoZng6IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgICAgICBmeC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGNpcmNsZSA9IGZ4LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgIGNvbnN0IHN0YXIgPSBmeC5jaGlsZHJlblsxXTtcclxuICAgICAgICBcclxuICAgICAgICBjYy50d2VlbihzdGFyKVxyXG4gICAgICAgIC50bygwLjI1LCB7IHNjYWxlOiAxLjMsIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmVsYXN0aWNPdXQgfSlcclxuICAgICAgICAudG8oMC4yNSwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmVsYXN0aWNJbiB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gIFxyXG4gICAgICAgIGNjLnR3ZWVuKGNpcmNsZSlcclxuICAgICAgICAudG8oMC4yNSwgeyBvcGFjaXR5OiAyNTUsIHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuZWxhc3RpY091dCB9KVxyXG4gICAgICAgIC50bygwLjI1LCB7IG9wYWNpdHk6IDAsIHNjYWxlOiAxLjUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW4gfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/AdsManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90e40BwGAFK96eVWqu9Fh9X', 'AdsManager');
// scripts/AdsManager.ts

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
exports.AdsManager = void 0;
var SoundController_1 = require("./Controller/SoundController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AdsManager = /** @class */ (function (_super) {
    __extends(AdsManager, _super);
    function AdsManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.SoundController = null;
        return _this;
    }
    AdsManager.prototype.onLoad = function () {
    };
    AdsManager.prototype.start = function () {
        window.gameReady && window.gameReady();
    };
    AdsManager.prototype.installHandle = function () {
        // console.log("install");
        alert("install");
        this.SoundController.stopAllSound();
        // Constants.ironSource.isEndGame = true;
        window.gameEnd && window.gameEnd();
        //If ad network is tiktok
        if (typeof (playableSDK) != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }
        // If ad network is google ads
        if (typeof (ExitApi) != "undefined") {
            ExitApi.exit();
            return;
        }
        // If ad netwrok is ironsources
        if (typeof (dapi) != "undefined") {
            dapi.openStoreUrl();
            return;
        }
        // If ad network support MRAID 2.0
        if (typeof (mraid) != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open("https://play.google.com/store/apps/details?id=com.goods.tidy.challenge");
                return;
            }
            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/app/id6743524073?mt=8");
                return;
            }
            mraid.open("https://play.google.com/store/apps/details?id=com.goods.tidy.challenge");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    };
    __decorate([
        property(SoundController_1.SoundController)
    ], AdsManager.prototype, "SoundController", void 0);
    AdsManager = __decorate([
        ccclass
    ], AdsManager);
    return AdsManager;
}(cc.Component));
exports.AdsManager = AdsManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQWRzTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQStEO0FBRXpELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdDLDhCQUFZO0lBQTVDO1FBQUEscUVBMkRDO1FBekRHLHFCQUFlLEdBQW9CLElBQUksQ0FBQzs7SUF5RDVDLENBQUM7SUF2RGEsMkJBQU0sR0FBaEI7SUFFQSxDQUFDO0lBRVMsMEJBQUssR0FBZjtRQUNJLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFHTSxrQ0FBYSxHQUFwQjtRQUVJLDBCQUEwQjtRQUUxQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyx5Q0FBeUM7UUFDekMsTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFbkMseUJBQXlCO1FBQ3pCLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNyQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2xDLE9BQU87U0FDVjtRQUVELDhCQUE4QjtRQUM5QixJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxXQUFXLEVBQUU7WUFDakMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2YsT0FBTztTQUNWO1FBRUQsK0JBQStCO1FBQy9CLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUM5QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsT0FBTztTQUNWO1FBRUQsa0NBQWtDO1FBQ2xDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUMvQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUMvRCxLQUFLLENBQUMsSUFBSSxDQUFDLHdFQUF3RSxDQUFDLENBQUM7Z0JBQ3JGLE9BQU87YUFDVjtZQUVELElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3RGLEtBQUssQ0FBQyxJQUFJLENBQUMsbURBQW1ELENBQUMsQ0FBQztnQkFDaEUsT0FBTzthQUNWO1lBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDO1lBQ3JGLE9BQU87U0FDVjtRQUNELDJFQUEyRTtRQUMzRSxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBeEREO1FBREMsUUFBUSxDQUFDLGlDQUFlLENBQUM7dURBQ2M7SUFGL0IsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQTJEdEI7SUFBRCxpQkFBQztDQTNERCxBQTJEQyxDQTNEK0IsRUFBRSxDQUFDLFNBQVMsR0EyRDNDO0FBM0RZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU291bmRDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlci9Tb3VuZENvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgQWRzTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoU291bmRDb250cm9sbGVyKVxyXG4gICAgU291bmRDb250cm9sbGVyOiBTb3VuZENvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGluc3RhbGxIYW5kbGUoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zdGFsbFwiKTtcclxuXHJcbiAgICAgICAgYWxlcnQoXCJpbnN0YWxsXCIpXHJcblxyXG4gICAgICAgIHRoaXMuU291bmRDb250cm9sbGVyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgIC8vIENvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LmdhbWVFbmQgJiYgd2luZG93LmdhbWVFbmQoKTtcclxuXHJcbiAgICAgICAgLy9JZiBhZCBuZXR3b3JrIGlzIHRpa3Rva1xyXG4gICAgICAgIGlmICh0eXBlb2YgKHBsYXlhYmxlU0RLKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5YWJsZVNESy5vcGVuQXBwU3RvcmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBpcyBnb29nbGUgYWRzXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoRXhpdEFwaSkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBFeGl0QXBpLmV4aXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d3JvayBpcyBpcm9uc291cmNlc1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGRhcGkpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgZGFwaS5vcGVuU3RvcmVVcmwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBzdXBwb3J0IE1SQUlEIDIuMFxyXG4gICAgICAgIGlmICh0eXBlb2YgKG1yYWlkKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5BTkRST0lEKSB7XHJcbiAgICAgICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5nb29kcy50aWR5LmNoYWxsZW5nZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuSVBIT05FIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuSVBBRCkge1xyXG4gICAgICAgICAgICAgICAgbXJhaWQub3BlbihcImh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS91cy9hcHAvaWQ2NzQzNTI0MDczP210PThcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmdvb2RzLnRpZHkuY2hhbGxlbmdlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgaXMgbWluZHdvcmsuIHdpbmRvdyBhbHdheSBhdmFpYWJsZSBzbyBza2lwIHVuZGVmaW5lZCBjaGVja1xyXG4gICAgICAgIHdpbmRvdy5pbnN0YWxsICYmIHdpbmRvdy5pbnN0YWxsKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScaleEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c5b75gyUB9GMKmg7DduQ0Al', 'ScaleEffect');
// scripts/ScaleEffect.ts

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
exports.ScaleEffect = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScaleEffect = /** @class */ (function (_super) {
    __extends(ScaleEffect, _super);
    function ScaleEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scaleSize = 1.1;
        return _this;
    }
    ScaleEffect.prototype.start = function () {
        this.StartEffect();
    };
    ScaleEffect.prototype.StartEffect = function () {
        // let startScale = this.node.scale;
        var upScale = 1.35;
        var downScale = 1.3;
        var time = 0.5;
        // console.log(upScale);
        // console.log(downScale);
        cc.tween(this.node)
            .repeatForever(cc
            .tween()
            .to(time, { scale: upScale }, { easing: "sineOut" })
            .then(cc
            .tween(this.node)
            .to(time, { scale: downScale }, { easing: "sineOut" })))
            .start();
    };
    __decorate([
        property
    ], ScaleEffect.prototype, "scaleSize", void 0);
    ScaleEffect = __decorate([
        ccclass
    ], ScaleEffect);
    return ScaleEffect;
}(cc.Component));
exports.ScaleEffect = ScaleEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NhbGVFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlDLCtCQUFZO0lBQTdDO1FBQUEscUVBK0JDO1FBN0JRLGVBQVMsR0FBRyxHQUFHLENBQUM7O0lBNkJ6QixDQUFDO0lBM0JDLDJCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFDRSxvQ0FBb0M7UUFDcEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7UUFFZix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBRzFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNoQixhQUFhLENBQ1osRUFBRTthQUNDLEtBQUssRUFBRTthQUNQLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7YUFDbkQsSUFBSSxDQUNILEVBQUU7YUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNoQixFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQ3pELENBQ0o7YUFDQSxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUE1QkQ7UUFEQyxRQUFRO2tEQUNjO0lBRlosV0FBVztRQUR2QixPQUFPO09BQ0ssV0FBVyxDQStCdkI7SUFBRCxrQkFBQztDQS9CRCxBQStCQyxDQS9CZ0MsRUFBRSxDQUFDLFNBQVMsR0ErQjVDO0FBL0JZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBTY2FsZUVmZmVjdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5XHJcbiAgcHVibGljIHNjYWxlU2l6ZSA9IDEuMTtcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLlN0YXJ0RWZmZWN0KCk7XHJcbiAgfVxyXG5cclxuICBTdGFydEVmZmVjdCgpIHtcclxuICAgIC8vIGxldCBzdGFydFNjYWxlID0gdGhpcy5ub2RlLnNjYWxlO1xyXG4gICAgbGV0IHVwU2NhbGUgPSAxLjM1O1xyXG4gICAgbGV0IGRvd25TY2FsZSA9IDEuMztcclxuICAgIGxldCB0aW1lID0gMC41O1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHVwU2NhbGUpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZG93blNjYWxlKTtcclxuICAgIFxyXG5cclxuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgY2NcclxuICAgICAgICAgIC50d2VlbigpXHJcbiAgICAgICAgICAudG8odGltZSwgeyBzY2FsZTogdXBTY2FsZSB9LCB7IGVhc2luZzogXCJzaW5lT3V0XCIgfSlcclxuICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICBjY1xyXG4gICAgICAgICAgICAgIC50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgLnRvKHRpbWUsIHsgc2NhbGU6IGRvd25TY2FsZSB9LCB7IGVhc2luZzogXCJzaW5lT3V0XCIgfSlcclxuICAgICAgICAgIClcclxuICAgICAgKVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/config/ItemConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4314WSE+5Ny76qMiGSICwb', 'ItemConfig');
// scripts/config/ItemConfig.ts

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
var ItemConfig = /** @class */ (function (_super) {
    __extends(ItemConfig, _super);
    function ItemConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemSprites = [];
        return _this;
    }
    ItemConfig.prototype.getSprite = function (id) {
        return this.itemSprites[id];
    };
    __decorate([
        property([cc.Prefab])
    ], ItemConfig.prototype, "itemPrefab", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], ItemConfig.prototype, "itemSprites", void 0);
    ItemConfig = __decorate([
        ccclass
    ], ItemConfig);
    return ItemConfig;
}(cc.Component));
exports.default = ItemConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29uZmlnXFxJdGVtQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBVUM7UUFMQyxpQkFBVyxHQUFxQixFQUFFLENBQUM7O0lBS3JDLENBQUM7SUFIQyw4QkFBUyxHQUFULFVBQVUsRUFBVTtRQUNsQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVBEO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2tEQUNBO0lBR3RCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO21EQUNRO0lBTGhCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FVOUI7SUFBRCxpQkFBQztDQVZELEFBVUMsQ0FWdUMsRUFBRSxDQUFDLFNBQVMsR0FVbkQ7a0JBVm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbUNvbmZpZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gIGl0ZW1QcmVmYWI6IGNjLlByZWZhYjtcclxuXHJcbiAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgaXRlbVNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgZ2V0U3ByaXRlKGlkOiBudW1iZXIpOiBjYy5TcHJpdGVGcmFtZSB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtU3ByaXRlc1tpZF07XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/config/GameConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7904cgh/K1K27W1cHf6o8Qe', 'GameConfig');
// scripts/config/GameConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigData = exports.adConfig = exports.animationConfig = exports.layoutConfig = exports.levelConfig = void 0;
exports.levelConfig = {
    row: 5,
    col: 3,
    numberLayer: 1,
    numberItem: 15,
    initialEmptySlot: 6,
};
exports.layoutConfig = {
    marginTop: 0,
    // offsetX: -17,
    // offsetY: -17,
    offsetX: -30,
    offsetY: -30,
    backItemOffsetY: 6,
};
exports.animationConfig = {
    toSlotDuration: 0.1,
    matchDuration: 0.15,
    spawnDuration: 0.3
};
exports.adConfig = {
    matchTimeBeforeShowEndCard: 8,
};
var ConfigData = /** @class */ (function () {
    function ConfigData() {
    }
    ConfigData.Game = {
        isEnableSound: true,
        isShowEndCard: false,
        isCanClick: false,
        isPlaying: false,
        isPlayedBgSound: false,
        isLoose: false,
        isWin: false,
        isMovedToNextLevel: false,
        isHasTimeCount: false,
        isHasCTA: true,
    };
    ConfigData.UI = {
        isActiveWarning: false,
    };
    ConfigData.Idea = {
        isShelfExplosionWhenHitRocket: false,
        fakeRocketPoses: [],
        shelf: [],
        shelfExplosionCount: 0,
        shelfEatenCount: 0,
    };
    ConfigData.Helper = {
        maxRocketCanSpawn: 4,
    };
    return ConfigData;
}());
exports.ConfigData = ConfigData;
// export const adVersion = {
//   // ver: "1.1",
//   ver: "1.2",
// };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29uZmlnXFxHYW1lQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFhLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLEdBQUcsRUFBRSxDQUFDO0lBQ04sR0FBRyxFQUFFLENBQUM7SUFDTixXQUFXLEVBQUUsQ0FBQztJQUNkLFVBQVUsRUFBRSxFQUFFO0lBQ2QsZ0JBQWdCLEVBQUUsQ0FBQztDQUNwQixDQUFDO0FBQ1csUUFBQSxZQUFZLEdBQUc7SUFDMUIsU0FBUyxFQUFFLENBQUM7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFDWixPQUFPLEVBQUUsQ0FBQyxFQUFFO0lBQ1osZUFBZSxFQUFFLENBQUM7Q0FFbkIsQ0FBQztBQUVXLFFBQUEsZUFBZSxHQUFHO0lBQzdCLGNBQWMsRUFBRSxHQUFHO0lBQ25CLGFBQWEsRUFBRSxJQUFJO0lBQ25CLGFBQWEsRUFBRSxHQUFHO0NBQ25CLENBQUM7QUFDVyxRQUFBLFFBQVEsR0FBRztJQUN0QiwwQkFBMEIsRUFBRSxDQUFDO0NBQzlCLENBQUM7QUFHRjtJQUFBO0lBMEJBLENBQUM7SUF6QlEsZUFBSSxHQUFHO1FBQ1osYUFBYSxFQUFFLElBQUk7UUFDbkIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsZUFBZSxFQUFFLEtBQUs7UUFDdEIsT0FBTyxFQUFFLEtBQUs7UUFDZCxLQUFLLEVBQUUsS0FBSztRQUNaLGtCQUFrQixFQUFFLEtBQUs7UUFDekIsY0FBYyxFQUFFLEtBQUs7UUFDckIsUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDO0lBQ0ssYUFBRSxHQUFHO1FBQ1YsZUFBZSxFQUFFLEtBQUs7S0FDdkIsQ0FBQTtJQUNNLGVBQUksR0FBRztRQUNaLDZCQUE2QixFQUFFLEtBQUs7UUFDcEMsZUFBZSxFQUFFLEVBQUU7UUFDbkIsS0FBSyxFQUFFLEVBQUU7UUFDVCxtQkFBbUIsRUFBRSxDQUFDO1FBQ3RCLGVBQWUsRUFBRSxDQUFDO0tBQ25CLENBQUE7SUFDTSxpQkFBTSxHQUFHO1FBQ2QsaUJBQWlCLEVBQUUsQ0FBQztLQUNyQixDQUFBO0lBQ0gsaUJBQUM7Q0ExQkQsQUEwQkMsSUFBQTtBQTFCWSxnQ0FBVTtBQTJCdkIsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEIsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBsZXZlbENvbmZpZyA9IHtcclxuICByb3c6IDUsXHJcbiAgY29sOiAzLFxyXG4gIG51bWJlckxheWVyOiAxLFxyXG4gIG51bWJlckl0ZW06IDE1LFxyXG4gIGluaXRpYWxFbXB0eVNsb3Q6IDYsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBsYXlvdXRDb25maWcgPSB7XHJcbiAgbWFyZ2luVG9wOiAwLFxyXG4gIC8vIG9mZnNldFg6IC0xNyxcclxuICAvLyBvZmZzZXRZOiAtMTcsXHJcbiAgb2Zmc2V0WDogLTMwLFxyXG4gIG9mZnNldFk6IC0zMCxcclxuICBiYWNrSXRlbU9mZnNldFk6IDYsXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFuaW1hdGlvbkNvbmZpZyA9IHtcclxuICB0b1Nsb3REdXJhdGlvbjogMC4xLFxyXG4gIG1hdGNoRHVyYXRpb246IDAuMTUsXHJcbiAgc3Bhd25EdXJhdGlvbjogMC4zXHJcbn07XHJcbmV4cG9ydCBjb25zdCBhZENvbmZpZyA9IHtcclxuICBtYXRjaFRpbWVCZWZvcmVTaG93RW5kQ2FyZDogOCxcclxufTtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnRGF0YSB7XHJcbiAgc3RhdGljIEdhbWUgPSB7XHJcbiAgICBpc0VuYWJsZVNvdW5kOiB0cnVlLFxyXG4gICAgaXNTaG93RW5kQ2FyZDogZmFsc2UsXHJcbiAgICBpc0NhbkNsaWNrOiBmYWxzZSxcclxuICAgIGlzUGxheWluZzogZmFsc2UsXHJcbiAgICBpc1BsYXllZEJnU291bmQ6IGZhbHNlLFxyXG4gICAgaXNMb29zZTogZmFsc2UsXHJcbiAgICBpc1dpbjogZmFsc2UsXHJcbiAgICBpc01vdmVkVG9OZXh0TGV2ZWw6IGZhbHNlLFxyXG4gICAgaXNIYXNUaW1lQ291bnQ6IGZhbHNlLFxyXG4gICAgaXNIYXNDVEE6IHRydWUsXHJcbiAgfTtcclxuICBzdGF0aWMgVUkgPSB7XHJcbiAgICBpc0FjdGl2ZVdhcm5pbmc6IGZhbHNlLFxyXG4gIH1cclxuICBzdGF0aWMgSWRlYSA9IHtcclxuICAgIGlzU2hlbGZFeHBsb3Npb25XaGVuSGl0Um9ja2V0OiBmYWxzZSxcclxuICAgIGZha2VSb2NrZXRQb3NlczogW10sXHJcbiAgICBzaGVsZjogW10sXHJcbiAgICBzaGVsZkV4cGxvc2lvbkNvdW50OiAwLFxyXG4gICAgc2hlbGZFYXRlbkNvdW50OiAwLFxyXG4gIH1cclxuICBzdGF0aWMgSGVscGVyID0ge1xyXG4gICAgbWF4Um9ja2V0Q2FuU3Bhd246IDQsXHJcbiAgfVxyXG59XHJcbi8vIGV4cG9ydCBjb25zdCBhZFZlcnNpb24gPSB7XHJcbi8vICAgLy8gdmVyOiBcIjEuMVwiLFxyXG4vLyAgIHZlcjogXCIxLjJcIixcclxuLy8gfTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameplay/Slot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2755eD+0aVPs7DEpl/8PslR', 'Slot');
// scripts/gameplay/Slot.ts

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
var Shelf_1 = require("./Shelf");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot = /** @class */ (function (_super) {
    __extends(Slot, _super);
    function Slot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        return _this;
    }
    Slot.prototype.onLoad = function () {
        if (this.node.parent !== null) {
            this.shelf = this.node.parent.getComponent(Shelf_1.default);
            this.index = this.node.getSiblingIndex();
        }
    };
    Slot.prototype.setItemRightPos = function (item, parent) {
        this.setItem(item);
        if (this.isEmpty())
            return;
        var tempPos = this.node.parent.convertToWorldSpaceAR(this.node
            .getPosition());
        this.item.node.setParent(parent);
        this.item.node.setPosition(parent.convertToNodeSpaceAR(tempPos));
    };
    Slot.prototype.setItem = function (item) {
        if (item === null) {
            this.shelf.removeItem(this.item);
        }
        else {
            this.shelf.replaceItem(this.item, item);
        }
        this.item = item;
        // this.bg.enabled = item === null;
    };
    Slot.prototype.setEmpty = function () {
        this.setItem(null);
    };
    Slot.prototype.isEmpty = function () {
        return this.item === null;
    };
    Slot.prototype.checkShelf = function () {
        if (this.shelf === null)
            return;
        this.shelf.checkBackLayer();
    };
    Slot.prototype.checkMatch = function () {
        console.log("Check");
        if (this.shelf === null)
            return;
        // console.log("Check");
        this.shelf.checkMatch();
    };
    __decorate([
        property(cc.Sprite)
    ], Slot.prototype, "bg", void 0);
    Slot = __decorate([
        ccclass
    ], Slot);
    return Slot;
}(cc.Component));
exports.default = Slot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZXBsYXlcXFNsb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUNBQTRCO0FBRXRCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBb0RDO1FBaERRLFVBQUksR0FBUyxJQUFJLENBQUM7O0lBZ0QzQixDQUFDO0lBNUNXLHFCQUFNLEdBQWhCO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVELDhCQUFlLEdBQWYsVUFBZ0IsSUFBVSxFQUFFLE1BQWU7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFBRSxPQUFPO1FBQzNCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUNwRCxJQUFJLENBQUMsSUFBSTthQUNOLFdBQVcsRUFBRSxDQUNqQixDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0Qsc0JBQU8sR0FBUCxVQUFRLElBQVU7UUFDaEIsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLG1DQUFtQztJQUNyQyxDQUFDO0lBQ0QsdUJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNELHNCQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCx5QkFBVSxHQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUk7WUFBRSxPQUFPO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNELHlCQUFVLEdBQVY7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJO1lBQUUsT0FBTztRQUNoQyx3QkFBd0I7UUFFeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBakREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0NBQ0U7SUFGSCxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBb0R4QjtJQUFELFdBQUM7Q0FwREQsQUFvREMsQ0FwRGlDLEVBQUUsQ0FBQyxTQUFTLEdBb0Q3QztrQkFwRG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XHJcbmltcG9ydCBTaGVsZiBmcm9tIFwiLi9TaGVsZlwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgcHJpdmF0ZSBiZzogY2MuU3ByaXRlO1xyXG5cclxuICBwdWJsaWMgaXRlbTogSXRlbSA9IG51bGw7XHJcbiAgcHVibGljIGluZGV4OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzaGVsZjogU2hlbGY7XHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5ub2RlLnBhcmVudCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNoZWxmID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoU2hlbGYpO1xyXG4gICAgICB0aGlzLmluZGV4ID0gdGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0SXRlbVJpZ2h0UG9zKGl0ZW06IEl0ZW0sIHBhcmVudDogY2MuTm9kZSkge1xyXG4gICAgdGhpcy5zZXRJdGVtKGl0ZW0pO1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSByZXR1cm47XHJcbiAgICBjb25zdCB0ZW1wUG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoXHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRQb3NpdGlvbigpXHJcbiAgICApO1xyXG4gICAgdGhpcy5pdGVtLm5vZGUuc2V0UGFyZW50KHBhcmVudCk7XHJcbiAgICB0aGlzLml0ZW0ubm9kZS5zZXRQb3NpdGlvbihwYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGVtcFBvcykpO1xyXG4gIH1cclxuICBzZXRJdGVtKGl0ZW06IEl0ZW0pIHtcclxuICAgIGlmIChpdGVtID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2hlbGYucmVtb3ZlSXRlbSh0aGlzLml0ZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaGVsZi5yZXBsYWNlSXRlbSh0aGlzLml0ZW0sIGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pdGVtID0gaXRlbTtcclxuICAgIC8vIHRoaXMuYmcuZW5hYmxlZCA9IGl0ZW0gPT09IG51bGw7XHJcbiAgfVxyXG4gIHNldEVtcHR5KCkge1xyXG4gICAgdGhpcy5zZXRJdGVtKG51bGwpO1xyXG4gIH1cclxuICBpc0VtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbSA9PT0gbnVsbDtcclxuICB9XHJcbiAgY2hlY2tTaGVsZigpIHtcclxuICAgIGlmICh0aGlzLnNoZWxmID09PSBudWxsKSByZXR1cm47XHJcbiAgICB0aGlzLnNoZWxmLmNoZWNrQmFja0xheWVyKCk7XHJcbiAgfVxyXG4gIGNoZWNrTWF0Y2goKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNoZWNrXCIpO1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zaGVsZiA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJDaGVja1wiKTtcclxuICAgIFxyXG4gICAgdGhpcy5zaGVsZi5jaGVja01hdGNoKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/SoundController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31c51BwOc1M+6aWPfxlVCEJ', 'SoundController');
// scripts/Controller/SoundController.ts

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
exports.SoundController = exports.PrefabSoundTrack = exports.LoopedSoundTrack = exports.DefaultSoundTrack = void 0;
var GameConfig_1 = require("../config/GameConfig");
var Singleton_1 = require("../utils/Singleton");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * Predefined variables
 * Name = SoundController
 * DateTime = Thu Feb 06 2025 23:04:17 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = SoundController.ts
 * FileBasenameNoExtension = SoundController
 * URL = db://assets/scripts/Controller/SoundController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
var DefaultSoundTrack;
(function (DefaultSoundTrack) {
    DefaultSoundTrack["LoseSound"] = "LoseSound";
    DefaultSoundTrack["WinSound"] = "WinSound";
})(DefaultSoundTrack = exports.DefaultSoundTrack || (exports.DefaultSoundTrack = {}));
var LoopedSoundTrack;
(function (LoopedSoundTrack) {
    LoopedSoundTrack["bgSound"] = "bgSound";
})(LoopedSoundTrack = exports.LoopedSoundTrack || (exports.LoopedSoundTrack = {}));
var PrefabSoundTrack;
(function (PrefabSoundTrack) {
    PrefabSoundTrack["tilePickedSound"] = "tilePickedSound";
    PrefabSoundTrack["onShelfSound"] = "onShelfSound";
    PrefabSoundTrack["tripleMatchSortSound"] = "tripleMatchSortSound";
    PrefabSoundTrack["clearSound"] = "clearSound";
})(PrefabSoundTrack = exports.PrefabSoundTrack || (exports.PrefabSoundTrack = {}));
var SoundController = /** @class */ (function (_super) {
    __extends(SoundController, _super);
    function SoundController() {
        var _this = _super.call(this) || this;
        _this.sounds = [];
        _this.soundCooldown = 0.5;
        _this.lastEatSoundTime = 0;
        _this.eatSoundCount = 0;
        _this.scheduledSounds = [];
        _this.bgSound = null;
        _this.LoseSound = null;
        _this.WinSound = null;
        _this.InstantiateSoundContainer = null;
        _this.tilePickedSound = null;
        _this.onShelfSound = null;
        _this.tripleMatchSortSound = null;
        _this.clearSound = null;
        SoundController_1._instance = _this;
        return _this;
    }
    SoundController_1 = SoundController;
    SoundController.prototype.onLoad = function () {
    };
    SoundController.prototype.start = function () {
    };
    SoundController.prototype.playDefaultSound = function (soundName) {
        if (GameConfig_1.ConfigData.Game.isEnableSound) {
            switch (soundName) {
                case DefaultSoundTrack.LoseSound:
                    this.LoseSound.play();
                    break;
                case DefaultSoundTrack.WinSound:
                    this.WinSound.play();
                    break;
                case LoopedSoundTrack.bgSound:
                    this.bgSound.play();
                    break;
                default:
                    break;
            }
        }
    };
    SoundController.prototype.playPrefabSound = function (soundName) {
        if (GameConfig_1.ConfigData.Game.isEnableSound) {
            this._playSound(soundName);
            // if (soundName === PrefabSoundTrack.onShelfSound) {
            //     this.playEatSound();
            // } 
            // else {
            //     this._playSound(soundName);
            // }
        }
    };
    // private playEatSound(): void {
    //     const currentTime = performance.now() / 1000;
    //     if (currentTime - this.lastEatSoundTime >= this.soundCooldown) {
    //         this.eatSoundCount = 0;
    //         this.scheduledSounds = [];
    //         this.lastEatSoundTime = currentTime;
    //         this._playSound(PrefabSoundTrack.EatSound);
    //     } else if (this.eatSoundCount < 2) {
    //         this.eatSoundCount++;
    //         this.scheduledSounds.push(PrefabSoundTrack.EatSound);
    //         this.scheduleEatSounds();
    //     }
    // }
    // private scheduleEatSounds(): void {
    //     if (this.scheduledSounds.length > 0) {
    //         let interval = this.soundCooldown / this.eatSoundCount;
    //         for (let i = 0; i < this.eatSoundCount; i++) {
    //             this.scheduleOnce(() => {
    //                 this._playSound(PrefabSoundTrack.EatSound);
    //             }, interval * i);
    //         }
    //     }
    // }
    SoundController.prototype._playSound = function (soundName) {
        var _this = this;
        var sound = null;
        switch (soundName) {
            case PrefabSoundTrack.onShelfSound:
                sound = cc.instantiate(this.onShelfSound);
                break;
            case PrefabSoundTrack.tilePickedSound:
                sound = cc.instantiate(this.tilePickedSound);
                break;
            case PrefabSoundTrack.tripleMatchSortSound:
                sound = cc.instantiate(this.tripleMatchSortSound);
                break;
            case PrefabSoundTrack.clearSound:
                sound = cc.instantiate(this.clearSound);
                break;
            default:
                break;
        }
        sound.parent = this.InstantiateSoundContainer;
        var _SoundComp = sound.getComponent(cc.AudioSource);
        var audioId = cc.audioEngine.play(_SoundComp.clip, false, _SoundComp.volume);
        cc.audioEngine.setFinishCallback(audioId, function () {
            _this.removeAudio(_SoundComp);
        });
        this.sounds.push(_SoundComp);
    };
    SoundController.prototype.removeAudio = function (_SoundComp) {
        _SoundComp.destroy();
    };
    SoundController.prototype.muteSound = function (soundName, isMuted) {
        var result = this.sounds.find(function (sound) { return sound.node.name === soundName; });
        if (isMuted)
            result.volume = 0;
        else
            result.volume = 1;
    };
    SoundController.prototype.stopSound = function (soundName) {
        switch (soundName) {
            case DefaultSoundTrack.LoseSound:
                this.LoseSound.stop();
                break;
            case DefaultSoundTrack.WinSound:
                this.WinSound.stop();
                break;
            case LoopedSoundTrack.bgSound:
                this.bgSound.stop();
                break;
            default:
                break;
        }
    };
    SoundController.prototype.stopAllSound = function () {
        this.bgSound && this.bgSound.stop();
        this.LoseSound && this.LoseSound.stop();
        this.WinSound && this.WinSound.stop();
    };
    var SoundController_1;
    __decorate([
        property(cc.AudioSource)
    ], SoundController.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], SoundController.prototype, "LoseSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], SoundController.prototype, "WinSound", void 0);
    __decorate([
        property(cc.Node)
    ], SoundController.prototype, "InstantiateSoundContainer", void 0);
    __decorate([
        property(cc.Prefab)
    ], SoundController.prototype, "tilePickedSound", void 0);
    __decorate([
        property(cc.Prefab)
    ], SoundController.prototype, "onShelfSound", void 0);
    __decorate([
        property(cc.Prefab)
    ], SoundController.prototype, "tripleMatchSortSound", void 0);
    __decorate([
        property(cc.Prefab)
    ], SoundController.prototype, "clearSound", void 0);
    SoundController = SoundController_1 = __decorate([
        ccclass('SoundController')
    ], SoundController);
    return SoundController;
}(Singleton_1.default));
exports.SoundController = SoundController;
/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcU291bmRDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtREFBa0Q7QUFDbEQsZ0RBQTJDO0FBQ3JDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDOzs7Ozs7Ozs7O0dBVUc7QUFFSCxJQUFZLGlCQUdYO0FBSEQsV0FBWSxpQkFBaUI7SUFDekIsNENBQXVCLENBQUE7SUFDdkIsMENBQXFCLENBQUE7QUFDekIsQ0FBQyxFQUhXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBRzVCO0FBRUQsSUFBWSxnQkFFWDtBQUZELFdBQVksZ0JBQWdCO0lBQ3hCLHVDQUFtQixDQUFBO0FBQ3ZCLENBQUMsRUFGVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQUUzQjtBQUVELElBQVksZ0JBS1g7QUFMRCxXQUFZLGdCQUFnQjtJQUN4Qix1REFBbUMsQ0FBQTtJQUNuQyxpREFBNkIsQ0FBQTtJQUM3QixpRUFBNkMsQ0FBQTtJQUM3Qyw2Q0FBeUIsQ0FBQTtBQUM3QixDQUFDLEVBTFcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFLM0I7QUFHRDtJQUFxQyxtQ0FBMEI7SUE0QjNEO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBOUJNLFlBQU0sR0FBcUIsRUFBRSxDQUFDO1FBQzdCLG1CQUFhLEdBQVcsR0FBRyxDQUFDO1FBQzVCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUM3QixtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUMxQixxQkFBZSxHQUFhLEVBQUUsQ0FBQztRQUl2QyxhQUFPLEdBQW1CLElBQUksQ0FBQztRQUUvQixlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUdoQywrQkFBeUIsR0FBWSxJQUFJLENBQUM7UUFHMUMscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFFbEMsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFFL0IsMEJBQW9CLEdBQWMsSUFBSSxDQUFDO1FBRXZDLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBS3pCLGlCQUFlLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQzs7SUFDckMsQ0FBQzt3QkEvQlEsZUFBZTtJQWtDZCxnQ0FBTSxHQUFoQjtJQUVBLENBQUM7SUFHUywrQkFBSyxHQUFmO0lBRUEsQ0FBQztJQUdNLDBDQUFnQixHQUF2QixVQUF3QixTQUFpQjtRQUNyQyxJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMvQixRQUFRLFNBQVMsRUFBRTtnQkFDZixLQUFLLGlCQUFpQixDQUFDLFNBQVM7b0JBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3RCLE1BQU07Z0JBQ1YsS0FBSyxpQkFBaUIsQ0FBQyxRQUFRO29CQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNyQixNQUFNO2dCQUNWLEtBQUssZ0JBQWdCLENBQUMsT0FBTztvQkFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDcEIsTUFBTTtnQkFDVjtvQkFDSSxNQUFNO2FBQ2I7U0FDSjtJQUNMLENBQUM7SUFHTSx5Q0FBZSxHQUF0QixVQUF1QixTQUEyQjtRQUM5QyxJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNCLHFEQUFxRDtZQUNyRCwyQkFBMkI7WUFDM0IsS0FBSztZQUVMLFNBQVM7WUFDVCxrQ0FBa0M7WUFDbEMsSUFBSTtTQUNQO0lBQ0wsQ0FBQztJQUdELGlDQUFpQztJQUNqQyxvREFBb0Q7SUFFcEQsdUVBQXVFO0lBQ3ZFLGtDQUFrQztJQUNsQyxxQ0FBcUM7SUFDckMsK0NBQStDO0lBQy9DLHNEQUFzRDtJQUN0RCwyQ0FBMkM7SUFDM0MsZ0NBQWdDO0lBQ2hDLGdFQUFnRTtJQUNoRSxvQ0FBb0M7SUFDcEMsUUFBUTtJQUNSLElBQUk7SUFHSixzQ0FBc0M7SUFDdEMsNkNBQTZDO0lBQzdDLGtFQUFrRTtJQUNsRSx5REFBeUQ7SUFDekQsd0NBQXdDO0lBQ3hDLDhEQUE4RDtJQUM5RCxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLFFBQVE7SUFDUixJQUFJO0lBR0ksb0NBQVUsR0FBbEIsVUFBbUIsU0FBMkI7UUFBOUMsaUJBMkJDO1FBMUJHLElBQUksS0FBSyxHQUFZLElBQUksQ0FBQztRQUMxQixRQUFRLFNBQVMsRUFBRTtZQUNmLEtBQUssZ0JBQWdCLENBQUMsWUFBWTtnQkFDOUIsS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMxQyxNQUFNO1lBQ1YsS0FBSyxnQkFBZ0IsQ0FBQyxlQUFlO2dCQUNqQyxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzdDLE1BQU07WUFDVixLQUFLLGdCQUFnQixDQUFDLG9CQUFvQjtnQkFDdEMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ2xELE1BQU07WUFDVixLQUFLLGdCQUFnQixDQUFDLFVBQVU7Z0JBQzVCLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDeEMsTUFBTTtZQUNWO2dCQUNJLE1BQU07U0FDYjtRQUVELEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDO1FBRTlDLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RELElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRSxFQUFFLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtZQUN0QyxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUdPLHFDQUFXLEdBQW5CLFVBQW9CLFVBQTBCO1FBQzFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBR00sbUNBQVMsR0FBaEIsVUFBaUIsU0FBaUIsRUFBRSxPQUFnQjtRQUNoRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDO1FBQ3RFLElBQUksT0FBTztZQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOztZQUMxQixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBR00sbUNBQVMsR0FBaEIsVUFBaUIsU0FBaUI7UUFDOUIsUUFBUSxTQUFTLEVBQUU7WUFDZixLQUFLLGlCQUFpQixDQUFDLFNBQVM7Z0JBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RCLE1BQU07WUFDVixLQUFLLGlCQUFpQixDQUFDLFFBQVE7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3JCLE1BQU07WUFDVixLQUFLLGdCQUFnQixDQUFDLE9BQU87Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLE1BQU07WUFDVjtnQkFDSSxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBR00sc0NBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsT0FBTyxJQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQyxDQUFDOztJQS9KRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO29EQUNNO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ1E7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztxREFDTztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NFQUN3QjtJQUcxQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzREQUNjO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ1c7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpRUFDbUI7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFDUztJQXpCcEIsZUFBZTtRQUQzQixPQUFPLENBQUMsaUJBQWlCLENBQUM7T0FDZCxlQUFlLENBeUszQjtJQUFELHNCQUFDO0NBektELEFBeUtDLENBektvQyxtQkFBUyxHQXlLN0M7QUF6S1ksMENBQWU7QUEySzVCOzs7Ozs7Ozs7R0FTRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb25maWdEYXRhIH0gZnJvbSAnLi4vY29uZmlnL0dhbWVDb25maWcnO1xyXG5pbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL3V0aWxzL1NpbmdsZXRvbic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vKipcclxuICogUHJlZGVmaW5lZCB2YXJpYWJsZXNcclxuICogTmFtZSA9IFNvdW5kQ29udHJvbGxlclxyXG4gKiBEYXRlVGltZSA9IFRodSBGZWIgMDYgMjAyNSAyMzowNDoxNyBHTVQrMDcwMCAoSW5kb2NoaW5hIFRpbWUpXHJcbiAqIEF1dGhvciA9IGhvYW5naGllcDIwMDFcclxuICogRmlsZUJhc2VuYW1lID0gU291bmRDb250cm9sbGVyLnRzXHJcbiAqIEZpbGVCYXNlbmFtZU5vRXh0ZW5zaW9uID0gU291bmRDb250cm9sbGVyXHJcbiAqIFVSTCA9IGRiOi8vYXNzZXRzL3NjcmlwdHMvQ29udHJvbGxlci9Tb3VuZENvbnRyb2xsZXIudHNcclxuICogTWFudWFsVXJsID0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzMuNC9tYW51YWwvZW4vXHJcbiAqXHJcbiAqL1xyXG5cclxuZXhwb3J0IGVudW0gRGVmYXVsdFNvdW5kVHJhY2sge1xyXG4gICAgTG9zZVNvdW5kID0gXCJMb3NlU291bmRcIixcclxuICAgIFdpblNvdW5kID0gXCJXaW5Tb3VuZFwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBMb29wZWRTb3VuZFRyYWNrIHtcclxuICAgIGJnU291bmQgPSBcImJnU291bmRcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUHJlZmFiU291bmRUcmFjayB7XHJcbiAgICB0aWxlUGlja2VkU291bmQgPSBcInRpbGVQaWNrZWRTb3VuZFwiLFxyXG4gICAgb25TaGVsZlNvdW5kID0gXCJvblNoZWxmU291bmRcIixcclxuICAgIHRyaXBsZU1hdGNoU29ydFNvdW5kID0gXCJ0cmlwbGVNYXRjaFNvcnRTb3VuZFwiLFxyXG4gICAgY2xlYXJTb3VuZCA9IFwiY2xlYXJTb3VuZFwiLFxyXG59XHJcblxyXG5AY2NjbGFzcygnU291bmRDb250cm9sbGVyJylcclxuZXhwb3J0IGNsYXNzIFNvdW5kQ29udHJvbGxlciBleHRlbmRzIFNpbmdsZXRvbjxTb3VuZENvbnRyb2xsZXI+IHtcclxuICAgIHB1YmxpYyBzb3VuZHM6IGNjLkF1ZGlvU291cmNlW10gPSBbXTtcclxuICAgIHByaXZhdGUgc291bmRDb29sZG93bjogbnVtYmVyID0gMC41O1xyXG4gICAgcHJpdmF0ZSBsYXN0RWF0U291bmRUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBlYXRTb3VuZENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzY2hlZHVsZWRTb3VuZHM6IHN0cmluZ1tdID0gW107XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGJnU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIExvc2VTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgV2luU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEluc3RhbnRpYXRlU291bmRDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICB0aWxlUGlja2VkU291bmQ6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgb25TaGVsZlNvdW5kOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHRyaXBsZU1hdGNoU29ydFNvdW5kOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNsZWFyU291bmQ6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgU291bmRDb250cm9sbGVyLl9pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcGxheURlZmF1bHRTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25maWdEYXRhLkdhbWUuaXNFbmFibGVTb3VuZCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBEZWZhdWx0U291bmRUcmFjay5Mb3NlU291bmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Mb3NlU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBEZWZhdWx0U291bmRUcmFjay5XaW5Tb3VuZDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLldpblNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTG9vcGVkU291bmRUcmFjay5iZ1NvdW5kOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmdTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcGxheVByZWZhYlNvdW5kKHNvdW5kTmFtZTogUHJlZmFiU291bmRUcmFjayk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25maWdEYXRhLkdhbWUuaXNFbmFibGVTb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5U291bmQoc291bmROYW1lKTtcclxuICAgICAgICAgICAgLy8gaWYgKHNvdW5kTmFtZSA9PT0gUHJlZmFiU291bmRUcmFjay5vblNoZWxmU291bmQpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMucGxheUVhdFNvdW5kKCk7XHJcbiAgICAgICAgICAgIC8vIH0gXHJcblxyXG4gICAgICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuX3BsYXlTb3VuZChzb3VuZE5hbWUpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBwcml2YXRlIHBsYXlFYXRTb3VuZCgpOiB2b2lkIHtcclxuICAgIC8vICAgICBjb25zdCBjdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMDtcclxuXHJcbiAgICAvLyAgICAgaWYgKGN1cnJlbnRUaW1lIC0gdGhpcy5sYXN0RWF0U291bmRUaW1lID49IHRoaXMuc291bmRDb29sZG93bikge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmVhdFNvdW5kQ291bnQgPSAwO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlZFNvdW5kcyA9IFtdO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmxhc3RFYXRTb3VuZFRpbWUgPSBjdXJyZW50VGltZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5fcGxheVNvdW5kKFByZWZhYlNvdW5kVHJhY2suRWF0U291bmQpO1xyXG4gICAgLy8gICAgIH0gZWxzZSBpZiAodGhpcy5lYXRTb3VuZENvdW50IDwgMikge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmVhdFNvdW5kQ291bnQrKztcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZWRTb3VuZHMucHVzaChQcmVmYWJTb3VuZFRyYWNrLkVhdFNvdW5kKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZUVhdFNvdW5kcygpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgLy8gcHJpdmF0ZSBzY2hlZHVsZUVhdFNvdW5kcygpOiB2b2lkIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5zY2hlZHVsZWRTb3VuZHMubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gICAgICAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLnNvdW5kQ29vbGRvd24gLyB0aGlzLmVhdFNvdW5kQ291bnQ7XHJcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lYXRTb3VuZENvdW50OyBpKyspIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5U291bmQoUHJlZmFiU291bmRUcmFjay5FYXRTb3VuZCk7XHJcbiAgICAvLyAgICAgICAgICAgICB9LCBpbnRlcnZhbCAqIGkpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIF9wbGF5U291bmQoc291bmROYW1lOiBQcmVmYWJTb3VuZFRyYWNrKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNvdW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFByZWZhYlNvdW5kVHJhY2sub25TaGVsZlNvdW5kOlxyXG4gICAgICAgICAgICAgICAgc291bmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm9uU2hlbGZTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQcmVmYWJTb3VuZFRyYWNrLnRpbGVQaWNrZWRTb3VuZDpcclxuICAgICAgICAgICAgICAgIHNvdW5kID0gY2MuaW5zdGFudGlhdGUodGhpcy50aWxlUGlja2VkU291bmQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUHJlZmFiU291bmRUcmFjay50cmlwbGVNYXRjaFNvcnRTb3VuZDpcclxuICAgICAgICAgICAgICAgIHNvdW5kID0gY2MuaW5zdGFudGlhdGUodGhpcy50cmlwbGVNYXRjaFNvcnRTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQcmVmYWJTb3VuZFRyYWNrLmNsZWFyU291bmQ6XHJcbiAgICAgICAgICAgICAgICBzb3VuZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2xlYXJTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc291bmQucGFyZW50ID0gdGhpcy5JbnN0YW50aWF0ZVNvdW5kQ29udGFpbmVyO1xyXG5cclxuICAgICAgICBjb25zdCBfU291bmRDb21wID0gc291bmQuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcclxuICAgICAgICBjb25zdCBhdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheShfU291bmRDb21wLmNsaXAsIGZhbHNlLCBfU291bmRDb21wLnZvbHVtZSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF1ZGlvKF9Tb3VuZENvbXApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zb3VuZHMucHVzaChfU291bmRDb21wKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVBdWRpbyhfU291bmRDb21wOiBjYy5BdWRpb1NvdXJjZSk6IHZvaWQge1xyXG4gICAgICAgIF9Tb3VuZENvbXAuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgbXV0ZVNvdW5kKHNvdW5kTmFtZTogc3RyaW5nLCBpc011dGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc291bmRzLmZpbmQoc291bmQgPT4gc291bmQubm9kZS5uYW1lID09PSBzb3VuZE5hbWUpO1xyXG4gICAgICAgIGlmIChpc011dGVkKSByZXN1bHQudm9sdW1lID0gMDtcclxuICAgICAgICBlbHNlIHJlc3VsdC52b2x1bWUgPSAxO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcFNvdW5kKHNvdW5kTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoIChzb3VuZE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBEZWZhdWx0U291bmRUcmFjay5Mb3NlU291bmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkxvc2VTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEZWZhdWx0U291bmRUcmFjay5XaW5Tb3VuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuV2luU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTG9vcGVkU291bmRUcmFjay5iZ1NvdW5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcEFsbFNvdW5kKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmdTb3VuZCAmJiAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLkxvc2VTb3VuZCAmJiB0aGlzLkxvc2VTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5XaW5Tb3VuZCAmJiB0aGlzLldpblNvdW5kLnN0b3AoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFsxXSBDbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMuXHJcbiAqIFsyXSBVc2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlLlxyXG4gKiBbM10gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAqIFs0XSBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAqXHJcbiAqIExlYXJuIG1vcmUgYWJvdXQgc2NyaXB0aW5nOiBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMy40L21hbnVhbC9lbi9zY3JpcHRpbmcvXHJcbiAqIExlYXJuIG1vcmUgYWJvdXQgQ0NDbGFzczogaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzMuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2RlY29yYXRvci5odG1sXHJcbiAqIExlYXJuIG1vcmUgYWJvdXQgbGlmZS1jeWNsZSBjYWxsYmFja3M6IGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8zLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbiAqL1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Board.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dbd55jsOPVAQpY/bd5se6yb', 'Board');
// scripts/Board.ts

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
exports.BoardState = void 0;
var AdsManager_1 = require("./AdsManager");
var Combo_1 = require("./Combo");
var ProgressBar_1 = require("./Component/ProgressBar");
var SoundController_1 = require("./Controller/SoundController");
// import { PrefabSoundTrack, SoundController } from "./Controller/SoundController";
var Hand_1 = require("./Hand");
var Config_1 = require("./config/Config");
var GameConfig_1 = require("./config/GameConfig");
var Shelf_1 = require("./gameplay/Shelf");
// import Slot from "./gameplay/Slot";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var BoardState;
(function (BoardState) {
    BoardState[BoardState["Generating"] = 0] = "Generating";
    BoardState[BoardState["Playing"] = 1] = "Playing";
    BoardState[BoardState["Lock"] = 2] = "Lock";
})(BoardState = exports.BoardState || (exports.BoardState = {}));
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    // @executeInEditMode
    function Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.endCard = null;
        _this.explosionFx = null;
        _this.Config = null;
        _this.progressBar = null;
        _this.moveCount = 0;
        _this.matchCount = 0;
        _this.shelves = [];
        _this.firstMatchId = -1;
        _this.AdsManager = null;
        _this._isCallCompleteGen = false;
        return _this;
    }
    Board_1 = Board;
    Object.defineProperty(Board, "Instance", {
        get: function () {
            var _a;
            if (this._instance == null) {
                this._instance = (_a = cc.director
                    .getScene()) === null || _a === void 0 ? void 0 : _a.getComponentInChildren(Board_1);
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    Board.prototype.start = function () {
        var _this = this;
        // this.initializeShelves()
        this.shelves = [];
        this.generateLevel();
        this.buttonOpenLink.node.on("click", function () {
            // SoundController.Instance(SoundController).stopAllSound();
            _this.AdsManager.installHandle();
        }, this);
        this.buttonOpenSmall.node.on("click", function () {
            // SoundController.Instance(SoundController).stopAllSound();
            _this.AdsManager.installHandle();
        }, this);
    };
    Board.prototype.isLock = function () {
        return this.boardState == BoardState.Lock;
    };
    Board.prototype.isGenerating = function () {
        return this.boardState == BoardState.Generating;
    };
    Board.prototype.setBoardState = function (state) {
        this.boardState = state;
    };
    Board.prototype.updateCombo = function () {
        // this.combo.updateCombo();
    };
    Board.prototype.updateMatchCount = function () {
        this.matchCount++;
        //here
        // SoundController.Instance(SoundController).playPrefabSound(PrefabSoundTrack.clearSound);
        if (this.matchCount > GameConfig_1.adConfig.matchTimeBeforeShowEndCard - 1) {
            this.endCard.active = true;
            GameConfig_1.ConfigData.Game.isWin = true;
            // this.buttonOpenLink.node.active = true;
        }
    };
    Board.prototype.createExplosionFx = function (effectPos) {
        var _fx = cc.instantiate(this.explosionFx);
        _fx.parent = this.node;
        _fx.setPosition(effectPos);
        this.scheduleOnce(function () {
            _fx.active = false;
        }, 1.68);
    };
    Board.prototype.generateLevel = function () {
        this.boardState = BoardState.Generating;
        this.generateLayerShelves();
    };
    Board.prototype.hideHand = function () {
        if (this.hand.node.active) {
            this.hand.node.active = false;
        }
    };
    Board.prototype.findHandStartPoint = function () {
        for (var i = 0; i < this.shelves.length; i++) {
            if (i % 3 != 1)
                continue;
            for (var j = 0; j < this.shelves[i].slots.length; j++) {
                if (!this.shelves[i].slots[j].isEmpty()) {
                    this.hand.setStartItem(this.shelves[i].slots[j].item);
                    return;
                }
            }
        }
    };
    Board.prototype.findHandEndPoint = function () {
        for (var i = 0; i < this.shelves.length; i++) {
            for (var j = 0; j < this.shelves[i].slots.length; j++) {
                if (this.shelves[i].slots[j].isEmpty()) {
                    this.hand.setEndSlot(this.shelves[i].slots[j]);
                    return;
                }
            }
        }
    };
    Board.prototype.generateLayerShelves = function () {
        var _a;
        var _this = this;
        this.shelfContainer.scale = 0.9;
        this.itemContainer.scale = 0.9;
        var size = this.shelfPrefab.data.getContentSize();
        var row = GameConfig_1.levelConfig.row, col = GameConfig_1.levelConfig.col;
        var possiblePositions = [];
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < col; j++) {
                possiblePositions.push({ i: i, j: j });
            }
        }
        for (var k = possiblePositions.length - 1; k > 0; k--) {
            var randIdx = Math.floor(Math.random() * (k + 1));
            _a = [possiblePositions[randIdx], possiblePositions[k]], possiblePositions[k] = _a[0], possiblePositions[randIdx] = _a[1];
        }
        var _loop_1 = function (i) {
            var index1 = i;
            var _loop_2 = function (j) {
                var index2 = j;
                this_1.scheduleOnce(function () {
                    var newShelf = cc.instantiate(_this.shelfPrefab);
                    _this.shelfContainer.addChild(newShelf);
                    var pos = _this.startPos
                        .getPosition()
                        .add(new cc.Vec2((size.width + GameConfig_1.layoutConfig.offsetX) * j, -(size.height + GameConfig_1.layoutConfig.offsetY) * i));
                    newShelf.setPosition(pos);
                    var shelf = newShelf.getComponent(Shelf_1.default);
                    if (shelf != null) {
                        if (j == 0) {
                            shelf.setShelfType(Shelf_1.ShelfType.Left);
                        }
                        else if (j == col - 1) {
                            shelf.setShelfType(Shelf_1.ShelfType.Right);
                        }
                        else {
                            shelf.setShelfType(Shelf_1.ShelfType.Middle);
                        }
                        shelf._Board = _this;
                        _this.shelves.push(shelf);
                    }
                    newShelf.setScale(0);
                    cc.tween(newShelf).to(0.1, { scale: 1 }).call(function () {
                        if (index1 == row - 1 && index2 == col - 1) {
                            _this.generateLayerItems();
                        }
                    }).start();
                }, index1 * 0.1 + index2 * 0.05);
            };
            for (var j = 0; j < col; j++) {
                _loop_2(j);
            }
        };
        var this_1 = this;
        for (var i = 0; i < row; i++) {
            _loop_1(i);
        }
        this.scheduleOnce(function () {
            GameConfig_1.ConfigData.Game.isCanClick = true;
        }, 1.2);
    };
    Board.prototype.randomEmpty = function (n) {
        return Array(n).fill(6);
        var result;
        var sum;
        do {
            result = [];
            sum = 0;
            for (var i = 0; i < n; i++) {
                var randomValue = Math.floor(Math.random() * 3) + 5; // Random number between 5 and 7
                result.push(randomValue);
                sum += randomValue;
            }
        } while (sum % 3 !== 0);
        return result;
    };
    Board.prototype.generateLayerItems = function () {
        var _this = this;
        var randomEmptySlots = this.randomEmpty(GameConfig_1.levelConfig.numberLayer);
        var totalSet = GameConfig_1.levelConfig.row * GameConfig_1.levelConfig.col * GameConfig_1.levelConfig.numberLayer;
        var numPerItem = Math.floor(totalSet / GameConfig_1.levelConfig.numberItem) * 3;
        var remainSet = (totalSet * 3 - numPerItem * GameConfig_1.levelConfig.numberItem) / 3;
        var ids = [];
        if (totalSet <= GameConfig_1.levelConfig.numberItem) {
            ids = new Array(totalSet).fill(3);
        }
        else {
            ids = new Array(GameConfig_1.levelConfig.numberItem);
            ids.fill(numPerItem);
        }
        for (var i = 0; i < remainSet; i++) {
            ids[Math.floor(Math.random() * ids.length)] += 3;
        }
        var firstMatchShelf = Math.floor(this.shelves.length / 2) + 1;
        var _loop_3 = function (layer) {
            var lay = layer;
            this_2.scheduleOnce(function () {
                var items = [];
                _this.shelves.forEach(function (shelf, index1) {
                    if (index1 == firstMatchShelf && lay == 0) {
                        var rIndex = Math.floor(Math.random() * ids.length);
                        _this.firstMatchId = rIndex;
                        for (var index = 0; index < 3; index++) {
                            var item = shelf.addItem(rIndex, index, lay, _this.itemContainer, _this, _this.Config);
                            if (index < 2) {
                                ids[rIndex]--;
                            }
                            else {
                                _this.hand.setEndPosition(item.node.position);
                                shelf.slots[index].setEmpty();
                                item.node.destroy();
                            }
                        }
                    }
                    else {
                        for (var index = 0; index < 3; index++) {
                            var rIndex = Math.floor(Math.random() * ids.length);
                            if (ids[rIndex] <= 0 ||
                                (index == 2 && shelf.testMatch(rIndex, lay))) {
                                var found = false;
                                for (var k = rIndex + 1; k < ids.length; k++) {
                                    if (ids[k] > 0 && !shelf.testMatch(k, lay)) {
                                        rIndex = k;
                                        found = true;
                                        break;
                                    }
                                }
                                if (!found) {
                                    for (var m = rIndex - 1; m >= 0; m--) {
                                        if (ids[m] > 0 && !shelf.testMatch(m, lay)) {
                                            rIndex = m;
                                            break;
                                        }
                                    }
                                }
                            }
                            ids[rIndex]--;
                            var item = shelf.addItem(rIndex, index, lay, _this.itemContainer, _this, _this.Config);
                            items.push(item);
                        }
                    }
                });
                for (var k = 0; k < randomEmptySlots[lay] / 3; k++) {
                    var rIndex = Math.floor(Math.random() * items.length);
                    ids[items[rIndex].id] += 3;
                    if (lay == 0) {
                        items[rIndex].currentSlot.setEmpty();
                    }
                    else {
                        for (var m = 0; m < _this.shelves.length; m++) {
                            _this.shelves[m].removeItem(items[rIndex]);
                        }
                    }
                    var remain = 2;
                    for (var m = 0; m < items.length; m++) {
                        if (items[m].id == items[rIndex].id && items[rIndex] !== items[m]) {
                            var it = items[m];
                            if (lay == 0) {
                                it.currentSlot.setEmpty();
                            }
                            else {
                                for (var p = 0; p < _this.shelves.length; p++) {
                                    _this.shelves[p].removeItem(it);
                                }
                            }
                            it.node.destroy();
                            remain--;
                            if (remain <= 0)
                                break;
                        }
                    }
                    items[rIndex].node.destroy();
                }
                if (lay == 0) {
                    var added_1 = false;
                    _this.shelves.forEach(function (shelf2) {
                        shelf2.slots.forEach(function (slot, index2) {
                            if (slot.isEmpty() && shelf2 != _this.shelves[firstMatchShelf] && !added_1) {
                                var item = shelf2.addItem(_this.firstMatchId, index2, lay, _this.itemContainer, _this, _this.Config);
                                _this.hand.setStartItem(item);
                                added_1 = true;
                            }
                        });
                    });
                }
            }, 0.5 * (GameConfig_1.levelConfig.numberLayer - 1 - lay));
        };
        var this_2 = this;
        for (var layer = GameConfig_1.levelConfig.numberLayer - 1; layer >= 0; layer--) {
            _loop_3(layer);
        }
    };
    Board.prototype.shuffleArray = function (array) {
        var _a;
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
        return array;
    };
    Board.prototype.handleCompleteGenerate = function () {
        var _this = this;
        if (this._isCallCompleteGen)
            return;
        this.boardState = BoardState.Playing;
        this._isCallCompleteGen = true;
        this.shelfContainer.children.reverse().forEach(function (child, index) {
            child.setSiblingIndex(index);
        });
        cc.tween(this.shelfContainer).to(0.25, { scale: 1 }, { easing: "quadOut" }).start();
        cc.tween(this.itemContainer).to(0.25, { scale: 1 }, { easing: "quadOut" }).call(function () {
            _this.scheduleOnce(function () {
                _this.hand.startMove();
                !GameConfig_1.ConfigData.Game.isPlayedBgSound && SoundController_1.SoundController.Instance(SoundController_1.SoundController).playDefaultSound(SoundController_1.LoopedSoundTrack.bgSound);
                GameConfig_1.ConfigData.Game.isPlayedBgSound = true;
                GameConfig_1.ConfigData.Game.isPlaying = true;
                // cc.log("gen completed!");
            }, 0.5);
        }).start();
    };
    Board.prototype.findFirstEmptySlot = function () {
        for (var i = 0; i < this.shelves.length; i++) {
            for (var j = 0; j < this.shelves[i].slots.length; j++) {
                if (this.shelves[i].slots[j].isEmpty()) {
                    return this.shelves[i].slots[j];
                }
            }
        }
        return null;
    };
    Board.prototype.hideItemsLayer = function (layer) {
        this.shelves.forEach(function (shelf) {
            if (layer >= shelf.layers.length)
                return;
            if (shelf.layers[layer] === null || shelf.layers[layer] === undefined)
                return;
            for (var i = 0; i < shelf.layers[layer].length; i++) {
                if (shelf.layers[layer][i] === null || shelf.layers[layer][i] === undefined)
                    continue;
                shelf.layers[layer][i].node.active = false;
            }
        });
    };
    var Board_1;
    Board._instance = null;
    __decorate([
        property(Hand_1.default)
    ], Board.prototype, "hand", void 0);
    __decorate([
        property(Combo_1.default)
    ], Board.prototype, "combo", void 0);
    __decorate([
        property(cc.Camera)
    ], Board.prototype, "camera", void 0);
    __decorate([
        property([cc.Prefab])
    ], Board.prototype, "shelfPrefab", void 0);
    __decorate([
        property([cc.Node])
    ], Board.prototype, "startPos", void 0);
    __decorate([
        property([cc.Node])
    ], Board.prototype, "shelfContainer", void 0);
    __decorate([
        property([cc.Node])
    ], Board.prototype, "itemContainer", void 0);
    __decorate([
        property(cc.Button)
    ], Board.prototype, "buttonOpenLink", void 0);
    __decorate([
        property(cc.Button)
    ], Board.prototype, "buttonOpenSmall", void 0);
    __decorate([
        property(cc.Node)
    ], Board.prototype, "endCard", void 0);
    __decorate([
        property(cc.Prefab)
    ], Board.prototype, "explosionFx", void 0);
    __decorate([
        property(Config_1.default)
    ], Board.prototype, "Config", void 0);
    __decorate([
        property(ProgressBar_1.ProgressBar)
    ], Board.prototype, "progressBar", void 0);
    __decorate([
        property(AdsManager_1.AdsManager)
    ], Board.prototype, "AdsManager", void 0);
    Board = Board_1 = __decorate([
        ccclass
        // @executeInEditMode
    ], Board);
    return Board;
}(cc.Component));
exports.default = Board;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUEwQztBQUMxQyxpQ0FBNEI7QUFDNUIsdURBQXNEO0FBQ3RELGdFQUFpRjtBQUNqRixvRkFBb0Y7QUFDcEYsK0JBQTBCO0FBQzFCLDBDQUFxQztBQUNyQyxrREFBc0Y7QUFFdEYsMENBQW9EO0FBQ3BELHNDQUFzQztBQUVoQyxJQUFBLEtBQTJDLEVBQUUsQ0FBQyxVQUFVLEVBQXRELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGlCQUFpQix1QkFBa0IsQ0FBQztBQUcvRCxJQUFrQixVQUlqQjtBQUpELFdBQWtCLFVBQVU7SUFDMUIsdURBQVUsQ0FBQTtJQUNWLGlEQUFPLENBQUE7SUFDUCwyQ0FBSSxDQUFBO0FBQ04sQ0FBQyxFQUppQixVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUkzQjtBQUtEO0lBQW1DLHlCQUFZO0lBRC9DLHFCQUFxQjtJQUNyQjtRQUFBLHFFQWthQztRQWpaQyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBbUJ6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLFlBQU0sR0FBVyxJQUFJLENBQUM7UUFHdEIsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsYUFBTyxHQUFZLEVBQUUsQ0FBQztRQUVyQixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBSWxDLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBK1Q5Qix3QkFBa0IsR0FBWSxLQUFLLENBQUM7O0lBMkN0QyxDQUFDO2NBbGFvQixLQUFLO0lBRXhCLHNCQUFXLGlCQUFRO2FBQW5COztZQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7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dXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEFkc01hbmFnZXIgfSBmcm9tIFwiLi9BZHNNYW5hZ2VyXCI7XHJcbmltcG9ydCBDb21ibyBmcm9tIFwiLi9Db21ib1wiO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0JhciB9IGZyb20gXCIuL0NvbXBvbmVudC9Qcm9ncmVzc0JhclwiO1xyXG5pbXBvcnQgeyBMb29wZWRTb3VuZFRyYWNrLCBTb3VuZENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVyL1NvdW5kQ29udHJvbGxlclwiO1xyXG4vLyBpbXBvcnQgeyBQcmVmYWJTb3VuZFRyYWNrLCBTb3VuZENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVyL1NvdW5kQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgSGFuZCBmcm9tIFwiLi9IYW5kXCI7XHJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4vY29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBsZXZlbENvbmZpZywgbGF5b3V0Q29uZmlnLCBhZENvbmZpZywgQ29uZmlnRGF0YSB9IGZyb20gXCIuL2NvbmZpZy9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBJdGVtIGZyb20gXCIuL2dhbWVwbGF5L0l0ZW1cIjtcclxuaW1wb3J0IFNoZWxmLCB7IFNoZWxmVHlwZSB9IGZyb20gXCIuL2dhbWVwbGF5L1NoZWxmXCI7XHJcbi8vIGltcG9ydCBTbG90IGZyb20gXCIuL2dhbWVwbGF5L1Nsb3RcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEJvYXJkU3RhdGUge1xyXG4gIEdlbmVyYXRpbmcsXHJcbiAgUGxheWluZyxcclxuICBMb2NrLFxyXG59XHJcblxyXG5cclxuQGNjY2xhc3NcclxuLy8gQGV4ZWN1dGVJbkVkaXRNb2RlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgX2luc3RhbmNlOiBCb2FyZCB8IG51bGwgPSBudWxsO1xyXG4gIHN0YXRpYyBnZXQgSW5zdGFuY2UoKTogQm9hcmQge1xyXG4gICAgaWYgKHRoaXMuX2luc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgdGhpcy5faW5zdGFuY2UgPSBjYy5kaXJlY3RvclxyXG4gICAgICAgIC5nZXRTY2VuZSgpXHJcbiAgICAgICAgPy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKEJvYXJkKSBhcyBCb2FyZDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICB9XHJcbiAgQHByb3BlcnR5KEhhbmQpXHJcbiAgaGFuZDogSGFuZDtcclxuICBAcHJvcGVydHkoQ29tYm8pXHJcbiAgY29tYm86IENvbWJvO1xyXG5cclxuXHJcbiAgQHByb3BlcnR5KGNjLkNhbWVyYSlcclxuICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICBzaGVsZlByZWZhYjogY2MuUHJlZmFiO1xyXG5cclxuICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gIHN0YXJ0UG9zOiBjYy5Ob2RlO1xyXG5cclxuICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gIHNoZWxmQ29udGFpbmVyOiBjYy5Ob2RlO1xyXG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgaXRlbUNvbnRhaW5lcjogY2MuTm9kZTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICBidXR0b25PcGVuTGluazogY2MuQnV0dG9uO1xyXG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgYnV0dG9uT3BlblNtYWxsOiBjYy5CdXR0b247XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGVuZENhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gIGV4cGxvc2lvbkZ4OiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoQ29uZmlnKVxyXG4gIENvbmZpZzogQ29uZmlnID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KFByb2dyZXNzQmFyKVxyXG4gIHByb2dyZXNzQmFyOiBQcm9ncmVzc0JhciA9IG51bGw7XHJcblxyXG4gIHB1YmxpYyBtb3ZlQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIG1hdGNoQ291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gIHB1YmxpYyBzaGVsdmVzOiBTaGVsZltdID0gW107XHJcbiAgcHJpdmF0ZSBib2FyZFN0YXRlOiBCb2FyZFN0YXRlO1xyXG4gIHByaXZhdGUgZmlyc3RNYXRjaElkOiBudW1iZXIgPSAtMTtcclxuXHJcblxyXG4gIEBwcm9wZXJ0eShBZHNNYW5hZ2VyKVxyXG4gIEFkc01hbmFnZXI6IEFkc01hbmFnZXIgPSBudWxsO1xyXG5cclxuICBzdGFydCgpIHtcclxuICAgIC8vIHRoaXMuaW5pdGlhbGl6ZVNoZWx2ZXMoKVxyXG4gICAgdGhpcy5zaGVsdmVzID0gW107XHJcbiAgICB0aGlzLmdlbmVyYXRlTGV2ZWwoKTtcclxuXHJcbiAgICB0aGlzLmJ1dHRvbk9wZW5MaW5rLm5vZGUub24oXHJcbiAgICAgIFwiY2xpY2tcIixcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIC8vIFNvdW5kQ29udHJvbGxlci5JbnN0YW5jZShTb3VuZENvbnRyb2xsZXIpLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuQWRzTWFuYWdlci5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcbiAgICB0aGlzLmJ1dHRvbk9wZW5TbWFsbC5ub2RlLm9uKFxyXG4gICAgICBcImNsaWNrXCIsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICAvLyBTb3VuZENvbnRyb2xsZXIuSW5zdGFuY2UoU291bmRDb250cm9sbGVyKS5zdG9wQWxsU291bmQoKTtcclxuICAgICAgICB0aGlzLkFkc01hbmFnZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG4gIGlzTG9jaygpIHtcclxuICAgIHJldHVybiB0aGlzLmJvYXJkU3RhdGUgPT0gQm9hcmRTdGF0ZS5Mb2NrO1xyXG4gIH1cclxuXHJcbiAgaXNHZW5lcmF0aW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmRTdGF0ZSA9PSBCb2FyZFN0YXRlLkdlbmVyYXRpbmc7XHJcbiAgfVxyXG5cclxuICBzZXRCb2FyZFN0YXRlKHN0YXRlOiBCb2FyZFN0YXRlKSB7XHJcbiAgICB0aGlzLmJvYXJkU3RhdGUgPSBzdGF0ZTtcclxuICB9XHJcblxyXG5cclxuICB1cGRhdGVDb21ibygpIHtcclxuICAgIC8vIHRoaXMuY29tYm8udXBkYXRlQ29tYm8oKTtcclxuICB9XHJcblxyXG5cclxuICB1cGRhdGVNYXRjaENvdW50KCkge1xyXG4gICAgdGhpcy5tYXRjaENvdW50Kys7XHJcbiAgICAvL2hlcmVcclxuICAgIC8vIFNvdW5kQ29udHJvbGxlci5JbnN0YW5jZShTb3VuZENvbnRyb2xsZXIpLnBsYXlQcmVmYWJTb3VuZChQcmVmYWJTb3VuZFRyYWNrLmNsZWFyU291bmQpO1xyXG5cclxuICAgIGlmICh0aGlzLm1hdGNoQ291bnQgPiBhZENvbmZpZy5tYXRjaFRpbWVCZWZvcmVTaG93RW5kQ2FyZCAtIDEpIHtcclxuICAgICAgdGhpcy5lbmRDYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIENvbmZpZ0RhdGEuR2FtZS5pc1dpbiA9IHRydWU7XHJcbiAgICAgIC8vIHRoaXMuYnV0dG9uT3Blbkxpbmsubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBjcmVhdGVFeHBsb3Npb25GeChlZmZlY3RQb3M6IGNjLlZlYzIpOiB2b2lkIHtcclxuICAgIGNvbnN0IF9meCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZXhwbG9zaW9uRngpO1xyXG4gICAgX2Z4LnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgIF9meC5zZXRQb3NpdGlvbihlZmZlY3RQb3MpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBfZnguYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LCAxLjY4KVxyXG4gIH1cclxuXHJcblxyXG4gIGdlbmVyYXRlTGV2ZWwoKSB7XHJcbiAgICB0aGlzLmJvYXJkU3RhdGUgPSBCb2FyZFN0YXRlLkdlbmVyYXRpbmc7XHJcbiAgICB0aGlzLmdlbmVyYXRlTGF5ZXJTaGVsdmVzKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgaGlkZUhhbmQoKSB7XHJcbiAgICBpZiAodGhpcy5oYW5kLm5vZGUuYWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuaGFuZC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGZpbmRIYW5kU3RhcnRQb2ludCgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGVsdmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChpICUgMyAhPSAxKSBjb250aW51ZTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNoZWx2ZXNbaV0uc2xvdHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2hlbHZlc1tpXS5zbG90c1tqXS5pc0VtcHR5KCkpIHtcclxuICAgICAgICAgIHRoaXMuaGFuZC5zZXRTdGFydEl0ZW0odGhpcy5zaGVsdmVzW2ldLnNsb3RzW2pdLml0ZW0pO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGZpbmRIYW5kRW5kUG9pbnQoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hlbHZlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuc2hlbHZlc1tpXS5zbG90cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGlmICh0aGlzLnNoZWx2ZXNbaV0uc2xvdHNbal0uaXNFbXB0eSgpKSB7XHJcbiAgICAgICAgICB0aGlzLmhhbmQuc2V0RW5kU2xvdCh0aGlzLnNoZWx2ZXNbaV0uc2xvdHNbal0pO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGdlbmVyYXRlTGF5ZXJTaGVsdmVzKCkge1xyXG4gICAgdGhpcy5zaGVsZkNvbnRhaW5lci5zY2FsZSA9IDAuOTtcclxuICAgIHRoaXMuaXRlbUNvbnRhaW5lci5zY2FsZSA9IDAuOTtcclxuICAgIGNvbnN0IHNpemU6IGNjLlNpemUgPSB0aGlzLnNoZWxmUHJlZmFiLmRhdGEuZ2V0Q29udGVudFNpemUoKTtcclxuICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IGxldmVsQ29uZmlnO1xyXG5cclxuICAgIGxldCBwb3NzaWJsZVBvc2l0aW9uczogeyBpOiBudW1iZXIsIGo6IG51bWJlciB9W10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdzsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sOyBqKyspIHtcclxuICAgICAgICBwb3NzaWJsZVBvc2l0aW9ucy5wdXNoKHsgaSwgaiB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGsgPSBwb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGggLSAxOyBrID4gMDsgay0tKSB7XHJcbiAgICAgIGxldCByYW5kSWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGsgKyAxKSk7XHJcbiAgICAgIFtwb3NzaWJsZVBvc2l0aW9uc1trXSwgcG9zc2libGVQb3NpdGlvbnNbcmFuZElkeF1dID0gW3Bvc3NpYmxlUG9zaXRpb25zW3JhbmRJZHhdLCBwb3NzaWJsZVBvc2l0aW9uc1trXV07XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3c7IGkrKykge1xyXG4gICAgICBsZXQgaW5kZXgxID0gaTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2w7IGorKykge1xyXG4gICAgICAgIGxldCBpbmRleDIgPSBqO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5ld1NoZWxmOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaGVsZlByZWZhYik7XHJcbiAgICAgICAgICB0aGlzLnNoZWxmQ29udGFpbmVyLmFkZENoaWxkKG5ld1NoZWxmKTtcclxuICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuc3RhcnRQb3NcclxuICAgICAgICAgICAgLmdldFBvc2l0aW9uKClcclxuICAgICAgICAgICAgLmFkZChcclxuICAgICAgICAgICAgICBuZXcgY2MuVmVjMihcclxuICAgICAgICAgICAgICAgIChzaXplLndpZHRoICsgbGF5b3V0Q29uZmlnLm9mZnNldFgpICogaixcclxuICAgICAgICAgICAgICAgIC0oc2l6ZS5oZWlnaHQgKyBsYXlvdXRDb25maWcub2Zmc2V0WSkgKiBpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgbmV3U2hlbGYuc2V0UG9zaXRpb24ocG9zKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBzaGVsZjogU2hlbGYgPSBuZXdTaGVsZi5nZXRDb21wb25lbnQoU2hlbGYpO1xyXG5cclxuICAgICAgICAgIGlmIChzaGVsZiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChqID09IDApIHtcclxuICAgICAgICAgICAgICBzaGVsZi5zZXRTaGVsZlR5cGUoU2hlbGZUeXBlLkxlZnQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGogPT0gY29sIC0gMSkge1xyXG4gICAgICAgICAgICAgIHNoZWxmLnNldFNoZWxmVHlwZShTaGVsZlR5cGUuUmlnaHQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHNoZWxmLnNldFNoZWxmVHlwZShTaGVsZlR5cGUuTWlkZGxlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2hlbGYuX0JvYXJkID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5zaGVsdmVzLnB1c2goc2hlbGYpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbmV3U2hlbGYuc2V0U2NhbGUoMCk7XHJcbiAgICAgICAgICBjYy50d2VlbihuZXdTaGVsZikudG8oMC4xLCB7IHNjYWxlOiAxIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXgxID09IHJvdyAtIDEgJiYgaW5kZXgyID09IGNvbCAtIDEpIHtcclxuICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlTGF5ZXJJdGVtcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0sIGluZGV4MSAqIDAuMSArIGluZGV4MiAqIDAuMDUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBDb25maWdEYXRhLkdhbWUuaXNDYW5DbGljayA9IHRydWU7XHJcbiAgICB9LCAxLjIpXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHJhbmRvbUVtcHR5KG46IG51bWJlcik6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBBcnJheShuKS5maWxsKDYpO1xyXG4gICAgbGV0IHJlc3VsdDogbnVtYmVyW107XHJcbiAgICBsZXQgc3VtOiBudW1iZXI7XHJcblxyXG4gICAgZG8ge1xyXG4gICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgc3VtID0gMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBjb25zdCByYW5kb21WYWx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpICsgNTsgLy8gUmFuZG9tIG51bWJlciBiZXR3ZWVuIDUgYW5kIDdcclxuICAgICAgICByZXN1bHQucHVzaChyYW5kb21WYWx1ZSk7XHJcbiAgICAgICAgc3VtICs9IHJhbmRvbVZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9IHdoaWxlIChzdW0gJSAzICE9PSAwKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcblxyXG4gIGdlbmVyYXRlTGF5ZXJJdGVtcygpIHtcclxuICAgIGNvbnN0IHJhbmRvbUVtcHR5U2xvdHM6IG51bWJlcltdID0gdGhpcy5yYW5kb21FbXB0eShcclxuICAgICAgbGV2ZWxDb25maWcubnVtYmVyTGF5ZXJcclxuICAgICk7XHJcblxyXG4gICAgbGV0IHRvdGFsU2V0OiBudW1iZXIgPVxyXG4gICAgICBsZXZlbENvbmZpZy5yb3cgKiBsZXZlbENvbmZpZy5jb2wgKiBsZXZlbENvbmZpZy5udW1iZXJMYXllcjtcclxuICAgIGxldCBudW1QZXJJdGVtID0gTWF0aC5mbG9vcih0b3RhbFNldCAvIGxldmVsQ29uZmlnLm51bWJlckl0ZW0pICogMztcclxuICAgIGxldCByZW1haW5TZXQgPSAodG90YWxTZXQgKiAzIC0gbnVtUGVySXRlbSAqIGxldmVsQ29uZmlnLm51bWJlckl0ZW0pIC8gMztcclxuICAgIGxldCBpZHM6IG51bWJlcltdID0gW107XHJcbiAgICBpZiAodG90YWxTZXQgPD0gbGV2ZWxDb25maWcubnVtYmVySXRlbSkge1xyXG4gICAgICBpZHMgPSBuZXcgQXJyYXkodG90YWxTZXQpLmZpbGwoMyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZHMgPSBuZXcgQXJyYXkobGV2ZWxDb25maWcubnVtYmVySXRlbSk7XHJcbiAgICAgIGlkcy5maWxsKG51bVBlckl0ZW0pO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1haW5TZXQ7IGkrKykge1xyXG4gICAgICBpZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaWRzLmxlbmd0aCldICs9IDM7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZpcnN0TWF0Y2hTaGVsZiA9IE1hdGguZmxvb3IodGhpcy5zaGVsdmVzLmxlbmd0aCAvIDIpICsgMTtcclxuXHJcbiAgICBmb3IgKGxldCBsYXllciA9IGxldmVsQ29uZmlnLm51bWJlckxheWVyIC0gMTsgbGF5ZXIgPj0gMDsgbGF5ZXItLSkge1xyXG4gICAgICBsZXQgbGF5ID0gbGF5ZXI7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW1zOiBJdGVtW10gPSBbXTtcclxuICAgICAgICB0aGlzLnNoZWx2ZXMuZm9yRWFjaCgoc2hlbGYsIGluZGV4MSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGluZGV4MSA9PSBmaXJzdE1hdGNoU2hlbGYgJiYgbGF5ID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGlkcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0TWF0Y2hJZCA9IHJJbmRleDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDM7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICBsZXQgaXRlbSA9IHNoZWxmLmFkZEl0ZW0ockluZGV4LCBpbmRleCwgbGF5LCB0aGlzLml0ZW1Db250YWluZXIsIHRoaXMsIHRoaXMuQ29uZmlnKTtcclxuICAgICAgICAgICAgICBpZiAoaW5kZXggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICBpZHNbckluZGV4XS0tO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZC5zZXRFbmRQb3NpdGlvbihpdGVtLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgc2hlbGYuc2xvdHNbaW5kZXhdLnNldEVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMzsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgIGxldCBySW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpZHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBpZHNbckluZGV4XSA8PSAwIHx8XHJcbiAgICAgICAgICAgICAgICAoaW5kZXggPT0gMiAmJiBzaGVsZi50ZXN0TWF0Y2gockluZGV4LCBsYXkpKVxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gckluZGV4ICsgMTsgayA8IGlkcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoaWRzW2tdID4gMCAmJiAhc2hlbGYudGVzdE1hdGNoKGssIGxheSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBySW5kZXggPSBrO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBtID0gckluZGV4IC0gMTsgbSA+PSAwOyBtLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWRzW21dID4gMCAmJiAhc2hlbGYudGVzdE1hdGNoKG0sIGxheSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJJbmRleCA9IG07XHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWRzW3JJbmRleF0tLTtcclxuICAgICAgICAgICAgICBsZXQgaXRlbTogSXRlbSA9IHNoZWxmLmFkZEl0ZW0ockluZGV4LCBpbmRleCwgbGF5LCB0aGlzLml0ZW1Db250YWluZXIsIHRoaXMsIHRoaXMuQ29uZmlnKVxyXG4gICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCByYW5kb21FbXB0eVNsb3RzW2xheV0gLyAzOyBrKyspIHtcclxuICAgICAgICAgIGNvbnN0IHJJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGl0ZW1zLmxlbmd0aCk7XHJcbiAgICAgICAgICBpZHNbaXRlbXNbckluZGV4XS5pZF0gKz0gMztcclxuICAgICAgICAgIGlmIChsYXkgPT0gMCkge1xyXG4gICAgICAgICAgICBpdGVtc1tySW5kZXhdLmN1cnJlbnRTbG90LnNldEVtcHR5KCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBtID0gMDsgbSA8IHRoaXMuc2hlbHZlcy5sZW5ndGg7IG0rKykge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hlbHZlc1ttXS5yZW1vdmVJdGVtKGl0ZW1zW3JJbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgcmVtYWluID0gMjtcclxuICAgICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgaXRlbXMubGVuZ3RoOyBtKyspIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW1zW21dLmlkID09IGl0ZW1zW3JJbmRleF0uaWQgJiYgaXRlbXNbckluZGV4XSAhPT0gaXRlbXNbbV0pIHtcclxuICAgICAgICAgICAgICBjb25zdCBpdCA9IGl0ZW1zW21dO1xyXG4gICAgICAgICAgICAgIGlmIChsYXkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaXQuY3VycmVudFNsb3Quc2V0RW1wdHkoKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCB0aGlzLnNoZWx2ZXMubGVuZ3RoOyBwKyspIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zaGVsdmVzW3BdLnJlbW92ZUl0ZW0oaXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpdC5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICByZW1haW4tLTtcclxuICAgICAgICAgICAgICBpZiAocmVtYWluIDw9IDApIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaXRlbXNbckluZGV4XS5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxheSA9PSAwKSB7XHJcbiAgICAgICAgICBsZXQgYWRkZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuc2hlbHZlcy5mb3JFYWNoKHNoZWxmMiA9PiB7XHJcbiAgICAgICAgICAgIHNoZWxmMi5zbG90cy5mb3JFYWNoKChzbG90LCBpbmRleDIpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoc2xvdC5pc0VtcHR5KCkgJiYgc2hlbGYyICE9IHRoaXMuc2hlbHZlc1tmaXJzdE1hdGNoU2hlbGZdICYmICFhZGRlZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBzaGVsZjIuYWRkSXRlbSh0aGlzLmZpcnN0TWF0Y2hJZCwgaW5kZXgyLCBsYXksIHRoaXMuaXRlbUNvbnRhaW5lciwgdGhpcywgdGhpcy5Db25maWcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kLnNldFN0YXJ0SXRlbShpdGVtKTtcclxuICAgICAgICAgICAgICAgIGFkZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDAuNSAqIChsZXZlbENvbmZpZy5udW1iZXJMYXllciAtIDEgLSBsYXkpKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2h1ZmZsZUFycmF5PFQ+KGFycmF5OiBUW10pOiBUW10ge1xyXG4gICAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgICBbYXJyYXlbaV0sIGFycmF5W2pdXSA9IFthcnJheVtqXSwgYXJyYXlbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgX2lzQ2FsbENvbXBsZXRlR2VuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaGFuZGxlQ29tcGxldGVHZW5lcmF0ZSgpIHtcclxuICAgIGlmKHRoaXMuX2lzQ2FsbENvbXBsZXRlR2VuKSByZXR1cm47XHJcbiAgICB0aGlzLmJvYXJkU3RhdGUgPSBCb2FyZFN0YXRlLlBsYXlpbmc7XHJcbiAgICB0aGlzLl9pc0NhbGxDb21wbGV0ZUdlbiA9IHRydWU7XHJcbiAgICB0aGlzLnNoZWxmQ29udGFpbmVyLmNoaWxkcmVuLnJldmVyc2UoKS5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcclxuICAgICAgY2hpbGQuc2V0U2libGluZ0luZGV4KGluZGV4KTtcclxuICAgIH0pO1xyXG4gICAgY2MudHdlZW4odGhpcy5zaGVsZkNvbnRhaW5lcikudG8oMC4yNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJxdWFkT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgIGNjLnR3ZWVuKHRoaXMuaXRlbUNvbnRhaW5lcikudG8oMC4yNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJxdWFkT3V0XCIgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmhhbmQuc3RhcnRNb3ZlKCk7XHJcbiAgICAgICAgIUNvbmZpZ0RhdGEuR2FtZS5pc1BsYXllZEJnU291bmQgJiYgU291bmRDb250cm9sbGVyLkluc3RhbmNlKFNvdW5kQ29udHJvbGxlcikucGxheURlZmF1bHRTb3VuZChMb29wZWRTb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgIENvbmZpZ0RhdGEuR2FtZS5pc1BsYXllZEJnU291bmQgPSB0cnVlO1xyXG4gICAgICAgIENvbmZpZ0RhdGEuR2FtZS5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNjLmxvZyhcImdlbiBjb21wbGV0ZWQhXCIpO1xyXG4gICAgICB9LCAwLjUpXHJcbiAgICB9KS5zdGFydCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIGZpbmRGaXJzdEVtcHR5U2xvdCgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGVsdmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zaGVsdmVzW2ldLnNsb3RzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hlbHZlc1tpXS5zbG90c1tqXS5pc0VtcHR5KCkpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnNoZWx2ZXNbaV0uc2xvdHNbal07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG5cclxuICBoaWRlSXRlbXNMYXllcihsYXllcjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNoZWx2ZXMuZm9yRWFjaCgoc2hlbGYpID0+IHtcclxuICAgICAgaWYgKGxheWVyID49IHNoZWxmLmxheWVycy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgaWYgKHNoZWxmLmxheWVyc1tsYXllcl0gPT09IG51bGwgfHwgc2hlbGYubGF5ZXJzW2xheWVyXSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hlbGYubGF5ZXJzW2xheWVyXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzaGVsZi5sYXllcnNbbGF5ZXJdW2ldID09PSBudWxsIHx8IHNoZWxmLmxheWVyc1tsYXllcl1baV0gPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgICAgc2hlbGYubGF5ZXJzW2xheWVyXVtpXS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameplay/Item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '434a8S51gJD1rix/9KwGVQ0', 'Item');
// scripts/gameplay/Item.ts

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
var Board_1 = require("../Board");
var GameConfig_1 = require("../config/GameConfig");
var SoundController_1 = require("../Controller/SoundController");
var Slot_1 = require("./Slot");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lockColor = new cc.Color(87, 87, 87, 255);
        _this.initialTouchPos = null;
        _this.isLock = false;
        _this.nearestSlot = null;
        _this.touching = false;
        // V39
        _this._isHasRocket = false;
        _this._Config = null;
        _this._Board = null;
        // this.initialTouchPos = new cc.Vec2(localTouchPos.x, localTouchPos.y);
        _this.touchOffset = new cc.Vec3(0, -50);
        return _this;
    }
    Item.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    Item.prototype.setLock = function (isLock) {
        this.isLock = isLock;
    };
    Item.prototype.setActive = function (isActive) {
        this.isLock = !isActive;
        if (!isActive) {
            this.node.color = this.lockColor;
        }
        else {
            this.node.color = cc.Color.WHITE;
        }
    };
    Item.prototype.setActiveAnimation = function (isActive) {
        this.isLock = !isActive;
        var fadeDuration = 0.2;
        if (!isActive) {
            // this.node.color = this.lockColor;
            cc.tween(this.node).to(fadeDuration, {
                color: this.lockColor,
            }).start();
        }
        else {
            // this.node.color = this.lockColor;
            cc.tween(this.node).to(fadeDuration, {
                color: cc.Color.WHITE,
            }).start();
        }
    };
    Item.prototype.setSlot = function (slot) {
        this.currentSlot = slot;
        this.setIndex(slot.index);
    };
    Item.prototype.setId = function (id) {
        this.id = id;
        this.sprite.spriteFrame = this._Config.itemConfig.getSprite(id);
    };
    Item.prototype.setIndex = function (index) {
        this.index = index;
    };
    Item.prototype.match = function () {
        var _this = this;
        this._Board.setBoardState(Board_1.BoardState.Lock);
        cc.tween(this.node)
            .delay(0.2)
            .to(GameConfig_1.animationConfig.matchDuration, {
            scale: 0,
        }, {
            easing: "backIn",
        })
            .call(function () {
            _this.node.destroy();
        })
            .start();
    };
    Item.prototype.moveTo = function (target) {
        var _this = this;
        // this.setLock(true);
        this._Board.setBoardState(Board_1.BoardState.Lock);
        cc.tween(this.node)
            .to(GameConfig_1.animationConfig.toSlotDuration, {
            position: new cc.Vec3(target.x, target.y, 0),
        })
            .call(function () {
            _this._Board.setBoardState(Board_1.BoardState.Playing);
            // this.setLock(false);
        })
            .start();
    };
    Item.prototype.handleMoveToBehind = function (target, layer) {
        var _this = this;
        this.node.scale = 0;
        cc.tween(this.node)
            .to(GameConfig_1.animationConfig.spawnDuration, {
            scale: 0.86,
        }, { easing: "backOut" })
            .to(GameConfig_1.animationConfig.spawnDuration, {
            position: new cc.Vec3(target.x, target.y, 0),
        }, { easing: "backIn" })
            .call(function () {
            if (layer > 0) {
                _this.setActiveAnimation(false);
            }
            else {
                _this._Board.handleCompleteGenerate();
            }
            _this._Board.hideItemsLayer(layer + 2);
        })
            .start();
    };
    Item.prototype.onTouchStart = function (event) {
        if (!GameConfig_1.ConfigData.Game.isCanClick)
            return;
        if (this.isLock || this._Board.isLock() || this._Board.isGenerating())
            return;
        SoundController_1.SoundController.Instance(SoundController_1.SoundController).playPrefabSound(SoundController_1.PrefabSoundTrack.tilePickedSound);
        this._Board.hideHand();
        this.initialTouchPos = event.getLocation();
        this.node.setSiblingIndex(this.node.parent.childrenCount);
        this.node.zIndex = 0;
        this.touching = true;
    };
    Item.prototype.onTouchMove = function (event) {
        if (!GameConfig_1.ConfigData.Game.isCanClick)
            return;
        if (this.isLock || this._Board.isLock() || !this.touching)
            return;
        var currentTouchPos = event.getLocation();
        // Chuyển vị trí chạm sang tọa độ local của node cha (dưới dạng Vec2)
        var localTouchPos2D = this.node.parent.convertToNodeSpaceAR(currentTouchPos);
        var localTouchPos = new cc.Vec3(localTouchPos2D.x, localTouchPos2D.y, 0); // Chuyển thành Vec3
        if (!this.initialTouchPos) {
            // Lưu vị trí chạm đầu tiên & tính offset
            this.initialTouchPos = new cc.Vec2(localTouchPos.x, localTouchPos.y);
            this.touchOffset = this.node.position.sub(localTouchPos);
        }
        // Đảm bảo touchOffset không null trước khi sử dụng
        if (!this.touchOffset) {
            this.touchOffset = cc.Vec3.ZERO;
        }
        // Cập nhật vị trí của node theo vị trí chạm mới + offset ban đầu
        this.node.setPosition(localTouchPos.add(this.touchOffset));
    };
    // onTouchMove(event: cc.Event.EventTouch) {
    //   if(!ConfigData.Game.isCanClick) return;
    //   if (this.isLock || this._Board.isLock() || !this.touching) return;
    //   let currentTouchPos = event.getLocation();
    //   if (this.initialTouchPos === null) {
    //     this.initialTouchPos = event.getLocation();
    //   }
    //   this.deltaPos = currentTouchPos.sub(this.initialTouchPos);
    //   this.node.setPosition(this.node.position.add(new cc.Vec3(this.deltaPos.x, this.deltaPos.y, 0)));
    //   this.initialTouchPos = currentTouchPos;
    // }
    Item.prototype.onTouchEnd = function (event) {
        var _this = this;
        if (!GameConfig_1.ConfigData.Game.isCanClick)
            return;
        if (this.isLock || this._Board.isLock() || !this.touching)
            return;
        this.touching = false;
        if (this.nearestSlot === null) {
            this.nearestSlot = this.currentSlot;
        }
        var tempPos = this.nearestSlot.node.parent.convertToWorldSpaceAR(this.nearestSlot.node.position);
        var targetPos = this.node.parent.convertToNodeSpaceAR(tempPos);
        // SoundController.Instance(SoundController).playPrefabSound(PrefabSoundTrack.onShelfSound);
        // this.setLock(true);
        this._Board.setBoardState(Board_1.BoardState.Lock);
        cc.tween(this.node)
            .to(GameConfig_1.animationConfig.toSlotDuration, {
            position: targetPos,
        })
            .call(function () {
            // this.setLock(false);
            _this.nearestSlot.setItem(_this);
            console.log("check");
            console.log(_this.nearestSlot, _this.currentSlot);
            if (_this.currentSlot !== _this.nearestSlot) {
                console.log("check");
                _this.currentSlot.setEmpty();
                _this.currentSlot.checkShelf();
                _this.setSlot(_this.nearestSlot);
                _this.currentSlot.checkMatch();
            }
            _this.scheduleOnce(function () {
                _this._Board.setBoardState(Board_1.BoardState.Playing);
            }, 0.1);
        })
            .start();
    };
    Item.prototype.onCollisionEnter = function (other, self) {
        if (this.touching == false)
            return;
        if (other.node.group == "slot") {
            console.log("check");
            if (other.node.getComponent(Slot_1.default).isEmpty()) {
                this.nearestSlot = other.node.getComponent(Slot_1.default);
                // return;
            }
            // this.nearestSlot = other.node.getComponent(Slot);
        }
    };
    Item.prototype.onCollisionExit = function (other, self) {
        if (this.touching == false)
            return;
        if (other.node.group == "slot") {
            if (other.node.getComponent(Slot_1.default) === this.nearestSlot ||
                this.nearestSlot === null) {
                console.log("check");
                this.nearestSlot = this.currentSlot;
            }
        }
    };
    Item.prototype.onDestroy = function () {
        if (this._Board.isLock) {
            this._Board.setBoardState(Board_1.BoardState.Playing);
        }
    };
    __decorate([
        property([cc.Sprite])
    ], Item.prototype, "sprite", void 0);
    __decorate([
        property([cc.Color])
    ], Item.prototype, "lockColor", void 0);
    Item = __decorate([
        ccclass
    ], Item);
    return Item;
}(cc.Component));
exports.default = Item;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZXBsYXlcXEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0NBQTZDO0FBRTdDLG1EQUFtRTtBQUNuRSxpRUFBb0c7QUFHcEcsK0JBQTBCO0FBRXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBZ1FDO1FBM1BDLGVBQVMsR0FBYSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFJNUMscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUlmLGlCQUFXLEdBQVMsSUFBSSxDQUFDO1FBQ3pCLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFHekIsTUFBTTtRQUNOLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBMEM5QixhQUFPLEdBQVcsSUFBSSxDQUFDO1FBVXZCLFlBQU0sR0FBVSxJQUFJLENBQUM7UUFvRXJCLHdFQUF3RTtRQUV4RSxpQkFBVyxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7SUFrSDdDLENBQUM7SUF6T0Msb0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25F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QztTQUNGO0lBQ0gsQ0FBQztJQUNTLHdCQUFTLEdBQW5CO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQTdQRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3Q0FDSjtJQUdsQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQzsyQ0FDK0I7SUFMakMsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWdReEI7SUFBRCxXQUFDO0NBaFFELEFBZ1FDLENBaFFpQyxFQUFFLENBQUMsU0FBUyxHQWdRN0M7a0JBaFFvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkLCB7IEJvYXJkU3RhdGUgfSBmcm9tIFwiLi4vQm9hcmRcIjtcclxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBhbmltYXRpb25Db25maWcsIENvbmZpZ0RhdGEgfSBmcm9tIFwiLi4vY29uZmlnL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IHsgTG9vcGVkU291bmRUcmFjaywgUHJlZmFiU291bmRUcmFjaywgU291bmRDb250cm9sbGVyIH0gZnJvbSBcIi4uL0NvbnRyb2xsZXIvU291bmRDb250cm9sbGVyXCI7XHJcbi8vIGltcG9ydCB7IExvb3BlZFNvdW5kVHJhY2ssIFByZWZhYlNvdW5kVHJhY2ssIFNvdW5kQ29udHJvbGxlciB9IGZyb20gXCIuLi9Db250cm9sbGVyL1NvdW5kQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgU2hlbGYgZnJvbSBcIi4vU2hlbGZcIjtcclxuaW1wb3J0IFNsb3QgZnJvbSBcIi4vU2xvdFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShbY2MuU3ByaXRlXSlcclxuICBzcHJpdGU6IGNjLlNwcml0ZTtcclxuXHJcbiAgQHByb3BlcnR5KFtjYy5Db2xvcl0pXHJcbiAgbG9ja0NvbG9yOiBjYy5Db2xvciA9IG5ldyBjYy5Db2xvcig4NywgODcsIDg3LCAyNTUpO1xyXG5cclxuICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICBwdWJsaWMgaW5kZXg6IG51bWJlcjtcclxuICBwcml2YXRlIGluaXRpYWxUb3VjaFBvczogY2MuVmVjMiA9IG51bGw7XHJcbiAgcHJpdmF0ZSBkZWx0YVBvczogY2MuVmVjMjtcclxuICBwcml2YXRlIGlzTG9jayA9IGZhbHNlO1xyXG4gIC8vIHB1YmxpYyBzaGVsZjogU2hlbGY7XHJcbiAgcHVibGljIGN1cnJlbnRTbG90OiBTbG90O1xyXG5cclxuICBwcml2YXRlIG5lYXJlc3RTbG90OiBTbG90ID0gbnVsbDtcclxuICBwcml2YXRlIHRvdWNoaW5nID0gZmFsc2U7XHJcblxyXG5cclxuICAvLyBWMzlcclxuICBfaXNIYXNSb2NrZXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gIH1cclxuICBzZXRMb2NrKGlzTG9jazogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc0xvY2sgPSBpc0xvY2s7XHJcbiAgfVxyXG4gIHNldEFjdGl2ZShpc0FjdGl2ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc0xvY2sgPSAhaXNBY3RpdmU7XHJcbiAgICBpZiAoIWlzQWN0aXZlKSB7XHJcbiAgICAgIHRoaXMubm9kZS5jb2xvciA9IHRoaXMubG9ja0NvbG9yO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEFjdGl2ZUFuaW1hdGlvbihpc0FjdGl2ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc0xvY2sgPSAhaXNBY3RpdmU7XHJcbiAgICBsZXQgZmFkZUR1cmF0aW9uID0gMC4yO1xyXG4gICAgaWYgKCFpc0FjdGl2ZSkge1xyXG4gICAgICAvLyB0aGlzLm5vZGUuY29sb3IgPSB0aGlzLmxvY2tDb2xvcjtcclxuICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50byhmYWRlRHVyYXRpb24sIHtcclxuICAgICAgICBjb2xvcjogdGhpcy5sb2NrQ29sb3IsXHJcbiAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyB0aGlzLm5vZGUuY29sb3IgPSB0aGlzLmxvY2tDb2xvcjtcclxuICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50byhmYWRlRHVyYXRpb24sIHtcclxuICAgICAgICBjb2xvcjogY2MuQ29sb3IuV0hJVEUsXHJcbiAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgc2V0U2xvdChzbG90OiBTbG90KSB7XHJcbiAgICB0aGlzLmN1cnJlbnRTbG90ID0gc2xvdDtcclxuICAgIHRoaXMuc2V0SW5kZXgoc2xvdC5pbmRleCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgX0NvbmZpZzogQ29uZmlnID0gbnVsbDtcclxuICBzZXRJZChpZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuX0NvbmZpZy5pdGVtQ29uZmlnLmdldFNwcml0ZShpZCk7XHJcbiAgfVxyXG4gIHNldEluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICB9XHJcblxyXG5cclxuICBfQm9hcmQ6IEJvYXJkID0gbnVsbDtcclxuICBtYXRjaCgpIHtcclxuICAgIHRoaXMuX0JvYXJkLnNldEJvYXJkU3RhdGUoQm9hcmRTdGF0ZS5Mb2NrKTtcclxuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgLmRlbGF5KDAuMilcclxuICAgICAgLnRvKFxyXG4gICAgICAgIGFuaW1hdGlvbkNvbmZpZy5tYXRjaER1cmF0aW9uLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNjYWxlOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZWFzaW5nOiBcImJhY2tJblwiLFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG4gIG1vdmVUbyh0YXJnZXQ6IGNjLlZlYzIpIHtcclxuICAgIC8vIHRoaXMuc2V0TG9jayh0cnVlKTtcclxuICAgIHRoaXMuX0JvYXJkLnNldEJvYXJkU3RhdGUoQm9hcmRTdGF0ZS5Mb2NrKTtcclxuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgLnRvKGFuaW1hdGlvbkNvbmZpZy50b1Nsb3REdXJhdGlvbiwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgY2MuVmVjMyh0YXJnZXQueCwgdGFyZ2V0LnksIDApLFxyXG4gICAgICB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fQm9hcmQuc2V0Qm9hcmRTdGF0ZShCb2FyZFN0YXRlLlBsYXlpbmcpO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0TG9jayhmYWxzZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuICBoYW5kbGVNb3ZlVG9CZWhpbmQodGFyZ2V0OiBjYy5WZWMyLCBsYXllcjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm5vZGUuc2NhbGUgPSAwO1xyXG4gICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAudG8oYW5pbWF0aW9uQ29uZmlnLnNwYXduRHVyYXRpb24sIHtcclxuICAgICAgICBzY2FsZTogMC44NixcclxuICAgICAgfSwgeyBlYXNpbmc6IFwiYmFja091dFwiIH0pXHJcbiAgICAgIC50byhhbmltYXRpb25Db25maWcuc3Bhd25EdXJhdGlvbiwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgY2MuVmVjMyh0YXJnZXQueCwgdGFyZ2V0LnksIDApLFxyXG4gICAgICB9LCB7IGVhc2luZzogXCJiYWNrSW5cIiB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxheWVyID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5zZXRBY3RpdmVBbmltYXRpb24oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX0JvYXJkLmhhbmRsZUNvbXBsZXRlR2VuZXJhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fQm9hcmQuaGlkZUl0ZW1zTGF5ZXIobGF5ZXIgKyAyKTtcclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuXHJcbiAgICBpZiAoIUNvbmZpZ0RhdGEuR2FtZS5pc0NhbkNsaWNrKSByZXR1cm47XHJcblxyXG4gICAgaWYgKHRoaXMuaXNMb2NrIHx8IHRoaXMuX0JvYXJkLmlzTG9jaygpIHx8IHRoaXMuX0JvYXJkLmlzR2VuZXJhdGluZygpKSByZXR1cm47XHJcblxyXG4gICAgU291bmRDb250cm9sbGVyLkluc3RhbmNlKFNvdW5kQ29udHJvbGxlcikucGxheVByZWZhYlNvdW5kKFByZWZhYlNvdW5kVHJhY2sudGlsZVBpY2tlZFNvdW5kKTtcclxuXHJcbiAgICB0aGlzLl9Cb2FyZC5oaWRlSGFuZCgpO1xyXG4gICAgdGhpcy5pbml0aWFsVG91Y2hQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgdGhpcy5ub2RlLnNldFNpYmxpbmdJbmRleCh0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuQ291bnQpO1xyXG4gICAgdGhpcy5ub2RlLnpJbmRleCA9IDA7XHJcbiAgICB0aGlzLnRvdWNoaW5nID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8vIHRoaXMuaW5pdGlhbFRvdWNoUG9zID0gbmV3IGNjLlZlYzIobG9jYWxUb3VjaFBvcy54LCBsb2NhbFRvdWNoUG9zLnkpO1xyXG5cclxuICB0b3VjaE9mZnNldDogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKDAsIC01MCk7XHJcbiAgb25Ub3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgIGlmICghQ29uZmlnRGF0YS5HYW1lLmlzQ2FuQ2xpY2spIHJldHVybjtcclxuICAgIGlmICh0aGlzLmlzTG9jayB8fCB0aGlzLl9Cb2FyZC5pc0xvY2soKSB8fCAhdGhpcy50b3VjaGluZykgcmV0dXJuO1xyXG5cclxuICAgIGxldCBjdXJyZW50VG91Y2hQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgIC8vIENodXnhu4NuIHbhu4sgdHLDrSBjaOG6oW0gc2FuZyB04buNYSDEkeG7mSBsb2NhbCBj4bunYSBub2RlIGNoYSAoZMaw4bubaSBk4bqhbmcgVmVjMilcclxuICAgIGxldCBsb2NhbFRvdWNoUG9zMkQgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGN1cnJlbnRUb3VjaFBvcyk7XHJcbiAgICBsZXQgbG9jYWxUb3VjaFBvcyA9IG5ldyBjYy5WZWMzKGxvY2FsVG91Y2hQb3MyRC54LCBsb2NhbFRvdWNoUG9zMkQueSwgMCk7IC8vIENodXnhu4NuIHRow6BuaCBWZWMzXHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxUb3VjaFBvcykge1xyXG4gICAgICAvLyBMxrB1IHbhu4sgdHLDrSBjaOG6oW0gxJHhuqd1IHRpw6puICYgdMOtbmggb2Zmc2V0XHJcbiAgICAgIHRoaXMuaW5pdGlhbFRvdWNoUG9zID0gbmV3IGNjLlZlYzIobG9jYWxUb3VjaFBvcy54LCBsb2NhbFRvdWNoUG9zLnkpO1xyXG4gICAgICB0aGlzLnRvdWNoT2Zmc2V0ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1Yihsb2NhbFRvdWNoUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDEkOG6o20gYuG6o28gdG91Y2hPZmZzZXQga2jDtG5nIG51bGwgdHLGsOG7m2Mga2hpIHPhu60gZOG7pW5nXHJcbiAgICBpZiAoIXRoaXMudG91Y2hPZmZzZXQpIHtcclxuICAgICAgdGhpcy50b3VjaE9mZnNldCA9IGNjLlZlYzMuWkVSTztcclxuICAgIH1cclxuXHJcbiAgICAvLyBD4bqtcCBuaOG6rXQgduG7iyB0csOtIGPhu6dhIG5vZGUgdGhlbyB24buLIHRyw60gY2jhuqFtIG3hu5tpICsgb2Zmc2V0IGJhbiDEkeG6p3VcclxuICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihsb2NhbFRvdWNoUG9zLmFkZCh0aGlzLnRvdWNoT2Zmc2V0KSk7XHJcbiAgfVxyXG5cclxuICAvLyBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gIC8vICAgaWYoIUNvbmZpZ0RhdGEuR2FtZS5pc0NhbkNsaWNrKSByZXR1cm47XHJcbiAgLy8gICBpZiAodGhpcy5pc0xvY2sgfHwgdGhpcy5fQm9hcmQuaXNMb2NrKCkgfHwgIXRoaXMudG91Y2hpbmcpIHJldHVybjtcclxuICAvLyAgIGxldCBjdXJyZW50VG91Y2hQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gIC8vICAgaWYgKHRoaXMuaW5pdGlhbFRvdWNoUG9zID09PSBudWxsKSB7XHJcbiAgLy8gICAgIHRoaXMuaW5pdGlhbFRvdWNoUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAvLyAgIH1cclxuICAvLyAgIHRoaXMuZGVsdGFQb3MgPSBjdXJyZW50VG91Y2hQb3Muc3ViKHRoaXMuaW5pdGlhbFRvdWNoUG9zKTtcclxuICAvLyAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24uYWRkKG5ldyBjYy5WZWMzKHRoaXMuZGVsdGFQb3MueCwgdGhpcy5kZWx0YVBvcy55LCAwKSkpO1xyXG4gIC8vICAgdGhpcy5pbml0aWFsVG91Y2hQb3MgPSBjdXJyZW50VG91Y2hQb3M7XHJcbiAgLy8gfVxyXG5cclxuICBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICBpZiAoIUNvbmZpZ0RhdGEuR2FtZS5pc0NhbkNsaWNrKSByZXR1cm47XHJcblxyXG4gICAgaWYgKHRoaXMuaXNMb2NrIHx8IHRoaXMuX0JvYXJkLmlzTG9jaygpIHx8ICF0aGlzLnRvdWNoaW5nKSByZXR1cm47XHJcbiAgICB0aGlzLnRvdWNoaW5nID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5uZWFyZXN0U2xvdCA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLm5lYXJlc3RTbG90ID0gdGhpcy5jdXJyZW50U2xvdDtcclxuICAgIH1cclxuICAgIGxldCB0ZW1wUG9zID0gdGhpcy5uZWFyZXN0U2xvdC5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoXHJcbiAgICAgIHRoaXMubmVhcmVzdFNsb3Qubm9kZS5wb3NpdGlvblxyXG4gICAgKTtcclxuICAgIGxldCB0YXJnZXRQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRlbXBQb3MpO1xyXG5cclxuICAgIC8vIFNvdW5kQ29udHJvbGxlci5JbnN0YW5jZShTb3VuZENvbnRyb2xsZXIpLnBsYXlQcmVmYWJTb3VuZChQcmVmYWJTb3VuZFRyYWNrLm9uU2hlbGZTb3VuZCk7XHJcblxyXG4gICAgLy8gdGhpcy5zZXRMb2NrKHRydWUpO1xyXG4gICAgdGhpcy5fQm9hcmQuc2V0Qm9hcmRTdGF0ZShCb2FyZFN0YXRlLkxvY2spO1xyXG4gICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAudG8oYW5pbWF0aW9uQ29uZmlnLnRvU2xvdER1cmF0aW9uLCB7XHJcbiAgICAgICAgcG9zaXRpb246IHRhcmdldFBvcyxcclxuICAgICAgfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNldExvY2soZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubmVhcmVzdFNsb3Quc2V0SXRlbSh0aGlzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmVhcmVzdFNsb3QsIHRoaXMuY3VycmVudFNsb3QpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTbG90ICE9PSB0aGlzLm5lYXJlc3RTbG90KSB7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja1wiKTtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFNsb3Quc2V0RW1wdHkoKTtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFNsb3QuY2hlY2tTaGVsZigpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTbG90KHRoaXMubmVhcmVzdFNsb3QpO1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50U2xvdC5jaGVja01hdGNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX0JvYXJkLnNldEJvYXJkU3RhdGUoQm9hcmRTdGF0ZS5QbGF5aW5nKTtcclxuICAgICAgICB9LCAwLjEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcblxyXG5cclxuICBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcclxuICAgIGlmICh0aGlzLnRvdWNoaW5nID09IGZhbHNlKSByZXR1cm47XHJcbiAgICBpZiAob3RoZXIubm9kZS5ncm91cCA9PSBcInNsb3RcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNoZWNrXCIpO1xyXG4gICAgICBcclxuICAgICAgaWYgKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KFNsb3QpLmlzRW1wdHkoKSkge1xyXG4gICAgICAgIHRoaXMubmVhcmVzdFNsb3QgPSBvdGhlci5ub2RlLmdldENvbXBvbmVudChTbG90KTtcclxuICAgICAgICAvLyByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gdGhpcy5uZWFyZXN0U2xvdCA9IG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KFNsb3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIG9uQ29sbGlzaW9uRXhpdChvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XHJcbiAgICBpZiAodGhpcy50b3VjaGluZyA9PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgaWYgKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJzbG90XCIpIHtcclxuICAgICAgXHJcbiAgICAgIGlmIChcclxuICAgICAgICBvdGhlci5ub2RlLmdldENvbXBvbmVudChTbG90KSA9PT0gdGhpcy5uZWFyZXN0U2xvdCB8fFxyXG4gICAgICAgIHRoaXMubmVhcmVzdFNsb3QgPT09IG51bGxcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja1wiKTtcclxuICAgICAgICB0aGlzLm5lYXJlc3RTbG90ID0gdGhpcy5jdXJyZW50U2xvdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX0JvYXJkLmlzTG9jaykge1xyXG4gICAgICB0aGlzLl9Cb2FyZC5zZXRCb2FyZFN0YXRlKEJvYXJkU3RhdGUuUGxheWluZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
