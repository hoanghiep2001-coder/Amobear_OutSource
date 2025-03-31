"use strict";
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
        !GameConfig_1.ConfigData.OutSource.isHasCart && item.node.setPosition(itemPos);
        var behindPos = parent.convertToNodeSpaceAR(tempBehindPos);
        this._itemContainer = parent;
        if (layer == 0) {
            this.slots[positionIndex].setItem(item);
            item.setSlot(this.slots[positionIndex]);
        }
        // item.handleMoveToBehind(behindPos, layer);
        GameConfig_1.ConfigData.OutSource.isHasCart ? item.itemPos = behindPos : item.handleMoveToBehind(behindPos, layer);
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