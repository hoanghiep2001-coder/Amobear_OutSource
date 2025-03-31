"use strict";
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