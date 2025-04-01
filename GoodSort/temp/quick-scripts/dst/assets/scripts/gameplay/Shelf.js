
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
        GameConfig_1.ConfigData.OutSource.isHasCart && item.setActiveWithCart(false);
        !GameConfig_1.ConfigData.OutSource.isHasCart && item.node.setPosition(itemPos);
        var behindPos = parent.convertToNodeSpaceAR(tempBehindPos);
        this._itemContainer = parent;
        if (layer == 0) {
            this.slots[positionIndex].setItem(item);
            item.setSlot(this.slots[positionIndex]);
        }
        item.handleMoveToBehind(behindPos, layer);
        GameConfig_1.ConfigData.OutSource.isHasCart && (function () {
            item.itemPos = behindPos;
        })();
        // ConfigData.OutSource.isHasCart ? item.itemPos = behindPos : item.handleMoveToBehind(behindPos, layer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZXBsYXlcXFNoZWxmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx3REFBdUQ7QUFHdkQsbURBQWlGO0FBQ2pGLGlFQUFrRjtBQUNsRiwrQkFBMEI7QUFDMUIsK0JBQTBCO0FBRXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBNlFDO1FBclFDLGtCQUFZLEdBQXFCLEVBQUUsQ0FBQztRQUdwQyxXQUFLLEdBQVcsRUFBRSxDQUFDO1FBRVosWUFBTSxHQUFhLEVBQUUsQ0FBQztRQUU3Qiw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLHVCQUF1QjtRQUN2QixrQ0FBa0M7UUFFbEMsWUFBTSxHQUFVLElBQUksQ0FBQztRQXVDckIsb0JBQWMsR0FBWSxJQUFJLENBQUM7O0lBa05qQyxDQUFDO0lBdlBDLHNCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFHRCxpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ3pCLHFCQUFLLEdBQWY7UUFDRSxvREFBb0Q7UUFDcEQsb0RBQW9EO1FBQ3BELHVDQUF1QztJQUN6QyxDQUFDO0lBR0QsMkNBQTJDO0lBQzNDLDBCQUEwQjtJQUMxQiw2REFBNkQ7SUFDN0QsbUZBQW1GO0lBQ25GLG1DQUFtQztJQUNuQyw4Q0FBOEM7SUFDOUMsa0RBQWtEO0lBQ2xELHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLDRDQUE0QztJQUM1QyxtREFBbUQ7SUFDbkQsc0VBQXNFO0lBQ3RFLG1FQUFtRTtJQUNuRSxzRUFBc0U7SUFDdEUsc0NBQXNDO0lBQ3RDLElBQUk7SUFJ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QSxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBNlF6QjtJQUFELFlBQUM7Q0E3UUQsQUE2UUMsQ0E3UWtDLEVBQUUsQ0FBQyxTQUFTLEdBNlE5QztrQkE3UW9CLEtBQUs7QUE4UTFCLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQiw2Q0FBTSxDQUFBO0lBQ04seUNBQUksQ0FBQTtJQUNKLDJDQUFLLENBQUE7QUFDUCxDQUFDLEVBSlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFJcEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmQgZnJvbSBcIi4uL0JvYXJkXCI7XHJcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSBcIi4uL0NvbXBvbmVudC9Qcm9ncmVzc0JhclwiO1xyXG5pbXBvcnQgeyBSb2NrZXQgfSBmcm9tIFwiLi4vQ29tcG9uZW50L1JvY2tldFwiO1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9jb25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCB7IGFuaW1hdGlvbkNvbmZpZywgQ29uZmlnRGF0YSwgbGF5b3V0Q29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZy9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7IFByZWZhYlNvdW5kVHJhY2ssIFNvdW5kQ29udHJvbGxlciB9IGZyb20gXCIuLi9Db250cm9sbGVyL1NvdW5kQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XHJcbmltcG9ydCBTbG90IGZyb20gXCIuL1Nsb3RcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGVsZiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gIGl0ZW1QcmVmYWI6IGNjLlByZWZhYjtcclxuXHJcbiAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gIG1hdGNoUHJlZmFiOiBjYy5QcmVmYWI7XHJcblxyXG4gIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gIHNoZWxmU3ByaXRlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoW1Nsb3RdKVxyXG4gIHNsb3RzOiBTbG90W10gPSBbXTtcclxuICBwdWJsaWMgc3ByaXRlOiBjYy5TcHJpdGU7XHJcbiAgcHVibGljIGxheWVyczogSXRlbVtdW10gPSBbXTtcclxuXHJcbiAgLy8gaXNBY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIC8vIGl0ZW1JblNoZWxmczogSXRlbVtdID0gW107XHJcbiAgLy8gQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAvLyByb2NrZXRIZWxwZXI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gIF9Cb2FyZDogQm9hcmQgPSBudWxsO1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLnNwcml0ZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gX2lzSGFzUm9ja2V0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgLy8gX2lzU3Bhd25Sb2NrZXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAvLyBjb25zdCBudW06IG51bWJlciA9IGNjLm1hdGgucmFuZG9tUmFuZ2VJbnQoMCwgMik7XHJcbiAgICAvLyBjb25zdCByYW5kb206IGJvb2xlYW4gPSBudW0gPT09IDEgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAvLyBpZihyYW5kb20pIHRoaXMuX2lzSGFzUm9ja2V0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG5cclxuICAvLyBwdWJsaWMgX2NhblNwYXduUm9ja2V0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgLy8gX3JvY2tldDogUm9ja2V0ID0gbnVsbDtcclxuICAvLyBwcml2YXRlIHNwYXduUm9ja2V0KHBvczogY2MuVmVjMiwgcGFyZW50OiBjYy5Ob2RlKTogdm9pZCB7XHJcbiAgLy8gICBpZiAoIXRoaXMuX2NhblNwYXduUm9ja2V0IHx8IENvbmZpZ0RhdGEuSGVscGVyLm1heFJvY2tldENhblNwYXduIDw9IDApIHJldHVybjtcclxuICAvLyAgIC8vIHRoaXMuX2lzU3Bhd25Sb2NrZXQgPSB0cnVlO1xyXG4gIC8vICAgQ29uZmlnRGF0YS5IZWxwZXIubWF4Um9ja2V0Q2FuU3Bhd24gLT0gMTtcclxuICAvLyAgIGNvbnN0IF9yID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2NrZXRIZWxwZXIpO1xyXG4gIC8vICAgX3IucGFyZW50ID0gcGFyZW50O1xyXG4gIC8vICAgX3Iuc2V0UG9zaXRpb24oMCwgMTMwKTtcclxuICAvLyAgIF9yLnNldFNjYWxlKDAuMjMpO1xyXG4gIC8vICAgdGhpcy5fcm9ja2V0ID0gX3IuZ2V0Q29tcG9uZW50KFJvY2tldCk7XHJcbiAgLy8gICBwYXJlbnQuZ2V0Q29tcG9uZW50KEl0ZW0pLl9pc0hhc1JvY2tldCA9IHRydWU7XHJcbiAgLy8gICAvLyBjb25zdCBfcldQb3MgPSBwYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKF9yLmdldFBvc2l0aW9uKCkpO1xyXG4gIC8vICAgLy8gQ29uZmlnRGF0YS5JZGVhLmZha2VSb2NrZXRQb3Nlcy5wdXNoKHBhcmVudC5nZXRQb3NpdGlvbigpKTtcclxuICAvLyAgIC8vIENvbmZpZ0RhdGEuSWRlYS5mYWtlUm9ja2V0UG9zZXMucHVzaCh0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgLy8gICBDb25maWdEYXRhLklkZWEuc2hlbGYucHVzaCh0aGlzKTtcclxuICAvLyB9XHJcblxyXG5cclxuXHJcbiAgaW5pdGlhbGl6ZSgpIHsgfVxyXG5cclxuXHJcbiAgX2l0ZW1Db250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gIGFkZEl0ZW0oXHJcbiAgICBpdGVtSWQ6IG51bWJlcixcclxuICAgIHBvc2l0aW9uSW5kZXg6IG51bWJlcixcclxuICAgIGxheWVyOiBudW1iZXIsXHJcbiAgICBwYXJlbnQ6IGNjLk5vZGUsXHJcbiAgICBib2FyZDogQm9hcmQsXHJcbiAgICBjb25maWc6IENvbmZpZ1xyXG4gICk6IEl0ZW0ge1xyXG4gICAgY29uc3QgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYikuZ2V0Q29tcG9uZW50KEl0ZW0pO1xyXG4gICAgaXRlbS5fQm9hcmQgPSBib2FyZDtcclxuICAgIGl0ZW0uX0NvbmZpZyA9IGNvbmZpZztcclxuICAgIGl0ZW0uc2V0SWQoaXRlbUlkKTtcclxuICAgIGlmICh0aGlzLmxheWVyc1tsYXllcl0gPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmxheWVyc1tsYXllcl0gPSBbXTtcclxuICAgIH1cclxuICAgIHRoaXMubGF5ZXJzW2xheWVyXS5wdXNoKGl0ZW0pO1xyXG5cclxuICAgIHRoaXMubm9kZS5hZGRDaGlsZChpdGVtLm5vZGUsIC0xICogbGF5ZXIpO1xyXG5cclxuICAgIGNvbnN0IHRlbXBQb3MgPSBpdGVtLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihcclxuICAgICAgdGhpcy5zbG90c1twb3NpdGlvbkluZGV4XS5ub2RlXHJcbiAgICAgICAgLmdldFBvc2l0aW9uKClcclxuICAgICAgICAuYWRkKG5ldyBjYy5WZWMyKDAsIDApKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHRlbXBCZWhpbmRQb3MgPSBpdGVtLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihcclxuICAgICAgdGhpcy5zbG90c1twb3NpdGlvbkluZGV4XS5ub2RlXHJcbiAgICAgICAgLmdldFBvc2l0aW9uKClcclxuICAgICAgICAuYWRkKG5ldyBjYy5WZWMyKDAsIGxheWVyICogbGF5b3V0Q29uZmlnLmJhY2tJdGVtT2Zmc2V0WSkpXHJcbiAgICApO1xyXG4gICAgY29uc3QgaXRlbVBvcyA9IHBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0ZW1wUG9zKTtcclxuICAgIGl0ZW0ubm9kZS5zZXRQYXJlbnQocGFyZW50KTtcclxuICAgIENvbmZpZ0RhdGEuT3V0U291cmNlLmlzSGFzQ2FydCAmJiBpdGVtLnNldEFjdGl2ZVdpdGhDYXJ0KGZhbHNlKTtcclxuICAgICFDb25maWdEYXRhLk91dFNvdXJjZS5pc0hhc0NhcnQgJiYgaXRlbS5ub2RlLnNldFBvc2l0aW9uKGl0ZW1Qb3MpXHJcblxyXG4gICAgY29uc3QgYmVoaW5kUG9zID0gcGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRlbXBCZWhpbmRQb3MpO1xyXG5cclxuICAgIHRoaXMuX2l0ZW1Db250YWluZXIgPSBwYXJlbnQ7XHJcblxyXG4gICAgaWYgKGxheWVyID09IDApIHtcclxuICAgICAgdGhpcy5zbG90c1twb3NpdGlvbkluZGV4XS5zZXRJdGVtKGl0ZW0pO1xyXG4gICAgICBpdGVtLnNldFNsb3QodGhpcy5zbG90c1twb3NpdGlvbkluZGV4XSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXRlbS5oYW5kbGVNb3ZlVG9CZWhpbmQoYmVoaW5kUG9zLCBsYXllcik7XHJcbiAgICBDb25maWdEYXRhLk91dFNvdXJjZS5pc0hhc0NhcnQgJiYgKCgpID0+IHtcclxuICAgICAgaXRlbS5pdGVtUG9zID0gYmVoaW5kUG9zO1xyXG4gICAgfSkoKTtcclxuICAgIC8vIENvbmZpZ0RhdGEuT3V0U291cmNlLmlzSGFzQ2FydCA/IGl0ZW0uaXRlbVBvcyA9IGJlaGluZFBvcyA6IGl0ZW0uaGFuZGxlTW92ZVRvQmVoaW5kKGJlaGluZFBvcywgbGF5ZXIpO1xyXG4gICAgaXRlbS5zZXRJbmRleChwb3NpdGlvbkluZGV4KTtcclxuICAgIC8vIGl0ZW0ubm9kZS5zZXRTY2FsZSgwLjEsIDAuMSk7XHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9XHJcbiAgc2V0U2hlbGZUeXBlKHNoZWxmVHlwZTogU2hlbGZUeXBlKSB7XHJcbiAgICBzd2l0Y2ggKHNoZWxmVHlwZSkge1xyXG4gICAgICBjYXNlIFNoZWxmVHlwZS5NaWRkbGU6XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnNoZWxmU3ByaXRlc1swXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTaGVsZlR5cGUuTGVmdDpcclxuICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc2hlbGZTcHJpdGVzWzFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNoZWxmVHlwZS5SaWdodDpcclxuICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc2hlbGZTcHJpdGVzWzJdO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRlc3RNYXRjaChsYXN0SXRlbUlkOiBudW1iZXIsIGxheWVyOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmxheWVyc1tsYXllcl0gPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5sYXllcnNbbGF5ZXJdLmxlbmd0aCA8IDIpIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5sYXllcnNbbGF5ZXJdWzBdLmlkID09IHRoaXMubGF5ZXJzW2xheWVyXVsxXS5pZCAmJlxyXG4gICAgICB0aGlzLmxheWVyc1tsYXllcl1bMF0uaWQgPT0gbGFzdEl0ZW1JZFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBjaGVja01hdGNoKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNsb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnNsb3RzW2ldLmlzRW1wdHkoKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnNsb3RzWzBdLml0ZW0uaWQgPT09IHRoaXMuc2xvdHNbMV0uaXRlbS5pZCAmJlxyXG4gICAgICB0aGlzLnNsb3RzWzBdLml0ZW0uaWQgPT09IHRoaXMuc2xvdHNbMl0uaXRlbS5pZFxyXG4gICAgKSB7XHJcblxyXG4gICAgICBjb25zdCBlZmZlY3RQb3MgPSB0aGlzLl9Cb2FyZC5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKFxyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5wb3NpdGlvbilcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbG90cy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNsb3RzW2ldLml0ZW0uX2lzSGFzUm9ja2V0ICYmIENvbmZpZ0RhdGEuSWRlYS5pc1NoZWxmRXhwbG9zaW9uV2hlbkhpdFJvY2tldCAmJiB0aGlzLmNoYW5nZVBhcmVudFJvY2tldCgpXHJcbiAgICAgICAgLy8gdGhpcy5zbG90c1tpXS5pdGVtLl9pc0hhc1JvY2tldFxyXG4gICAgICAgIC8vICAgJiYgQ29uZmlnRGF0YS5JZGVhLmlzU2hlbGZFeHBsb3Npb25XaGVuSGl0Um9ja2V0XHJcbiAgICAgICAgLy8gICAmJiB0aGlzLl9Cb2FyZC5jcmVhdGVSb2NrZXRzKGVmZmVjdFBvcyk7XHJcblxyXG4gICAgICAgIHRoaXMucmVtb3ZlSXRlbSh0aGlzLnNsb3RzW2ldLml0ZW0pO1xyXG4gICAgICAgIHRoaXMuc2xvdHNbaV0uaXRlbS5tYXRjaCgpO1xyXG4gICAgICAgIHRoaXMuc2xvdHNbaV0uc2V0RW1wdHkoKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2xvdHNbMF0uaXRlbSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2xvdHNbMV0uaXRlbSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2xvdHNbMl0uaXRlbSk7XHJcblxyXG4gICAgICAvLyB0aGlzLklzTWF0Y2hXaXRoUm9ja2V0KCkgJiYgQ29uZmlnRGF0YS5JZGVhLmlzU2hlbGZFeHBsb3Npb25XaGVuSGl0Um9ja2V0ICYmIHRoaXMuX3JvY2tldC5hY3RpdmVSb2NrZXQoKTtcclxuXHJcblxyXG4gICAgICB0aGlzLmNyZWF0ZU1hdGNoRngoZWZmZWN0UG9zKTtcclxuICAgICAgdGhpcy5jaGVja0JhY2tMYXllcigpO1xyXG4gICAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5maWxsUmFuZ2VQcm9ncmVzcygpO1xyXG4gICAgICBTb3VuZENvbnRyb2xsZXIuSW5zdGFuY2UoU291bmRDb250cm9sbGVyKS5wbGF5UHJlZmFiU291bmQoUHJlZmFiU291bmRUcmFjay50cmlwbGVNYXRjaFNvcnRTb3VuZCk7XHJcbiAgICAgIC8vIHRoaXMuX0JvYXJkLnVwZGF0ZUNvbWJvKCk7XHJcbiAgICAgIHRoaXMuX0JvYXJkLnVwZGF0ZU1hdGNoQ291bnQoKTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgY2hhbmdlUGFyZW50Um9ja2V0KCk6IHZvaWQge1xyXG4gICAgLy8gY29uc3QgX3dwID0gdGhpcy5fcm9ja2V0Lm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuX3JvY2tldC5ub2RlLmdldFBvc2l0aW9uKCkpXHJcbiAgICAvLyB0aGlzLl9yb2NrZXQubm9kZS5wYXJlbnQgPSB0aGlzLl9pdGVtQ29udGFpbmVyO1xyXG4gICAgLy8gdGhpcy5fcm9ja2V0Lm5vZGUuc2V0UG9zaXRpb24odGhpcy5faXRlbUNvbnRhaW5lci5jb252ZXJ0VG9Ob2RlU3BhY2VBUihfd3ApKVxyXG4gICAgLy8gdGhpcy5fcm9ja2V0LmFjdGl2ZVJvY2tldCgpO1xyXG4gICAgLy8gQm9hcmQuSW5zdGFuY2Uuc2V0Um9ja2V0SGlnaGVzdFppbmRleCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTWF0Y2hGeChlZmZlY3RQb3MpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVmZmVjdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubWF0Y2hQcmVmYWIpO1xyXG4gICAgZWZmZWN0LnNldFBhcmVudCh0aGlzLl9Cb2FyZC5ub2RlKTtcclxuICAgIGVmZmVjdC5zZXRQb3NpdGlvbihlZmZlY3RQb3MpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNoZWNrQmFja0xheWVyKCkge1xyXG4gICAgbGV0IGFsbEVtcHR5ID0gdHJ1ZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoIXRoaXMuc2xvdHNbaV0uaXNFbXB0eSgpKSB7XHJcbiAgICAgICAgYWxsRW1wdHkgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGFsbEVtcHR5KSB7XHJcbiAgICAgIGxldCBsYXkgPSAwO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGF5ZXJzW2ldLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGlmIChsYXkgPT0gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubGF5ZXJzW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMubGF5ZXJzW2ldW2pdO1xyXG4gICAgICAgICAgICAgIGlmIChpdGVtID09PSBudWxsIHx8IGl0ZW0gPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgaXRlbS5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgaXRlbS5zZXRTbG90KHRoaXMuc2xvdHNbaXRlbS5pbmRleF0pO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2xvdHNbaXRlbS5pbmRleF0uc2V0SXRlbSh0aGlzLmxheWVyc1tpXVtqXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5sYXllcnNbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gajtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMubGF5ZXJzW2ldW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLmFjdGl2ZSA9IGxheSA8IDI7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKFxyXG4gICAgICAgICAgICAgIHRoaXMuc2xvdHNbaXRlbS5pbmRleF0ubm9kZVxyXG4gICAgICAgICAgICAgICAgLmdldFBvc2l0aW9uKClcclxuICAgICAgICAgICAgICAgIC5hZGQobmV3IGNjLlZlYzIoMCwgbGF5ICogbGF5b3V0Q29uZmlnLmJhY2tJdGVtT2Zmc2V0WSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBpdGVtLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRlbXBQb3MpO1xyXG4gICAgICAgICAgICBpdGVtLm1vdmVUbyh0YXJnZXQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGF5Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmVwbGFjZUl0ZW0ob2xkSXRlbTogSXRlbSwgbmV3SXRlbSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxheWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5sYXllcnNbaV0gPT09IG51bGwgfHwgdGhpcy5sYXllcnNbaV0gPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5sYXllcnNbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAodGhpcy5sYXllcnNbaV1bal0gPT09IG9sZEl0ZW0pIHtcclxuICAgICAgICAgIHRoaXMubGF5ZXJzW2ldW2pdID0gbmV3SXRlbTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICByZW1vdmVJdGVtKGl0ZW06IEl0ZW0pIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMubGF5ZXJzW2ldID09PSBudWxsIHx8IHRoaXMubGF5ZXJzW2ldID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubGF5ZXJzW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGF5ZXJzW2ldW2pdID09PSBpdGVtKSB7XHJcbiAgICAgICAgICB0aGlzLmxheWVyc1tpXS5zcGxpY2UoaiwgMSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5leHBvcnQgZW51bSBTaGVsZlR5cGUge1xyXG4gIE1pZGRsZSxcclxuICBMZWZ0LFxyXG4gIFJpZ2h0LFxyXG59XHJcbiJdfQ==