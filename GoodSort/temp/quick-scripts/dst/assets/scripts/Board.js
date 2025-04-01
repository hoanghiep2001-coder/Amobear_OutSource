
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
        _this._items = [];
        _this.cart = null;
        _this.cart_2 = null;
        _this._isCallCompleteGen = false;
        _this._boardTruePos = new cc.Vec2(10, -400);
        _this.isClickedStartCart = false;
        _this.cartBounds = {
            xMin: 0,
            xMax: 0,
            yMin: 0,
            yMax: 0,
        };
        _this._isPuttedToCart = false;
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
        this.shelfContainer.scale = 0.6;
        this.itemContainer.scale = 0.6;
        var size = this.shelfPrefab.data.getContentSize();
        var row = GameConfig_1.levelConfig.row, col = GameConfig_1.levelConfig.col;
        console.log(this.node.children);
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
                // let items: Item[] = [];
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
                            _this._items.push(item);
                        }
                    }
                });
                for (var k = 0; k < randomEmptySlots[lay] / 3; k++) {
                    var rIndex = Math.floor(Math.random() * _this._items.length);
                    ids[_this._items[rIndex].id] += 3;
                    if (lay == 0) {
                        _this._items[rIndex].currentSlot.setEmpty();
                    }
                    else {
                        for (var m = 0; m < _this.shelves.length; m++) {
                            _this.shelves[m].removeItem(_this._items[rIndex]);
                        }
                    }
                    var remain = 2;
                    for (var m = 0; m < _this._items.length; m++) {
                        if (_this._items[m].id == _this._items[rIndex].id && _this._items[rIndex] !== _this._items[m]) {
                            var it = _this._items[m];
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
                    _this._items[rIndex].node.destroy();
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
    Board.prototype.handleCompleteGenerate = function () {
        var _this = this;
        if (this._isCallCompleteGen)
            return;
        if (GameConfig_1.ConfigData.OutSource.isHasCart && !this.isClickedStartCart) {
            this.cart.active = true;
            this.putItemsToCart();
            this._isCallCompleteGen = true;
            return;
        }
        this.boardState = BoardState.Playing;
        this._isCallCompleteGen = true;
        this.shelfContainer.children.reverse().forEach(function (child, index) {
            child.setSiblingIndex(index);
        });
        cc.tween(this.node).to(0.25, { x: this._boardTruePos.x, y: this._boardTruePos.y }, { easing: cc.easing.sineIn }).start();
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
    Board.prototype.putItemsToCart = function () {
        var _this = this;
        if (this._isPuttedToCart)
            return;
        this._isPuttedToCart = true;
        this._items.forEach(function (item, index) {
            if (!item || !item.node) {
                console.warn("item null");
                return; // Bỏ qua item lỗi để tránh crash
            }
            // Tạo vị trí ngẫu nhiên trong cart
            // let randomX = Math.random() * (this.cartBounds.xMax - this.cartBounds.xMin) + this.cartBounds.xMin;
            // let randomY = Math.random() * (this.cartBounds.yMax - this.cartBounds.yMin) + this.cartBounds.yMin;
            var randomRotation = Math.random() * 360;
            // Gán parent và thiết lập thuộc tính
            item.node.parent = _this.cart_2;
            item.node.setPosition(item.node.getPosition());
            item.node.setRotation(randomRotation);
            item.node.active = true;
            console.log(item.node);
        });
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
    __decorate([
        property(cc.Node)
    ], Board.prototype, "cart", void 0);
    __decorate([
        property(cc.Node)
    ], Board.prototype, "cart_2", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUEwQztBQUMxQyxpQ0FBNEI7QUFDNUIsdURBQXNEO0FBQ3RELGdFQUFpRjtBQUNqRixvRkFBb0Y7QUFDcEYsK0JBQTBCO0FBQzFCLDBDQUFxQztBQUNyQyxrREFBc0Y7QUFFdEYsMENBQW9EO0FBQ3BELHNDQUFzQztBQUVoQyxJQUFBLEtBQTJDLEVBQUUsQ0FBQyxVQUFVLEVBQXRELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGlCQUFpQix1QkFBa0IsQ0FBQztBQUcvRCxJQUFrQixVQUlqQjtBQUpELFdBQWtCLFVBQVU7SUFDMUIsdURBQVUsQ0FBQTtJQUNWLGlEQUFPLENBQUE7SUFDUCwyQ0FBSSxDQUFBO0FBQ04sQ0FBQyxFQUppQixVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUkzQjtBQUtEO0lBQW1DLHlCQUFZO0lBRC9DLHFCQUFxQjtJQUNyQjtRQUFBLHFFQThjQztRQTdiQyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBbUJ6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLFlBQU0sR0FBVyxJQUFJLENBQUM7UUFHdEIsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsYUFBTyxHQUFZLEVBQUUsQ0FBQztRQUVyQixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBSWxDLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBZ005QixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBMEhwQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsd0JBQWtCLEdBQVksS0FBSyxDQUFDO1FBQ3BDLG1CQUFh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QUUsQ0FBQyxJQUFJLENBQUM7MENBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxnQkFBTSxDQUFDO3lDQUNLO0lBR3RCO1FBREMsUUFBUSxDQUFDLHlCQUFXLENBQUM7OENBQ1U7SUFXaEM7UUFEQyxRQUFRLENBQUMsdUJBQVUsQ0FBQzs2Q0FDUztJQTBUOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNLO0lBcFhKLEtBQUs7UUFGekIsT0FBTztRQUNSLHFCQUFxQjtPQUNBLEtBQUssQ0E4Y3pCO0lBQUQsWUFBQztDQTljRCxBQThjQyxDQTlja0MsRUFBRSxDQUFDLFNBQVMsR0E4YzlDO2tCQTljb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBBZHNNYW5hZ2VyIH0gZnJvbSBcIi4vQWRzTWFuYWdlclwiO1xyXG5pbXBvcnQgQ29tYm8gZnJvbSBcIi4vQ29tYm9cIjtcclxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXIgfSBmcm9tIFwiLi9Db21wb25lbnQvUHJvZ3Jlc3NCYXJcIjtcclxuaW1wb3J0IHsgTG9vcGVkU291bmRUcmFjaywgU291bmRDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlci9Tb3VuZENvbnRyb2xsZXJcIjtcclxuLy8gaW1wb3J0IHsgUHJlZmFiU291bmRUcmFjaywgU291bmRDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlci9Tb3VuZENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEhhbmQgZnJvbSBcIi4vSGFuZFwiO1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuL2NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0IHsgbGV2ZWxDb25maWcsIGxheW91dENvbmZpZywgYWRDb25maWcsIENvbmZpZ0RhdGEgfSBmcm9tIFwiLi9jb25maWcvR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9nYW1lcGxheS9JdGVtXCI7XHJcbmltcG9ydCBTaGVsZiwgeyBTaGVsZlR5cGUgfSBmcm9tIFwiLi9nYW1lcGxheS9TaGVsZlwiO1xyXG4vLyBpbXBvcnQgU2xvdCBmcm9tIFwiLi9nYW1lcGxheS9TbG90XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBCb2FyZFN0YXRlIHtcclxuICBHZW5lcmF0aW5nLFxyXG4gIFBsYXlpbmcsXHJcbiAgTG9jayxcclxufVxyXG5cclxuXHJcbkBjY2NsYXNzXHJcbi8vIEBleGVjdXRlSW5FZGl0TW9kZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIF9pbnN0YW5jZTogQm9hcmQgfCBudWxsID0gbnVsbDtcclxuICBzdGF0aWMgZ2V0IEluc3RhbmNlKCk6IEJvYXJkIHtcclxuICAgIGlmICh0aGlzLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gY2MuZGlyZWN0b3JcclxuICAgICAgICAuZ2V0U2NlbmUoKVxyXG4gICAgICAgID8uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihCb2FyZCkgYXMgQm9hcmQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgfVxyXG4gIEBwcm9wZXJ0eShIYW5kKVxyXG4gIGhhbmQ6IEhhbmQ7XHJcbiAgQHByb3BlcnR5KENvbWJvKVxyXG4gIGNvbWJvOiBDb21ibztcclxuXHJcblxyXG4gIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgc2hlbGZQcmVmYWI6IGNjLlByZWZhYjtcclxuXHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBzdGFydFBvczogY2MuTm9kZTtcclxuXHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBzaGVsZkNvbnRhaW5lcjogY2MuTm9kZTtcclxuICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gIGl0ZW1Db250YWluZXI6IGNjLk5vZGU7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgYnV0dG9uT3Blbkxpbms6IGNjLkJ1dHRvbjtcclxuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gIGJ1dHRvbk9wZW5TbWFsbDogY2MuQnV0dG9uO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBlbmRDYXJkOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICBleHBsb3Npb25GeDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KENvbmZpZylcclxuICBDb25maWc6IENvbmZpZyA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShQcm9ncmVzc0JhcilcclxuICBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgbW92ZUNvdW50OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBtYXRjaENvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICBwdWJsaWMgc2hlbHZlczogU2hlbGZbXSA9IFtdO1xyXG4gIHByaXZhdGUgYm9hcmRTdGF0ZTogQm9hcmRTdGF0ZTtcclxuICBwcml2YXRlIGZpcnN0TWF0Y2hJZDogbnVtYmVyID0gLTE7XHJcblxyXG5cclxuICBAcHJvcGVydHkoQWRzTWFuYWdlcilcclxuICBBZHNNYW5hZ2VyOiBBZHNNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICAvLyB0aGlzLmluaXRpYWxpemVTaGVsdmVzKClcclxuICAgIHRoaXMuc2hlbHZlcyA9IFtdO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUxldmVsKCk7XHJcblxyXG4gICAgdGhpcy5idXR0b25PcGVuTGluay5ub2RlLm9uKFxyXG4gICAgICBcImNsaWNrXCIsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICAvLyBTb3VuZENvbnRyb2xsZXIuSW5zdGFuY2UoU291bmRDb250cm9sbGVyKS5zdG9wQWxsU291bmQoKTtcclxuICAgICAgICB0aGlzLkFkc01hbmFnZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG4gICAgdGhpcy5idXR0b25PcGVuU21hbGwubm9kZS5vbihcclxuICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgLy8gU291bmRDb250cm9sbGVyLkluc3RhbmNlKFNvdW5kQ29udHJvbGxlcikuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgICAgdGhpcy5BZHNNYW5hZ2VyLmluc3RhbGxIYW5kbGUoKTtcclxuICAgICAgfSxcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuICBpc0xvY2soKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ib2FyZFN0YXRlID09IEJvYXJkU3RhdGUuTG9jaztcclxuICB9XHJcblxyXG4gIGlzR2VuZXJhdGluZygpIHtcclxuICAgIHJldHVybiB0aGlzLmJvYXJkU3RhdGUgPT0gQm9hcmRTdGF0ZS5HZW5lcmF0aW5nO1xyXG4gIH1cclxuXHJcbiAgc2V0Qm9hcmRTdGF0ZShzdGF0ZTogQm9hcmRTdGF0ZSkge1xyXG4gICAgdGhpcy5ib2FyZFN0YXRlID0gc3RhdGU7XHJcbiAgfVxyXG5cclxuXHJcbiAgdXBkYXRlQ29tYm8oKSB7XHJcbiAgICAvLyB0aGlzLmNvbWJvLnVwZGF0ZUNvbWJvKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgdXBkYXRlTWF0Y2hDb3VudCgpIHtcclxuICAgIHRoaXMubWF0Y2hDb3VudCsrO1xyXG4gICAgLy9oZXJlXHJcbiAgICAvLyBTb3VuZENvbnRyb2xsZXIuSW5zdGFuY2UoU291bmRDb250cm9sbGVyKS5wbGF5UHJlZmFiU291bmQoUHJlZmFiU291bmRUcmFjay5jbGVhclNvdW5kKTtcclxuXHJcbiAgICBpZiAodGhpcy5tYXRjaENvdW50ID4gYWRDb25maWcubWF0Y2hUaW1lQmVmb3JlU2hvd0VuZENhcmQgLSAxKSB7XHJcbiAgICAgIHRoaXMuZW5kQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICBDb25maWdEYXRhLkdhbWUuaXNXaW4gPSB0cnVlO1xyXG4gICAgICAvLyB0aGlzLmJ1dHRvbk9wZW5MaW5rLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgY3JlYXRlRXhwbG9zaW9uRngoZWZmZWN0UG9zOiBjYy5WZWMyKTogdm9pZCB7XHJcbiAgICBjb25zdCBfZnggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmV4cGxvc2lvbkZ4KTtcclxuICAgIF9meC5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICBfZnguc2V0UG9zaXRpb24oZWZmZWN0UG9zKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgX2Z4LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSwgMS42OClcclxuICB9XHJcblxyXG5cclxuICBnZW5lcmF0ZUxldmVsKCkge1xyXG4gICAgdGhpcy5ib2FyZFN0YXRlID0gQm9hcmRTdGF0ZS5HZW5lcmF0aW5nO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUxheWVyU2hlbHZlcygpO1xyXG4gIH1cclxuXHJcblxyXG4gIGhpZGVIYW5kKCkge1xyXG4gICAgaWYgKHRoaXMuaGFuZC5ub2RlLmFjdGl2ZSkge1xyXG4gICAgICB0aGlzLmhhbmQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBmaW5kSGFuZFN0YXJ0UG9pbnQoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hlbHZlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaSAlIDMgIT0gMSkgY29udGludWU7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zaGVsdmVzW2ldLnNsb3RzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNoZWx2ZXNbaV0uc2xvdHNbal0uaXNFbXB0eSgpKSB7XHJcbiAgICAgICAgICB0aGlzLmhhbmQuc2V0U3RhcnRJdGVtKHRoaXMuc2hlbHZlc1tpXS5zbG90c1tqXS5pdGVtKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBmaW5kSGFuZEVuZFBvaW50KCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoZWx2ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNoZWx2ZXNbaV0uc2xvdHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAodGhpcy5zaGVsdmVzW2ldLnNsb3RzW2pdLmlzRW1wdHkoKSkge1xyXG4gICAgICAgICAgdGhpcy5oYW5kLnNldEVuZFNsb3QodGhpcy5zaGVsdmVzW2ldLnNsb3RzW2pdKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBnZW5lcmF0ZUxheWVyU2hlbHZlcygpIHtcclxuICAgIHRoaXMuc2hlbGZDb250YWluZXIuc2NhbGUgPSAwLjY7XHJcbiAgICB0aGlzLml0ZW1Db250YWluZXIuc2NhbGUgPSAwLjY7XHJcbiAgICBjb25zdCBzaXplOiBjYy5TaXplID0gdGhpcy5zaGVsZlByZWZhYi5kYXRhLmdldENvbnRlbnRTaXplKCk7XHJcbiAgICBjb25zdCB7IHJvdywgY29sIH0gPSBsZXZlbENvbmZpZztcclxuICAgIGNvbnNvbGUubG9nKHRoaXMubm9kZS5jaGlsZHJlbik7XHJcblxyXG4gICAgbGV0IHBvc3NpYmxlUG9zaXRpb25zOiB7IGk6IG51bWJlciwgajogbnVtYmVyIH1bXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93OyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2w7IGorKykge1xyXG4gICAgICAgIHBvc3NpYmxlUG9zaXRpb25zLnB1c2goeyBpLCBqIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgayA9IHBvc3NpYmxlUG9zaXRpb25zLmxlbmd0aCAtIDE7IGsgPiAwOyBrLS0pIHtcclxuICAgICAgbGV0IHJhbmRJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoayArIDEpKTtcclxuICAgICAgW3Bvc3NpYmxlUG9zaXRpb25zW2tdLCBwb3NzaWJsZVBvc2l0aW9uc1tyYW5kSWR4XV0gPSBbcG9zc2libGVQb3NpdGlvbnNbcmFuZElkeF0sIHBvc3NpYmxlUG9zaXRpb25zW2tdXTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdzsgaSsrKSB7XHJcbiAgICAgIGxldCBpbmRleDEgPSBpO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbDsgaisrKSB7XHJcbiAgICAgICAgbGV0IGluZGV4MiA9IGo7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbmV3U2hlbGY6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoZWxmUHJlZmFiKTtcclxuICAgICAgICAgIHRoaXMuc2hlbGZDb250YWluZXIuYWRkQ2hpbGQobmV3U2hlbGYpO1xyXG4gICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5zdGFydFBvc1xyXG4gICAgICAgICAgICAuZ2V0UG9zaXRpb24oKVxyXG4gICAgICAgICAgICAuYWRkKFxyXG4gICAgICAgICAgICAgIG5ldyBjYy5WZWMyKFxyXG4gICAgICAgICAgICAgICAgKHNpemUud2lkdGggKyBsYXlvdXRDb25maWcub2Zmc2V0WCkgKiBqLFxyXG4gICAgICAgICAgICAgICAgLShzaXplLmhlaWdodCArIGxheW91dENvbmZpZy5vZmZzZXRZKSAqIGlcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICBuZXdTaGVsZi5zZXRQb3NpdGlvbihwb3MpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHNoZWxmOiBTaGVsZiA9IG5ld1NoZWxmLmdldENvbXBvbmVudChTaGVsZik7XHJcblxyXG4gICAgICAgICAgaWYgKHNoZWxmICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGogPT0gMCkge1xyXG4gICAgICAgICAgICAgIHNoZWxmLnNldFNoZWxmVHlwZShTaGVsZlR5cGUuTGVmdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaiA9PSBjb2wgLSAxKSB7XHJcbiAgICAgICAgICAgICAgc2hlbGYuc2V0U2hlbGZUeXBlKFNoZWxmVHlwZS5SaWdodCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgc2hlbGYuc2V0U2hlbGZUeXBlKFNoZWxmVHlwZS5NaWRkbGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzaGVsZi5fQm9hcmQgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLnNoZWx2ZXMucHVzaChzaGVsZik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBuZXdTaGVsZi5zZXRTY2FsZSgwKTtcclxuICAgICAgICAgIGNjLnR3ZWVuKG5ld1NoZWxmKS50bygwLjEsIHsgc2NhbGU6IDEgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleDEgPT0gcm93IC0gMSAmJiBpbmRleDIgPT0gY29sIC0gMSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVMYXllckl0ZW1zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfSwgaW5kZXgxICogMC4xICsgaW5kZXgyICogMC4wNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIENvbmZpZ0RhdGEuR2FtZS5pc0NhbkNsaWNrID0gdHJ1ZTtcclxuICAgIH0sIDEuMilcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcmFuZG9tRW1wdHkobjogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIEFycmF5KG4pLmZpbGwoNik7XHJcbiAgICBsZXQgcmVzdWx0OiBudW1iZXJbXTtcclxuICAgIGxldCBzdW06IG51bWJlcjtcclxuXHJcbiAgICBkbyB7XHJcbiAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICBzdW0gPSAwO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbVZhbHVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykgKyA1OyAvLyBSYW5kb20gbnVtYmVyIGJldHdlZW4gNSBhbmQgN1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHJhbmRvbVZhbHVlKTtcclxuICAgICAgICBzdW0gKz0gcmFuZG9tVmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0gd2hpbGUgKHN1bSAlIDMgIT09IDApO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgX2l0ZW1zOiBJdGVtW10gPSBbXTtcclxuICBnZW5lcmF0ZUxheWVySXRlbXMoKSB7XHJcbiAgICBjb25zdCByYW5kb21FbXB0eVNsb3RzOiBudW1iZXJbXSA9IHRoaXMucmFuZG9tRW1wdHkoXHJcbiAgICAgIGxldmVsQ29uZmlnLm51bWJlckxheWVyXHJcbiAgICApO1xyXG5cclxuICAgIGxldCB0b3RhbFNldDogbnVtYmVyID1cclxuICAgICAgbGV2ZWxDb25maWcucm93ICogbGV2ZWxDb25maWcuY29sICogbGV2ZWxDb25maWcubnVtYmVyTGF5ZXI7XHJcbiAgICBsZXQgbnVtUGVySXRlbSA9IE1hdGguZmxvb3IodG90YWxTZXQgLyBsZXZlbENvbmZpZy5udW1iZXJJdGVtKSAqIDM7XHJcbiAgICBsZXQgcmVtYWluU2V0ID0gKHRvdGFsU2V0ICogMyAtIG51bVBlckl0ZW0gKiBsZXZlbENvbmZpZy5udW1iZXJJdGVtKSAvIDM7XHJcbiAgICBsZXQgaWRzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgaWYgKHRvdGFsU2V0IDw9IGxldmVsQ29uZmlnLm51bWJlckl0ZW0pIHtcclxuICAgICAgaWRzID0gbmV3IEFycmF5KHRvdGFsU2V0KS5maWxsKDMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWRzID0gbmV3IEFycmF5KGxldmVsQ29uZmlnLm51bWJlckl0ZW0pO1xyXG4gICAgICBpZHMuZmlsbChudW1QZXJJdGVtKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVtYWluU2V0OyBpKyspIHtcclxuICAgICAgaWRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGlkcy5sZW5ndGgpXSArPSAzO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmaXJzdE1hdGNoU2hlbGYgPSBNYXRoLmZsb29yKHRoaXMuc2hlbHZlcy5sZW5ndGggLyAyKSArIDE7XHJcblxyXG4gICAgZm9yIChsZXQgbGF5ZXIgPSBsZXZlbENvbmZpZy5udW1iZXJMYXllciAtIDE7IGxheWVyID49IDA7IGxheWVyLS0pIHtcclxuICAgICAgbGV0IGxheSA9IGxheWVyO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIGxldCBpdGVtczogSXRlbVtdID0gW107XHJcbiAgICAgICAgdGhpcy5zaGVsdmVzLmZvckVhY2goKHNoZWxmLCBpbmRleDEpID0+IHtcclxuICAgICAgICAgIGlmIChpbmRleDEgPT0gZmlyc3RNYXRjaFNoZWxmICYmIGxheSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBySW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpZHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgdGhpcy5maXJzdE1hdGNoSWQgPSBySW5kZXg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAzOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBzaGVsZi5hZGRJdGVtKHJJbmRleCwgaW5kZXgsIGxheSwgdGhpcy5pdGVtQ29udGFpbmVyLCB0aGlzLCB0aGlzLkNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgaWYgKGluZGV4IDwgMikge1xyXG4gICAgICAgICAgICAgICAgaWRzW3JJbmRleF0tLTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmQuc2V0RW5kUG9zaXRpb24oaXRlbS5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIHNoZWxmLnNsb3RzW2luZGV4XS5zZXRFbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDM7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICBsZXQgckluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaWRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgaWRzW3JJbmRleF0gPD0gMCB8fFxyXG4gICAgICAgICAgICAgICAgKGluZGV4ID09IDIgJiYgc2hlbGYudGVzdE1hdGNoKHJJbmRleCwgbGF5KSlcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IHJJbmRleCArIDE7IGsgPCBpZHMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGlkc1trXSA+IDAgJiYgIXNoZWxmLnRlc3RNYXRjaChrLCBsYXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgckluZGV4ID0gaztcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbSA9IHJJbmRleCAtIDE7IG0gPj0gMDsgbS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkc1ttXSA+IDAgJiYgIXNoZWxmLnRlc3RNYXRjaChtLCBsYXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBySW5kZXggPSBtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlkc1tySW5kZXhdLS07XHJcbiAgICAgICAgICAgICAgbGV0IGl0ZW06IEl0ZW0gPSBzaGVsZi5hZGRJdGVtKHJJbmRleCwgaW5kZXgsIGxheSwgdGhpcy5pdGVtQ29udGFpbmVyLCB0aGlzLCB0aGlzLkNvbmZpZylcclxuICAgICAgICAgICAgICB0aGlzLl9pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcmFuZG9tRW1wdHlTbG90c1tsYXldIC8gMzsgaysrKSB7XHJcbiAgICAgICAgICBjb25zdCBySW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLl9pdGVtcy5sZW5ndGgpO1xyXG4gICAgICAgICAgaWRzW3RoaXMuX2l0ZW1zW3JJbmRleF0uaWRdICs9IDM7XHJcbiAgICAgICAgICBpZiAobGF5ID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5faXRlbXNbckluZGV4XS5jdXJyZW50U2xvdC5zZXRFbXB0eSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCB0aGlzLnNoZWx2ZXMubGVuZ3RoOyBtKyspIHtcclxuICAgICAgICAgICAgICB0aGlzLnNoZWx2ZXNbbV0ucmVtb3ZlSXRlbSh0aGlzLl9pdGVtc1tySW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IHJlbWFpbiA9IDI7XHJcbiAgICAgICAgICBmb3IgKGxldCBtID0gMDsgbSA8IHRoaXMuX2l0ZW1zLmxlbmd0aDsgbSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pdGVtc1ttXS5pZCA9PSB0aGlzLl9pdGVtc1tySW5kZXhdLmlkICYmIHRoaXMuX2l0ZW1zW3JJbmRleF0gIT09IHRoaXMuX2l0ZW1zW21dKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgaXQgPSB0aGlzLl9pdGVtc1ttXTtcclxuICAgICAgICAgICAgICBpZiAobGF5ID09IDApIHtcclxuICAgICAgICAgICAgICAgIGl0LmN1cnJlbnRTbG90LnNldEVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgdGhpcy5zaGVsdmVzLmxlbmd0aDsgcCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2hlbHZlc1twXS5yZW1vdmVJdGVtKGl0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaXQubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgcmVtYWluLS07XHJcbiAgICAgICAgICAgICAgaWYgKHJlbWFpbiA8PSAwKSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuX2l0ZW1zW3JJbmRleF0ubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsYXkgPT0gMCkge1xyXG4gICAgICAgICAgbGV0IGFkZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnNoZWx2ZXMuZm9yRWFjaChzaGVsZjIgPT4ge1xyXG4gICAgICAgICAgICBzaGVsZjIuc2xvdHMuZm9yRWFjaCgoc2xvdCwgaW5kZXgyKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHNsb3QuaXNFbXB0eSgpICYmIHNoZWxmMiAhPSB0aGlzLnNoZWx2ZXNbZmlyc3RNYXRjaFNoZWxmXSAmJiAhYWRkZWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gc2hlbGYyLmFkZEl0ZW0odGhpcy5maXJzdE1hdGNoSWQsIGluZGV4MiwgbGF5LCB0aGlzLml0ZW1Db250YWluZXIsIHRoaXMsIHRoaXMuQ29uZmlnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZC5zZXRTdGFydEl0ZW0oaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBhZGRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAwLjUgKiAobGV2ZWxDb25maWcubnVtYmVyTGF5ZXIgLSAxIC0gbGF5KSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGNhcnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGNhcnRfMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgX2lzQ2FsbENvbXBsZXRlR2VuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgX2JvYXJkVHJ1ZVBvczogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDEwLCAtNDAwKTtcclxuICBpc0NsaWNrZWRTdGFydENhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBoYW5kbGVDb21wbGV0ZUdlbmVyYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuX2lzQ2FsbENvbXBsZXRlR2VuKSByZXR1cm47XHJcblxyXG4gICAgaWYgKENvbmZpZ0RhdGEuT3V0U291cmNlLmlzSGFzQ2FydCAmJiAhdGhpcy5pc0NsaWNrZWRTdGFydENhcnQpIHtcclxuICAgICAgdGhpcy5jYXJ0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMucHV0SXRlbXNUb0NhcnQoKTtcclxuICAgICAgdGhpcy5faXNDYWxsQ29tcGxldGVHZW4gPSB0cnVlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ib2FyZFN0YXRlID0gQm9hcmRTdGF0ZS5QbGF5aW5nO1xyXG4gICAgdGhpcy5faXNDYWxsQ29tcGxldGVHZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5zaGVsZkNvbnRhaW5lci5jaGlsZHJlbi5yZXZlcnNlKCkuZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XHJcbiAgICAgIGNoaWxkLnNldFNpYmxpbmdJbmRleChpbmRleCk7XHJcbiAgICB9KTtcclxuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4yNSwgeyB4OiB0aGlzLl9ib2FyZFRydWVQb3MueCwgeTogdGhpcy5fYm9hcmRUcnVlUG9zLnkgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW4gfSkuc3RhcnQoKVxyXG4gICAgY2MudHdlZW4odGhpcy5zaGVsZkNvbnRhaW5lcikudG8oMC4yNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJxdWFkT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgIGNjLnR3ZWVuKHRoaXMuaXRlbUNvbnRhaW5lcikudG8oMC4yNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJxdWFkT3V0XCIgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmhhbmQuc3RhcnRNb3ZlKCk7XHJcbiAgICAgICAgIUNvbmZpZ0RhdGEuR2FtZS5pc1BsYXllZEJnU291bmQgJiYgU291bmRDb250cm9sbGVyLkluc3RhbmNlKFNvdW5kQ29udHJvbGxlcikucGxheURlZmF1bHRTb3VuZChMb29wZWRTb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgIENvbmZpZ0RhdGEuR2FtZS5pc1BsYXllZEJnU291bmQgPSB0cnVlO1xyXG4gICAgICAgIENvbmZpZ0RhdGEuR2FtZS5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNjLmxvZyhcImdlbiBjb21wbGV0ZWQhXCIpO1xyXG4gICAgICB9LCAwLjUpXHJcbiAgICB9KS5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgY2FydEJvdW5kcyA9IHtcclxuICAgIHhNaW46IDAsICAvLyBHaeG7m2kgaOG6oW4gdHLDoWkgY+G7p2EgY2FydFxyXG4gICAgeE1heDogMCwgICAvLyBHaeG7m2kgaOG6oW4gcGjhuqNpIGPhu6dhIGNhcnRcclxuICAgIHlNaW46IDAsICAgIC8vIMSQ4buZIGNhbyB0aOG6pXAgbmjhuqV0IChzw6BuIGPhu6dhIGNhcnQpXHJcbiAgICB5TWF4OiAwLCAgIC8vIMSQ4buZIGNhbyB04buRaSDEkWEgKMSR4buDIHRyw6FuaCBpdGVtIGJheSBxdcOhIGNhbylcclxuICB9O1xyXG4gIF9pc1B1dHRlZFRvQ2FydDogYm9vbGVhbiA9IGZhbHNlXHJcbiAgcHJpdmF0ZSBwdXRJdGVtc1RvQ2FydCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9pc1B1dHRlZFRvQ2FydCkgcmV0dXJuO1xyXG4gICAgdGhpcy5faXNQdXR0ZWRUb0NhcnQgPSB0cnVlO1xyXG4gIFxyXG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKCFpdGVtIHx8ICFpdGVtLm5vZGUpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYGl0ZW0gbnVsbGApO1xyXG4gICAgICAgIHJldHVybjsgLy8gQuG7jyBxdWEgaXRlbSBs4buXaSDEkeG7gyB0csOhbmggY3Jhc2hcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAvLyBU4bqhbyB24buLIHRyw60gbmfhuqt1IG5oacOqbiB0cm9uZyBjYXJ0XHJcbiAgICAgIC8vIGxldCByYW5kb21YID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhcnRCb3VuZHMueE1heCAtIHRoaXMuY2FydEJvdW5kcy54TWluKSArIHRoaXMuY2FydEJvdW5kcy54TWluO1xyXG4gICAgICAvLyBsZXQgcmFuZG9tWSA9IE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYXJ0Qm91bmRzLnlNYXggLSB0aGlzLmNhcnRCb3VuZHMueU1pbikgKyB0aGlzLmNhcnRCb3VuZHMueU1pbjtcclxuICAgICAgbGV0IHJhbmRvbVJvdGF0aW9uID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICBcclxuICAgICAgLy8gR8OhbiBwYXJlbnQgdsOgIHRoaeG6v3QgbOG6rXAgdGh14buZYyB0w61uaFxyXG4gICAgICBpdGVtLm5vZGUucGFyZW50ID0gdGhpcy5jYXJ0XzI7XHJcbiAgICAgIGl0ZW0ubm9kZS5zZXRQb3NpdGlvbihpdGVtLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgIGl0ZW0ubm9kZS5zZXRSb3RhdGlvbihyYW5kb21Sb3RhdGlvbik7XHJcbiAgICAgIGl0ZW0ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coaXRlbS5ub2RlKTtcclxuICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuICB9XHJcblxyXG5cclxuICBmaW5kRmlyc3RFbXB0eVNsb3QoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hlbHZlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuc2hlbHZlc1tpXS5zbG90cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGlmICh0aGlzLnNoZWx2ZXNbaV0uc2xvdHNbal0uaXNFbXB0eSgpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zaGVsdmVzW2ldLnNsb3RzW2pdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuXHJcbiAgaGlkZUl0ZW1zTGF5ZXIobGF5ZXI6IG51bWJlcikge1xyXG4gICAgdGhpcy5zaGVsdmVzLmZvckVhY2goKHNoZWxmKSA9PiB7XHJcbiAgICAgIGlmIChsYXllciA+PSBzaGVsZi5sYXllcnMubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgIGlmIChzaGVsZi5sYXllcnNbbGF5ZXJdID09PSBudWxsIHx8IHNoZWxmLmxheWVyc1tsYXllcl0gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoZWxmLmxheWVyc1tsYXllcl0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoc2hlbGYubGF5ZXJzW2xheWVyXVtpXSA9PT0gbnVsbCB8fCBzaGVsZi5sYXllcnNbbGF5ZXJdW2ldID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgIHNoZWxmLmxheWVyc1tsYXllcl1baV0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==