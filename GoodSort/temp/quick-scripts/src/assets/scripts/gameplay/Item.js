"use strict";
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