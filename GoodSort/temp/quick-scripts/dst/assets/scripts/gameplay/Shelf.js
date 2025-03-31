
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZXBsYXlcXFNoZWxmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx3REFBdUQ7QUFHdkQsbURBQWlGO0FBQ2pGLGlFQUFrRjtBQUNsRiwrQkFBMEI7QUFDMUIsK0JBQTBCO0FBRXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBd1FDO1FBaFFDLGtCQUFZLEdBQXFCLEVBQUUsQ0FBQztRQUdwQyxXQUFLLEdBQVcsRUFBRSxDQUFDO1FBRVosWUFBTSxHQUFhLEVBQUUsQ0FBQztRQUU3Qiw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLHVCQUF1QjtRQUN2QixrQ0FBa0M7UUFFbEMsWUFBTSxHQUFVLElBQUksQ0FBQztRQXVDckIsb0JBQWMsR0FBWSxJQUFJLENBQUM7O0lBNk1qQyxDQUFDO0lBbFBDLHNCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFHRCxpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ3pCLHFCQUFLLEdBQWY7UUFDRSxvREFBb0Q7UUFDcEQsb0RBQW9EO1FBQ3BELHVDQUF1QztJQUN6QyxDQUFDO0lBR0QsMkNBQTJDO0lBQzNDLDBCQUEwQjtJQUMxQiw2REFBNkQ7SUFDN0QsbUZBQW1GO0lBQ25GLG1DQUFtQztJQUNuQyw4Q0FBOEM7SUFDOUMsa0RBQWtEO0lBQ2xELHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLDRDQUE0QztJQUM1QyxtREFBbUQ7SUFDbkQsc0VBQXNFO0lBQ3RFLG1FQUFtRTtJQUNuRSxzRUFBc0U7SUFDdEUsc0NBQXNDO0lBQ3RDLElBQUk7SUFJ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LElBQUksQ0FBQyxFQUFFO3dCQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDOUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDL0IsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxTQUFTO2dDQUFFLFNBQVM7NEJBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDbkQ7cUJBQ0Y7b0JBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUM5QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBQ2QsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxTQUFTOzRCQUFFLFNBQVM7d0JBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7d0JBQzNCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMs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QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb2FyZCBmcm9tIFwiLi4vQm9hcmRcIjtcclxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXIgfSBmcm9tIFwiLi4vQ29tcG9uZW50L1Byb2dyZXNzQmFyXCI7XHJcbmltcG9ydCB7IFJvY2tldCB9IGZyb20gXCIuLi9Db21wb25lbnQvUm9ja2V0XCI7XHJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4uL2NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0IHsgYW5pbWF0aW9uQ29uZmlnLCBDb25maWdEYXRhLCBsYXlvdXRDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IHsgUHJlZmFiU291bmRUcmFjaywgU291bmRDb250cm9sbGVyIH0gZnJvbSBcIi4uL0NvbnRyb2xsZXIvU291bmRDb250cm9sbGVyXCI7XHJcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcclxuaW1wb3J0IFNsb3QgZnJvbSBcIi4vU2xvdFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoZWxmIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgaXRlbVByZWZhYjogY2MuUHJlZmFiO1xyXG5cclxuICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgbWF0Y2hQcmVmYWI6IGNjLlByZWZhYjtcclxuXHJcbiAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgc2hlbGZTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShbU2xvdF0pXHJcbiAgc2xvdHM6IFNsb3RbXSA9IFtdO1xyXG4gIHB1YmxpYyBzcHJpdGU6IGNjLlNwcml0ZTtcclxuICBwdWJsaWMgbGF5ZXJzOiBJdGVtW11bXSA9IFtdO1xyXG5cclxuICAvLyBpc0FjdGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgLy8gaXRlbUluU2hlbGZzOiBJdGVtW10gPSBbXTtcclxuICAvLyBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gIC8vIHJvY2tldEhlbHBlcjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgX0JvYXJkOiBCb2FyZCA9IG51bGw7XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuc3ByaXRlID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICB9XHJcblxyXG5cclxuICAvLyBfaXNIYXNSb2NrZXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvLyBfaXNTcGF3blJvY2tldDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgIC8vIGNvbnN0IG51bTogbnVtYmVyID0gY2MubWF0aC5yYW5kb21SYW5nZUludCgwLCAyKTtcclxuICAgIC8vIGNvbnN0IHJhbmRvbTogYm9vbGVhbiA9IG51bSA9PT0gMSA/IHRydWUgOiBmYWxzZTtcclxuICAgIC8vIGlmKHJhbmRvbSkgdGhpcy5faXNIYXNSb2NrZXQgPSB0cnVlO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIHB1YmxpYyBfY2FuU3Bhd25Sb2NrZXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvLyBfcm9ja2V0OiBSb2NrZXQgPSBudWxsO1xyXG4gIC8vIHByaXZhdGUgc3Bhd25Sb2NrZXQocG9zOiBjYy5WZWMyLCBwYXJlbnQ6IGNjLk5vZGUpOiB2b2lkIHtcclxuICAvLyAgIGlmICghdGhpcy5fY2FuU3Bhd25Sb2NrZXQgfHwgQ29uZmlnRGF0YS5IZWxwZXIubWF4Um9ja2V0Q2FuU3Bhd24gPD0gMCkgcmV0dXJuO1xyXG4gIC8vICAgLy8gdGhpcy5faXNTcGF3blJvY2tldCA9IHRydWU7XHJcbiAgLy8gICBDb25maWdEYXRhLkhlbHBlci5tYXhSb2NrZXRDYW5TcGF3biAtPSAxO1xyXG4gIC8vICAgY29uc3QgX3IgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJvY2tldEhlbHBlcik7XHJcbiAgLy8gICBfci5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgLy8gICBfci5zZXRQb3NpdGlvbigwLCAxMzApO1xyXG4gIC8vICAgX3Iuc2V0U2NhbGUoMC4yMyk7XHJcbiAgLy8gICB0aGlzLl9yb2NrZXQgPSBfci5nZXRDb21wb25lbnQoUm9ja2V0KTtcclxuICAvLyAgIHBhcmVudC5nZXRDb21wb25lbnQoSXRlbSkuX2lzSGFzUm9ja2V0ID0gdHJ1ZTtcclxuICAvLyAgIC8vIGNvbnN0IF9yV1BvcyA9IHBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoX3IuZ2V0UG9zaXRpb24oKSk7XHJcbiAgLy8gICAvLyBDb25maWdEYXRhLklkZWEuZmFrZVJvY2tldFBvc2VzLnB1c2gocGFyZW50LmdldFBvc2l0aW9uKCkpO1xyXG4gIC8vICAgLy8gQ29uZmlnRGF0YS5JZGVhLmZha2VSb2NrZXRQb3Nlcy5wdXNoKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAvLyAgIENvbmZpZ0RhdGEuSWRlYS5zaGVsZi5wdXNoKHRoaXMpO1xyXG4gIC8vIH1cclxuXHJcblxyXG5cclxuICBpbml0aWFsaXplKCkgeyB9XHJcblxyXG5cclxuICBfaXRlbUNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgYWRkSXRlbShcclxuICAgIGl0ZW1JZDogbnVtYmVyLFxyXG4gICAgcG9zaXRpb25JbmRleDogbnVtYmVyLFxyXG4gICAgbGF5ZXI6IG51bWJlcixcclxuICAgIHBhcmVudDogY2MuTm9kZSxcclxuICAgIGJvYXJkOiBCb2FyZCxcclxuICAgIGNvbmZpZzogQ29uZmlnXHJcbiAgKTogSXRlbSB7XHJcbiAgICBjb25zdCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtUHJlZmFiKS5nZXRDb21wb25lbnQoSXRlbSk7XHJcbiAgICBpdGVtLl9Cb2FyZCA9IGJvYXJkO1xyXG4gICAgaXRlbS5fQ29uZmlnID0gY29uZmlnO1xyXG4gICAgaXRlbS5zZXRJZChpdGVtSWQpO1xyXG4gICAgaWYgKHRoaXMubGF5ZXJzW2xheWVyXSA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMubGF5ZXJzW2xheWVyXSA9IFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sYXllcnNbbGF5ZXJdLnB1c2goaXRlbSk7XHJcblxyXG4gICAgdGhpcy5ub2RlLmFkZENoaWxkKGl0ZW0ubm9kZSwgLTEgKiBsYXllcik7XHJcblxyXG4gICAgY29uc3QgdGVtcFBvcyA9IGl0ZW0ubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKFxyXG4gICAgICB0aGlzLnNsb3RzW3Bvc2l0aW9uSW5kZXhdLm5vZGVcclxuICAgICAgICAuZ2V0UG9zaXRpb24oKVxyXG4gICAgICAgIC5hZGQobmV3IGNjLlZlYzIoMCwgMCkpXHJcbiAgICApO1xyXG4gICAgY29uc3QgdGVtcEJlaGluZFBvcyA9IGl0ZW0ubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKFxyXG4gICAgICB0aGlzLnNsb3RzW3Bvc2l0aW9uSW5kZXhdLm5vZGVcclxuICAgICAgICAuZ2V0UG9zaXRpb24oKVxyXG4gICAgICAgIC5hZGQobmV3IGNjLlZlYzIoMCwgbGF5ZXIgKiBsYXlvdXRDb25maWcuYmFja0l0ZW1PZmZzZXRZKSlcclxuICAgICk7XHJcbiAgICBjb25zdCBpdGVtUG9zID0gcGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRlbXBQb3MpO1xyXG4gICAgaXRlbS5ub2RlLnNldFBhcmVudChwYXJlbnQpO1xyXG4gICAgaXRlbS5ub2RlLnNldFBvc2l0aW9uKGl0ZW1Qb3MpO1xyXG5cclxuICAgIGNvbnN0IGJlaGluZFBvcyA9IHBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0ZW1wQmVoaW5kUG9zKTtcclxuXHJcbiAgICB0aGlzLl9pdGVtQ29udGFpbmVyID0gcGFyZW50O1xyXG5cclxuICAgIGlmIChsYXllciA9PSAwKSB7XHJcbiAgICAgIHRoaXMuc2xvdHNbcG9zaXRpb25JbmRleF0uc2V0SXRlbShpdGVtKTtcclxuICAgICAgaXRlbS5zZXRTbG90KHRoaXMuc2xvdHNbcG9zaXRpb25JbmRleF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGl0ZW0uaGFuZGxlTW92ZVRvQmVoaW5kKGJlaGluZFBvcywgbGF5ZXIpO1xyXG4gICAgaXRlbS5zZXRJbmRleChwb3NpdGlvbkluZGV4KTtcclxuICAgIC8vIGl0ZW0ubm9kZS5zZXRTY2FsZSgwLjEsIDAuMSk7XHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9XHJcbiAgc2V0U2hlbGZUeXBlKHNoZWxmVHlwZTogU2hlbGZUeXBlKSB7XHJcbiAgICBzd2l0Y2ggKHNoZWxmVHlwZSkge1xyXG4gICAgICBjYXNlIFNoZWxmVHlwZS5NaWRkbGU6XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnNoZWxmU3ByaXRlc1swXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTaGVsZlR5cGUuTGVmdDpcclxuICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc2hlbGZTcHJpdGVzWzFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNoZWxmVHlwZS5SaWdodDpcclxuICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc2hlbGZTcHJpdGVzWzJdO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRlc3RNYXRjaChsYXN0SXRlbUlkOiBudW1iZXIsIGxheWVyOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmxheWVyc1tsYXllcl0gPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5sYXllcnNbbGF5ZXJdLmxlbmd0aCA8IDIpIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5sYXllcnNbbGF5ZXJdWzBdLmlkID09IHRoaXMubGF5ZXJzW2xheWVyXVsxXS5pZCAmJlxyXG4gICAgICB0aGlzLmxheWVyc1tsYXllcl1bMF0uaWQgPT0gbGFzdEl0ZW1JZFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBjaGVja01hdGNoKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNsb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnNsb3RzW2ldLmlzRW1wdHkoKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnNsb3RzWzBdLml0ZW0uaWQgPT09IHRoaXMuc2xvdHNbMV0uaXRlbS5pZCAmJlxyXG4gICAgICB0aGlzLnNsb3RzWzBdLml0ZW0uaWQgPT09IHRoaXMuc2xvdHNbMl0uaXRlbS5pZFxyXG4gICAgKSB7XHJcblxyXG4gICAgICBjb25zdCBlZmZlY3RQb3MgPSB0aGlzLl9Cb2FyZC5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5wb3NpdGlvbilcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbG90cy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNsb3RzW2ldLml0ZW0uX2lzSGFzUm9ja2V0ICYmIENvbmZpZ0RhdGEuSWRlYS5pc1NoZWxmRXhwbG9zaW9uV2hlbkhpdFJvY2tldCAmJiB0aGlzLmNoYW5nZVBhcmVudFJvY2tldCgpXHJcbiAgICAgICAgLy8gdGhpcy5zbG90c1tpXS5pdGVtLl9pc0hhc1JvY2tldFxyXG4gICAgICAgIC8vICAgJiYgQ29uZmlnRGF0YS5JZGVhLmlzU2hlbGZFeHBsb3Npb25XaGVuSGl0Um9ja2V0XHJcbiAgICAgICAgLy8gICAmJiB0aGlzLl9Cb2FyZC5jcmVhdGVSb2NrZXRzKGVmZmVjdFBvcyk7XHJcblxyXG4gICAgICAgIHRoaXMucmVtb3ZlSXRlbSh0aGlzLnNsb3RzW2ldLml0ZW0pO1xyXG4gICAgICAgIHRoaXMuc2xvdHNbaV0uaXRlbS5tYXRjaCgpO1xyXG4gICAgICAgIHRoaXMuc2xvdHNbaV0uc2V0RW1wdHkoKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2xvdHNbMF0uaXRlbSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2xvdHNbMV0uaXRlbSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2xvdHNbMl0uaXRlbSk7XHJcblxyXG4gICAgICAvLyB0aGlzLklzTWF0Y2hXaXRoUm9ja2V0KCkgJiYgQ29uZmlnRGF0YS5JZGVhLmlzU2hlbGZFeHBsb3Npb25XaGVuSGl0Um9ja2V0ICYmIHRoaXMuX3JvY2tldC5hY3RpdmVSb2NrZXQoKTtcclxuXHJcblxyXG4gICAgICB0aGlzLmNyZWF0ZU1hdGNoRngoZWZmZWN0UG9zKTtcclxuICAgICAgdGhpcy5jaGVja0JhY2tMYXllcigpO1xyXG4gICAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5maWxsUmFuZ2VQcm9ncmVzcygpO1xyXG4gICAgICBTb3VuZENvbnRyb2xsZXIuSW5zdGFuY2UoU291bmRDb250cm9sbGVyKS5wbGF5UHJlZmFiU291bmQoUHJlZmFiU291bmRUcmFjay50cmlwbGVNYXRjaFNvcnRTb3VuZCk7XHJcbiAgICAgIC8vIHRoaXMuX0JvYXJkLnVwZGF0ZUNvbWJvKCk7XHJcbiAgICAgIHRoaXMuX0JvYXJkLnVwZGF0ZU1hdGNoQ291bnQoKTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgY2hhbmdlUGFyZW50Um9ja2V0KCk6IHZvaWQge1xyXG4gICAgLy8gY29uc3QgX3dwID0gdGhpcy5fcm9ja2V0Lm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuX3JvY2tldC5ub2RlLmdldFBvc2l0aW9uKCkpXHJcbiAgICAvLyB0aGlzLl9yb2NrZXQubm9kZS5wYXJlbnQgPSB0aGlzLl9pdGVtQ29udGFpbmVyO1xyXG4gICAgLy8gdGhpcy5fcm9ja2V0Lm5vZGUuc2V0UG9zaXRpb24odGhpcy5faXRlbUNvbnRhaW5lci5jb252ZXJ0VG9Ob2RlU3BhY2VBUihfd3ApKVxyXG4gICAgLy8gdGhpcy5fcm9ja2V0LmFjdGl2ZVJvY2tldCgpO1xyXG4gICAgLy8gQm9hcmQuSW5zdGFuY2Uuc2V0Um9ja2V0SGlnaGVzdFppbmRleCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTWF0Y2hGeChlZmZlY3RQb3MpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVmZmVjdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubWF0Y2hQcmVmYWIpO1xyXG4gICAgZWZmZWN0LnNldFBhcmVudCh0aGlzLl9Cb2FyZC5ub2RlKTtcclxuICAgIGVmZmVjdC5zZXRQb3NpdGlvbihlZmZlY3RQb3MpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNoZWNrQmFja0xheWVyKCkge1xyXG4gICAgbGV0IGFsbEVtcHR5ID0gdHJ1ZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoIXRoaXMuc2xvdHNbaV0uaXNFbXB0eSgpKSB7XHJcbiAgICAgICAgYWxsRW1wdHkgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGFsbEVtcHR5KSB7XHJcbiAgICAgIGxldCBsYXkgPSAwO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGF5ZXJzW2ldLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGlmIChsYXkgPT0gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubGF5ZXJzW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMubGF5ZXJzW2ldW2pdO1xyXG4gICAgICAgICAgICAgIGlmIChpdGVtID09PSBudWxsIHx8IGl0ZW0gPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgaXRlbS5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgaXRlbS5zZXRTbG90KHRoaXMuc2xvdHNbaXRlbS5pbmRleF0pO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2xvdHNbaXRlbS5pbmRleF0uc2V0SXRlbSh0aGlzLmxheWVyc1tpXVtqXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5sYXllcnNbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gajtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMubGF5ZXJzW2ldW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLmFjdGl2ZSA9IGxheSA8IDI7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKFxyXG4gICAgICAgICAgICAgIHRoaXMuc2xvdHNbaXRlbS5pbmRleF0ubm9kZVxyXG4gICAgICAgICAgICAgICAgLmdldFBvc2l0aW9uKClcclxuICAgICAgICAgICAgICAgIC5hZGQobmV3IGNjLlZlYzIoMCwgbGF5ICogbGF5b3V0Q29uZmlnLmJhY2tJdGVtT2Zmc2V0WSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBpdGVtLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRlbXBQb3MpO1xyXG4gICAgICAgICAgICBpdGVtLm1vdmVUbyh0YXJnZXQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGF5Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmVwbGFjZUl0ZW0ob2xkSXRlbTogSXRlbSwgbmV3SXRlbSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxheWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5sYXllcnNbaV0gPT09IG51bGwgfHwgdGhpcy5sYXllcnNbaV0gPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5sYXllcnNbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnNbaV1bal0gPT09IG9sZEl0ZW0pIHtcclxuICAgICAgICAgIHRoaXMubGF5ZXJzW2ldW2pdID0gbmV3SXRlbTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICByZW1vdmVJdGVtKGl0ZW06IEl0ZW0pIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMubGF5ZXJzW2ldID09PSBudWxsIHx8IHRoaXMubGF5ZXJzW2ldID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubGF5ZXJzW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGF5ZXJzW2ldW2pdID09PSBpdGVtKSB7XHJcbiAgICAgICAgICB0aGlzLmxheWVyc1tpXS5zcGxpY2UoaiwgMSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5leHBvcnQgZW51bSBTaGVsZlR5cGUge1xyXG4gIE1pZGRsZSxcclxuICBMZWZ0LFxyXG4gIFJpZ2h0LFxyXG59XHJcbiJdfQ==