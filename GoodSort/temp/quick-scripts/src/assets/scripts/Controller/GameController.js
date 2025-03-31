"use strict";
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