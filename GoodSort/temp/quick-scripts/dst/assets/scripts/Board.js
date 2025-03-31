
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