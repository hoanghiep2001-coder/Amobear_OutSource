"use strict";
cc._RF.push(module, '31c51BwOc1M+6aWPfxlVCEJ', 'SoundController');
// scripts/Controller/SoundController.ts

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
exports.SoundController = exports.PrefabSoundTrack = exports.LoopedSoundTrack = exports.DefaultSoundTrack = void 0;
var GameConfig_1 = require("../config/GameConfig");
var Singleton_1 = require("../utils/Singleton");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * Predefined variables
 * Name = SoundController
 * DateTime = Thu Feb 06 2025 23:04:17 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = SoundController.ts
 * FileBasenameNoExtension = SoundController
 * URL = db://assets/scripts/Controller/SoundController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
var DefaultSoundTrack;
(function (DefaultSoundTrack) {
    DefaultSoundTrack["LoseSound"] = "LoseSound";
    DefaultSoundTrack["WinSound"] = "WinSound";
})(DefaultSoundTrack = exports.DefaultSoundTrack || (exports.DefaultSoundTrack = {}));
var LoopedSoundTrack;
(function (LoopedSoundTrack) {
    LoopedSoundTrack["bgSound"] = "bgSound";
})(LoopedSoundTrack = exports.LoopedSoundTrack || (exports.LoopedSoundTrack = {}));
var PrefabSoundTrack;
(function (PrefabSoundTrack) {
    PrefabSoundTrack["tilePickedSound"] = "tilePickedSound";
    PrefabSoundTrack["onShelfSound"] = "onShelfSound";
    PrefabSoundTrack["tripleMatchSortSound"] = "tripleMatchSortSound";
    PrefabSoundTrack["clearSound"] = "clearSound";
})(PrefabSoundTrack = exports.PrefabSoundTrack || (exports.PrefabSoundTrack = {}));
var SoundController = /** @class */ (function (_super) {
    __extends(SoundController, _super);
    function SoundController() {
        var _this = _super.call(this) || this;
        _this.sounds = [];
        _this.soundCooldown = 0.5;
        _this.lastEatSoundTime = 0;
        _this.eatSoundCount = 0;
        _this.scheduledSounds = [];
        _this.bgSound = null;
        _this.LoseSound = null;
        _this.WinSound = null;
        _this.InstantiateSoundContainer = null;
        _this.tilePickedSound = null;
        _this.onShelfSound = null;
        _this.tripleMatchSortSound = null;
        _this.clearSound = null;
        SoundController_1._instance = _this;
        return _this;
    }
    SoundController_1 = SoundController;
    SoundController.prototype.onLoad = function () {
    };
    SoundController.prototype.start = function () {
    };
    SoundController.prototype.playDefaultSound = function (soundName) {
        if (GameConfig_1.ConfigData.Game.isEnableSound) {
            switch (soundName) {
                case DefaultSoundTrack.LoseSound:
                    this.LoseSound.play();
                    break;
                case DefaultSoundTrack.WinSound:
                    this.WinSound.play();
                    break;
                case LoopedSoundTrack.bgSound:
                    this.bgSound.play();
                    break;
                default:
                    break;
            }
        }
    };
    SoundController.prototype.playPrefabSound = function (soundName) {
        if (GameConfig_1.ConfigData.Game.isEnableSound) {
            this._playSound(soundName);
            // if (soundName === PrefabSoundTrack.onShelfSound) {
            //     this.playEatSound();
            // } 
            // else {
            //     this._playSound(soundName);
            // }
        }
    };
    // private playEatSound(): void {
    //     const currentTime = performance.now() / 1000;
    //     if (currentTime - this.lastEatSoundTime >= this.soundCooldown) {
    //         this.eatSoundCount = 0;
    //         this.scheduledSounds = [];
    //         this.lastEatSoundTime = currentTime;
    //         this._playSound(PrefabSoundTrack.EatSound);
    //     } else if (this.eatSoundCount < 2) {
    //         this.eatSoundCount++;
    //         this.scheduledSounds.push(PrefabSoundTrack.EatSound);
    //         this.scheduleEatSounds();
    //     }
    // }
    // private scheduleEatSounds(): void {
    //     if (this.scheduledSounds.length > 0) {
    //         let interval = this.soundCooldown / this.eatSoundCount;
    //         for (let i = 0; i < this.eatSoundCount; i++) {
    //             this.scheduleOnce(() => {
    //                 this._playSound(PrefabSoundTrack.EatSound);
    //             }, interval * i);
    //         }
    //     }
    // }
    SoundController.prototype._playSound = function (soundName) {
        var _this = this;
        var sound = null;
        switch (soundName) {
            case PrefabSoundTrack.onShelfSound:
                sound = cc.instantiate(this.onShelfSound);
                break;
            case PrefabSoundTrack.tilePickedSound:
                sound = cc.instantiate(this.tilePickedSound);
                break;
            case PrefabSoundTrack.tripleMatchSortSound:
                sound = cc.instantiate(this.tripleMatchSortSound);
                break;
            case PrefabSoundTrack.clearSound:
                sound = cc.instantiate(this.clearSound);
                break;
            default:
                break;
        }
        sound.parent = this.InstantiateSoundContainer;
        var _SoundComp = sound.getComponent(cc.AudioSource);
        var audioId = cc.audioEngine.play(_SoundComp.clip, false, _SoundComp.volume);
        cc.audioEngine.setFinishCallback(audioId, function () {
            _this.removeAudio(_SoundComp);
        });
        this.sounds.push(_SoundComp);
    };
    SoundController.prototype.removeAudio = function (_SoundComp) {
        _SoundComp.destroy();
    };
    SoundController.prototype.muteSound = function (soundName, isMuted) {
        var result = this.sounds.find(function (sound) { return sound.node.name === soundName; });
        if (isMuted)
            result.volume = 0;
        else
            result.volume = 1;
    };
    SoundController.prototype.stopSound = function (soundName) {
        switch (soundName) {
            case DefaultSoundTrack.LoseSound:
                this.LoseSound.stop();
                break;
            case DefaultSoundTrack.WinSound:
                this.WinSound.stop();
                break;
            case LoopedSoundTrack.bgSound:
                this.bgSound.stop();
                break;
            default:
                break;
        }
    };
    SoundController.prototype.stopAllSound = function () {
        this.bgSound && this.bgSound.stop();
        this.LoseSound && this.LoseSound.stop();
        this.WinSound && this.WinSound.stop();
    };
    var SoundController_1;
    __decorate([
        property(cc.AudioSource)
    ], SoundController.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], SoundController.prototype, "LoseSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], SoundController.prototype, "WinSound", void 0);
    __decorate([
        property(cc.Node)
    ], SoundController.prototype, "InstantiateSoundContainer", void 0);
    __decorate([
        property(cc.Prefab)
    ], SoundController.prototype, "tilePickedSound", void 0);
    __decorate([
        property(cc.Prefab)
    ], SoundController.prototype, "onShelfSound", void 0);
    __decorate([
        property(cc.Prefab)
    ], SoundController.prototype, "tripleMatchSortSound", void 0);
    __decorate([
        property(cc.Prefab)
    ], SoundController.prototype, "clearSound", void 0);
    SoundController = SoundController_1 = __decorate([
        ccclass('SoundController')
    ], SoundController);
    return SoundController;
}(Singleton_1.default));
exports.SoundController = SoundController;
/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */

cc._RF.pop();