
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
        // PA_02
        _this.itemPos = null;
        _this.itemRotate = null;
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
    Item.prototype.setActiveWithCart = function (isActive) {
        this.node.active = isActive;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZXBsYXlcXEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0NBQTZDO0FBRTdDLG1EQUFtRTtBQUNuRSxpRUFBb0c7QUFHcEcsK0JBQTBCO0FBRXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBeVFDO1FBcFFDLGVBQVMsR0FBYSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFJNUMscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUlmLGlCQUFXLEdBQVMsSUFBSSxDQUFDO1FBQ3pCLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFHekIsUUFBUTtRQUNSLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsZ0JBQVUsR0FBVyxJQUFJLENBQUM7UUFpRDFCLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFVdkIsWUFBTSxHQUFVLElBQUksQ0FBQztRQXFFckIsd0VBQXdFO1FBRXhFLGlCQUFXLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztJQWtIN0MsQ0FBQztJQWpQQyxvQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFX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V0FBVyxLQUFLLElBQUksRUFDekI7Z0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JDO1NBQ0Y7SUFDSCxDQUFDO0lBQ1Msd0JBQVMsR0FBbkI7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGtCQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBdFFEO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dDQUNKO0lBR2xCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDOzJDQUMrQjtJQUxqQyxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBeVF4QjtJQUFELFdBQUM7Q0F6UUQsQUF5UUMsQ0F6UWlDLEVBQUUsQ0FBQyxTQUFTLEdBeVE3QztrQkF6UW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmQsIHsgQm9hcmRTdGF0ZSB9IGZyb20gXCIuLi9Cb2FyZFwiO1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9jb25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCB7IGFuaW1hdGlvbkNvbmZpZywgQ29uZmlnRGF0YSB9IGZyb20gXCIuLi9jb25maWcvR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBMb29wZWRTb3VuZFRyYWNrLCBQcmVmYWJTb3VuZFRyYWNrLCBTb3VuZENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vQ29udHJvbGxlci9Tb3VuZENvbnRyb2xsZXJcIjtcclxuLy8gaW1wb3J0IHsgTG9vcGVkU291bmRUcmFjaywgUHJlZmFiU291bmRUcmFjaywgU291bmRDb250cm9sbGVyIH0gZnJvbSBcIi4uL0NvbnRyb2xsZXIvU291bmRDb250cm9sbGVyXCI7XHJcbmltcG9ydCBTaGVsZiBmcm9tIFwiLi9TaGVsZlwiO1xyXG5pbXBvcnQgU2xvdCBmcm9tIFwiLi9TbG90XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KFtjYy5TcHJpdGVdKVxyXG4gIHNwcml0ZTogY2MuU3ByaXRlO1xyXG5cclxuICBAcHJvcGVydHkoW2NjLkNvbG9yXSlcclxuICBsb2NrQ29sb3I6IGNjLkNvbG9yID0gbmV3IGNjLkNvbG9yKDg3LCA4NywgODcsIDI1NSk7XHJcblxyXG4gIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gIHB1YmxpYyBpbmRleDogbnVtYmVyO1xyXG4gIHByaXZhdGUgaW5pdGlhbFRvdWNoUG9zOiBjYy5WZWMyID0gbnVsbDtcclxuICBwcml2YXRlIGRlbHRhUG9zOiBjYy5WZWMyO1xyXG4gIHByaXZhdGUgaXNMb2NrID0gZmFsc2U7XHJcbiAgLy8gcHVibGljIHNoZWxmOiBTaGVsZjtcclxuICBwdWJsaWMgY3VycmVudFNsb3Q6IFNsb3Q7XHJcblxyXG4gIHByaXZhdGUgbmVhcmVzdFNsb3Q6IFNsb3QgPSBudWxsO1xyXG4gIHByaXZhdGUgdG91Y2hpbmcgPSBmYWxzZTtcclxuXHJcblxyXG4gIC8vIFBBXzAyXHJcbiAgaXRlbVBvczogY2MuVmVjMiA9IG51bGw7XHJcbiAgaXRlbVJvdGF0ZTogbnVtYmVyID0gbnVsbDtcclxuXHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gIH1cclxuICBzZXRMb2NrKGlzTG9jazogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc0xvY2sgPSBpc0xvY2s7XHJcbiAgfVxyXG5cclxuXHJcbiAgc2V0QWN0aXZlV2l0aENhcnQoaXNBY3RpdmU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubm9kZS5hY3RpdmUgPSBpc0FjdGl2ZTtcclxuICB9XHJcblxyXG5cclxuICBzZXRBY3RpdmUoaXNBY3RpdmU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaXNMb2NrID0gIWlzQWN0aXZlO1xyXG4gICAgaWYgKCFpc0FjdGl2ZSkge1xyXG4gICAgICB0aGlzLm5vZGUuY29sb3IgPSB0aGlzLmxvY2tDb2xvcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRBY3RpdmVBbmltYXRpb24oaXNBY3RpdmU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaXNMb2NrID0gIWlzQWN0aXZlO1xyXG4gICAgbGV0IGZhZGVEdXJhdGlvbiA9IDAuMjtcclxuICAgIGlmICghaXNBY3RpdmUpIHtcclxuICAgICAgLy8gdGhpcy5ub2RlLmNvbG9yID0gdGhpcy5sb2NrQ29sb3I7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oZmFkZUR1cmF0aW9uLCB7XHJcbiAgICAgICAgY29sb3I6IHRoaXMubG9ja0NvbG9yLFxyXG4gICAgICB9KS5zdGFydCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gdGhpcy5ub2RlLmNvbG9yID0gdGhpcy5sb2NrQ29sb3I7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oZmFkZUR1cmF0aW9uLCB7XHJcbiAgICAgICAgY29sb3I6IGNjLkNvbG9yLldISVRFLFxyXG4gICAgICB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHNldFNsb3Qoc2xvdDogU2xvdCkge1xyXG4gICAgdGhpcy5jdXJyZW50U2xvdCA9IHNsb3Q7XHJcbiAgICB0aGlzLnNldEluZGV4KHNsb3QuaW5kZXgpO1xyXG4gIH1cclxuXHJcblxyXG4gIF9Db25maWc6IENvbmZpZyA9IG51bGw7XHJcbiAgc2V0SWQoaWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLl9Db25maWcuaXRlbUNvbmZpZy5nZXRTcHJpdGUoaWQpO1xyXG4gIH1cclxuICBzZXRJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgfVxyXG5cclxuXHJcbiAgX0JvYXJkOiBCb2FyZCA9IG51bGw7XHJcbiAgbWF0Y2goKSB7XHJcbiAgICB0aGlzLl9Cb2FyZC5zZXRCb2FyZFN0YXRlKEJvYXJkU3RhdGUuTG9jayk7XHJcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgIC5kZWxheSgwLjIpXHJcbiAgICAgIC50byhcclxuICAgICAgICBhbmltYXRpb25Db25maWcubWF0Y2hEdXJhdGlvbixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzY2FsZTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGVhc2luZzogXCJiYWNrSW5cIixcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuICBtb3ZlVG8odGFyZ2V0OiBjYy5WZWMyKSB7XHJcbiAgICAvLyB0aGlzLnNldExvY2sodHJ1ZSk7XHJcbiAgICB0aGlzLl9Cb2FyZC5zZXRCb2FyZFN0YXRlKEJvYXJkU3RhdGUuTG9jayk7XHJcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgIC50byhhbmltYXRpb25Db25maWcudG9TbG90RHVyYXRpb24sIHtcclxuICAgICAgICBwb3NpdGlvbjogbmV3IGNjLlZlYzModGFyZ2V0LngsIHRhcmdldC55LCAwKSxcclxuICAgICAgfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX0JvYXJkLnNldEJvYXJkU3RhdGUoQm9hcmRTdGF0ZS5QbGF5aW5nKTtcclxuICAgICAgICAvLyB0aGlzLnNldExvY2soZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcbiAgaGFuZGxlTW92ZVRvQmVoaW5kKHRhcmdldDogY2MuVmVjMiwgbGF5ZXI6IG51bWJlcikge1xyXG4gICAgdGhpcy5ub2RlLnNjYWxlID0gMDtcclxuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgLnRvKGFuaW1hdGlvbkNvbmZpZy5zcGF3bkR1cmF0aW9uLCB7XHJcbiAgICAgICAgc2NhbGU6IDAuODYsXHJcbiAgICAgIH0sIHsgZWFzaW5nOiBcImJhY2tPdXRcIiB9KVxyXG4gICAgICAudG8oYW5pbWF0aW9uQ29uZmlnLnNwYXduRHVyYXRpb24sIHtcclxuICAgICAgICBwb3NpdGlvbjogbmV3IGNjLlZlYzModGFyZ2V0LngsIHRhcmdldC55LCAwKSxcclxuICAgICAgfSwgeyBlYXNpbmc6IFwiYmFja0luXCIgfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIGlmIChsYXllciA+IDApIHtcclxuICAgICAgICAgIHRoaXMuc2V0QWN0aXZlQW5pbWF0aW9uKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl9Cb2FyZC5oYW5kbGVDb21wbGV0ZUdlbmVyYXRlKCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fQm9hcmQuaGlkZUl0ZW1zTGF5ZXIobGF5ZXIgKyAyKTtcclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuXHJcbiAgICBpZiAoIUNvbmZpZ0RhdGEuR2FtZS5pc0NhbkNsaWNrKSByZXR1cm47XHJcblxyXG4gICAgaWYgKHRoaXMuaXNMb2NrIHx8IHRoaXMuX0JvYXJkLmlzTG9jaygpIHx8IHRoaXMuX0JvYXJkLmlzR2VuZXJhdGluZygpKSByZXR1cm47XHJcblxyXG4gICAgU291bmRDb250cm9sbGVyLkluc3RhbmNlKFNvdW5kQ29udHJvbGxlcikucGxheVByZWZhYlNvdW5kKFByZWZhYlNvdW5kVHJhY2sudGlsZVBpY2tlZFNvdW5kKTtcclxuXHJcbiAgICB0aGlzLl9Cb2FyZC5oaWRlSGFuZCgpO1xyXG4gICAgdGhpcy5pbml0aWFsVG91Y2hQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgdGhpcy5ub2RlLnNldFNpYmxpbmdJbmRleCh0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuQ291bnQpO1xyXG4gICAgdGhpcy5ub2RlLnpJbmRleCA9IDA7XHJcbiAgICB0aGlzLnRvdWNoaW5nID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8vIHRoaXMuaW5pdGlhbFRvdWNoUG9zID0gbmV3IGNjLlZlYzIobG9jYWxUb3VjaFBvcy54LCBsb2NhbFRvdWNoUG9zLnkpO1xyXG5cclxuICB0b3VjaE9mZnNldDogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKDAsIC01MCk7XHJcbiAgb25Ub3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgIGlmICghQ29uZmlnRGF0YS5HYW1lLmlzQ2FuQ2xpY2spIHJldHVybjtcclxuICAgIGlmICh0aGlzLmlzTG9jayB8fCB0aGlzLl9Cb2FyZC5pc0xvY2soKSB8fCAhdGhpcy50b3VjaGluZykgcmV0dXJuO1xyXG5cclxuICAgIGxldCBjdXJyZW50VG91Y2hQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgIC8vIENodXnhu4NuIHbhu4sgdHLDrSBjaOG6oW0gc2FuZyB04buNYSDEkeG7mSBsb2NhbCBj4bunYSBub2RlIGNoYSAoZMaw4bubaSBk4bqhbmcgVmVjMilcclxuICAgIGxldCBsb2NhbFRvdWNoUG9zMkQgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGN1cnJlbnRUb3VjaFBvcyk7XHJcbiAgICBsZXQgbG9jYWxUb3VjaFBvcyA9IG5ldyBjYy5WZWMzKGxvY2FsVG91Y2hQb3MyRC54LCBsb2NhbFRvdWNoUG9zMkQueSwgMCk7IC8vIENodXnhu4NuIHRow6BuaCBWZWMzXHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxUb3VjaFBvcykge1xyXG4gICAgICAvLyBMxrB1IHbhu4sgdHLDrSBjaOG6oW0gxJHhuqd1IHRpw6puICYgdMOtbmggb2Zmc2V0XHJcbiAgICAgIHRoaXMuaW5pdGlhbFRvdWNoUG9zID0gbmV3IGNjLlZlYzIobG9jYWxUb3VjaFBvcy54LCBsb2NhbFRvdWNoUG9zLnkpO1xyXG4gICAgICB0aGlzLnRvdWNoT2Zmc2V0ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1Yihsb2NhbFRvdWNoUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDEkOG6o20gYuG6o28gdG91Y2hPZmZzZXQga2jDtG5nIG51bGwgdHLGsOG7m2Mga2hpIHPhu60gZOG7pW5nXHJcbiAgICBpZiAoIXRoaXMudG91Y2hPZmZzZXQpIHtcclxuICAgICAgdGhpcy50b3VjaE9mZnNldCA9IGNjLlZlYzMuWkVSTztcclxuICAgIH1cclxuXHJcbiAgICAvLyBD4bqtcCBuaOG6rXQgduG7iyB0csOtIGPhu6dhIG5vZGUgdGhlbyB24buLIHRyw60gY2jhuqFtIG3hu5tpICsgb2Zmc2V0IGJhbiDEkeG6p3VcclxuICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihsb2NhbFRvdWNoUG9zLmFkZCh0aGlzLnRvdWNoT2Zmc2V0KSk7XHJcbiAgfVxyXG5cclxuICAvLyBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gIC8vICAgaWYoIUNvbmZpZ0RhdGEuR2FtZS5pc0NhbkNsaWNrKSByZXR1cm47XHJcbiAgLy8gICBpZiAodGhpcy5pc0xvY2sgfHwgdGhpcy5fQm9hcmQuaXNMb2NrKCkgfHwgIXRoaXMudG91Y2hpbmcpIHJldHVybjtcclxuICAvLyAgIGxldCBjdXJyZW50VG91Y2hQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gIC8vICAgaWYgKHRoaXMuaW5pdGlhbFRvdWNoUG9zID09PSBudWxsKSB7XHJcbiAgLy8gICAgIHRoaXMuaW5pdGlhbFRvdWNoUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAvLyAgIH1cclxuICAvLyAgIHRoaXMuZGVsdGFQb3MgPSBjdXJyZW50VG91Y2hQb3Muc3ViKHRoaXMuaW5pdGlhbFRvdWNoUG9zKTtcclxuICAvLyAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24uYWRkKG5ldyBjYy5WZWMzKHRoaXMuZGVsdGFQb3MueCwgdGhpcy5kZWx0YVBvcy55LCAwKSkpO1xyXG4gIC8vICAgdGhpcy5pbml0aWFsVG91Y2hQb3MgPSBjdXJyZW50VG91Y2hQb3M7XHJcbiAgLy8gfVxyXG5cclxuICBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICBpZiAoIUNvbmZpZ0RhdGEuR2FtZS5pc0NhbkNsaWNrKSByZXR1cm47XHJcblxyXG4gICAgaWYgKHRoaXMuaXNMb2NrIHx8IHRoaXMuX0JvYXJkLmlzTG9jaygpIHx8ICF0aGlzLnRvdWNoaW5nKSByZXR1cm47XHJcbiAgICB0aGlzLnRvdWNoaW5nID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5uZWFyZXN0U2xvdCA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLm5lYXJlc3RTbG90ID0gdGhpcy5jdXJyZW50U2xvdDtcclxuICAgIH1cclxuICAgIGxldCB0ZW1wUG9zID0gdGhpcy5uZWFyZXN0U2xvdC5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoXHJcbiAgICAgIHRoaXMubmVhcmVzdFNsb3Qubm9kZS5wb3NpdGlvblxyXG4gICAgKTtcclxuICAgIGxldCB0YXJnZXRQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRlbXBQb3MpO1xyXG5cclxuICAgIC8vIFNvdW5kQ29udHJvbGxlci5JbnN0YW5jZShTb3VuZENvbnRyb2xsZXIpLnBsYXlQcmVmYWJTb3VuZChQcmVmYWJTb3VuZFRyYWNrLm9uU2hlbGZTb3VuZCk7XHJcblxyXG4gICAgLy8gdGhpcy5zZXRMb2NrKHRydWUpO1xyXG4gICAgdGhpcy5fQm9hcmQuc2V0Qm9hcmRTdGF0ZShCb2FyZFN0YXRlLkxvY2spO1xyXG4gICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAudG8oYW5pbWF0aW9uQ29uZmlnLnRvU2xvdER1cmF0aW9uLCB7XHJcbiAgICAgICAgcG9zaXRpb246IHRhcmdldFBvcyxcclxuICAgICAgfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNldExvY2soZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubmVhcmVzdFNsb3Quc2V0SXRlbSh0aGlzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmVhcmVzdFNsb3QsIHRoaXMuY3VycmVudFNsb3QpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTbG90ICE9PSB0aGlzLm5lYXJlc3RTbG90KSB7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja1wiKTtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFNsb3Quc2V0RW1wdHkoKTtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFNsb3QuY2hlY2tTaGVsZigpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTbG90KHRoaXMubmVhcmVzdFNsb3QpO1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50U2xvdC5jaGVja01hdGNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX0JvYXJkLnNldEJvYXJkU3RhdGUoQm9hcmRTdGF0ZS5QbGF5aW5nKTtcclxuICAgICAgICB9LCAwLjEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcblxyXG5cclxuICBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcclxuICAgIGlmICh0aGlzLnRvdWNoaW5nID09IGZhbHNlKSByZXR1cm47XHJcbiAgICBpZiAob3RoZXIubm9kZS5ncm91cCA9PSBcInNsb3RcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNoZWNrXCIpO1xyXG4gICAgICBcclxuICAgICAgaWYgKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KFNsb3QpLmlzRW1wdHkoKSkge1xyXG4gICAgICAgIHRoaXMubmVhcmVzdFNsb3QgPSBvdGhlci5ub2RlLmdldENvbXBvbmVudChTbG90KTtcclxuICAgICAgICAvLyByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gdGhpcy5uZWFyZXN0U2xvdCA9IG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KFNsb3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIG9uQ29sbGlzaW9uRXhpdChvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XHJcbiAgICBpZiAodGhpcy50b3VjaGluZyA9PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgaWYgKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJzbG90XCIpIHtcclxuICAgICAgXHJcbiAgICAgIGlmIChcclxuICAgICAgICBvdGhlci5ub2RlLmdldENvbXBvbmVudChTbG90KSA9PT0gdGhpcy5uZWFyZXN0U2xvdCB8fFxyXG4gICAgICAgIHRoaXMubmVhcmVzdFNsb3QgPT09IG51bGxcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja1wiKTtcclxuICAgICAgICB0aGlzLm5lYXJlc3RTbG90ID0gdGhpcy5jdXJyZW50U2xvdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX0JvYXJkLmlzTG9jaykge1xyXG4gICAgICB0aGlzLl9Cb2FyZC5zZXRCb2FyZFN0YXRlKEJvYXJkU3RhdGUuUGxheWluZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==