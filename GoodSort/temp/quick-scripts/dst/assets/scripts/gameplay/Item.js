
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