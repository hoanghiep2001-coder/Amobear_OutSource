
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/SoundController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcU291bmRDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtREFBa0Q7QUFDbEQsZ0RBQTJDO0FBQ3JDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDOzs7Ozs7Ozs7O0dBVUc7QUFFSCxJQUFZLGlCQUdYO0FBSEQsV0FBWSxpQkFBaUI7SUFDekIsNENBQXVCLENBQUE7SUFDdkIsMENBQXFCLENBQUE7QUFDekIsQ0FBQyxFQUhXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBRzVCO0FBRUQsSUFBWSxnQkFFWDtBQUZELFdBQVksZ0JBQWdCO0lBQ3hCLHVDQUFtQixDQUFBO0FBQ3ZCLENBQUMsRUFGVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQUUzQjtBQUVELElBQVksZ0JBS1g7QUFMRCxXQUFZLGdCQUFnQjtJQUN4Qix1REFBbUMsQ0FBQTtJQUNuQyxpREFBNkIsQ0FBQTtJQUM3QixpRUFBNkMsQ0FBQTtJQUM3Qyw2Q0FBeUIsQ0FBQTtBQUM3QixDQUFDLEVBTFcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFLM0I7QUFHRDtJQUFxQyxtQ0FBMEI7SUE0QjNEO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBOUJNLFlBQU0sR0FBcUIsRUFBRSxDQUFDO1FBQzdCLG1CQUFhLEdBQVcsR0FBRyxDQUFDO1FBQzVCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUM3QixtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUMxQixxQkFBZSxHQUFhLEVBQUUsQ0FBQztRQUl2QyxhQUFPLEdBQW1CLElBQUksQ0FBQztRQUUvQixlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxjQUFRLEdBQW1CLElBQUksQ0FB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bkI7UUFDSSxJQUFJLENBQUMsT0FBTyxJQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQyxDQUFDOztJQS9KRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO29EQUNNO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ1E7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztxREFDTztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NFQUN3QjtJQUcxQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzREQUNjO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ1c7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpRUFDbUI7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFDUztJQXpCcEIsZUFBZTtRQUQzQixPQUFPLENBQUMsaUJBQWlCLENBQUM7T0FDZCxlQUFlLENBeUszQjtJQUFELHNCQUFDO0NBektELEFBeUtDLENBektvQyxtQkFBUyxHQXlLN0M7QUF6S1ksMENBQWU7QUEySzVCOzs7Ozs7Ozs7R0FTRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb25maWdEYXRhIH0gZnJvbSAnLi4vY29uZmlnL0dhbWVDb25maWcnO1xyXG5pbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL3V0aWxzL1NpbmdsZXRvbic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vKipcclxuICogUHJlZGVmaW5lZCB2YXJpYWJsZXNcclxuICogTmFtZSA9IFNvdW5kQ29udHJvbGxlclxyXG4gKiBEYXRlVGltZSA9IFRodSBGZWIgMDYgMjAyNSAyMzowNDoxNyBHTVQrMDcwMCAoSW5kb2NoaW5hIFRpbWUpXHJcbiAqIEF1dGhvciA9IGhvYW5naGllcDIwMDFcclxuICogRmlsZUJhc2VuYW1lID0gU291bmRDb250cm9sbGVyLnRzXHJcbiAqIEZpbGVCYXNlbmFtZU5vRXh0ZW5zaW9uID0gU291bmRDb250cm9sbGVyXHJcbiAqIFVSTCA9IGRiOi8vYXNzZXRzL3NjcmlwdHMvQ29udHJvbGxlci9Tb3VuZENvbnRyb2xsZXIudHNcclxuICogTWFudWFsVXJsID0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzMuNC9tYW51YWwvZW4vXHJcbiAqXHJcbiAqL1xyXG5cclxuZXhwb3J0IGVudW0gRGVmYXVsdFNvdW5kVHJhY2sge1xyXG4gICAgTG9zZVNvdW5kID0gXCJMb3NlU291bmRcIixcclxuICAgIFdpblNvdW5kID0gXCJXaW5Tb3VuZFwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBMb29wZWRTb3VuZFRyYWNrIHtcclxuICAgIGJnU291bmQgPSBcImJnU291bmRcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUHJlZmFiU291bmRUcmFjayB7XHJcbiAgICB0aWxlUGlja2VkU291bmQgPSBcInRpbGVQaWNrZWRTb3VuZFwiLFxyXG4gICAgb25TaGVsZlNvdW5kID0gXCJvblNoZWxmU291bmRcIixcclxuICAgIHRyaXBsZU1hdGNoU29ydFNvdW5kID0gXCJ0cmlwbGVNYXRjaFNvcnRTb3VuZFwiLFxyXG4gICAgY2xlYXJTb3VuZCA9IFwiY2xlYXJTb3VuZFwiLFxyXG59XHJcblxyXG5AY2NjbGFzcygnU291bmRDb250cm9sbGVyJylcclxuZXhwb3J0IGNsYXNzIFNvdW5kQ29udHJvbGxlciBleHRlbmRzIFNpbmdsZXRvbjxTb3VuZENvbnRyb2xsZXI+IHtcclxuICAgIHB1YmxpYyBzb3VuZHM6IGNjLkF1ZGlvU291cmNlW10gPSBbXTtcclxuICAgIHByaXZhdGUgc291bmRDb29sZG93bjogbnVtYmVyID0gMC41O1xyXG4gICAgcHJpdmF0ZSBsYXN0RWF0U291bmRUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBlYXRTb3VuZENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzY2hlZHVsZWRTb3VuZHM6IHN0cmluZ1tdID0gW107XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGJnU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIExvc2VTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgV2luU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEluc3RhbnRpYXRlU291bmRDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICB0aWxlUGlja2VkU291bmQ6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgb25TaGVsZlNvdW5kOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHRyaXBsZU1hdGNoU29ydFNvdW5kOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNsZWFyU291bmQ6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgU291bmRDb250cm9sbGVyLl9pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcGxheURlZmF1bHRTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25maWdEYXRhLkdhbWUuaXNFbmFibGVTb3VuZCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBEZWZhdWx0U291bmRUcmFjay5Mb3NlU291bmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Mb3NlU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBEZWZhdWx0U291bmRUcmFjay5XaW5Tb3VuZDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLldpblNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTG9vcGVkU291bmRUcmFjay5iZ1NvdW5kOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmdTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcGxheVByZWZhYlNvdW5kKHNvdW5kTmFtZTogUHJlZmFiU291bmRUcmFjayk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25maWdEYXRhLkdhbWUuaXNFbmFibGVTb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5U291bmQoc291bmROYW1lKTtcclxuICAgICAgICAgICAgLy8gaWYgKHNvdW5kTmFtZSA9PT0gUHJlZmFiU291bmRUcmFjay5vblNoZWxmU291bmQpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMucGxheUVhdFNvdW5kKCk7XHJcbiAgICAgICAgICAgIC8vIH0gXHJcblxyXG4gICAgICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuX3BsYXlTb3VuZChzb3VuZE5hbWUpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBwcml2YXRlIHBsYXlFYXRTb3VuZCgpOiB2b2lkIHtcclxuICAgIC8vICAgICBjb25zdCBjdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMDtcclxuXHJcbiAgICAvLyAgICAgaWYgKGN1cnJlbnRUaW1lIC0gdGhpcy5sYXN0RWF0U291bmRUaW1lID49IHRoaXMuc291bmRDb29sZG93bikge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmVhdFNvdW5kQ291bnQgPSAwO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlZFNvdW5kcyA9IFtdO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmxhc3RFYXRTb3VuZFRpbWUgPSBjdXJyZW50VGltZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5fcGxheVNvdW5kKFByZWZhYlNvdW5kVHJhY2suRWF0U291bmQpO1xyXG4gICAgLy8gICAgIH0gZWxzZSBpZiAodGhpcy5lYXRTb3VuZENvdW50IDwgMikge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmVhdFNvdW5kQ291bnQrKztcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZWRTb3VuZHMucHVzaChQcmVmYWJTb3VuZFRyYWNrLkVhdFNvdW5kKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZUVhdFNvdW5kcygpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgLy8gcHJpdmF0ZSBzY2hlZHVsZUVhdFNvdW5kcygpOiB2b2lkIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5zY2hlZHVsZWRTb3VuZHMubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gICAgICAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLnNvdW5kQ29vbGRvd24gLyB0aGlzLmVhdFNvdW5kQ291bnQ7XHJcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lYXRTb3VuZENvdW50OyBpKyspIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5U291bmQoUHJlZmFiU291bmRUcmFjay5FYXRTb3VuZCk7XHJcbiAgICAvLyAgICAgICAgICAgICB9LCBpbnRlcnZhbCAqIGkpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIF9wbGF5U291bmQoc291bmROYW1lOiBQcmVmYWJTb3VuZFRyYWNrKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNvdW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFByZWZhYlNvdW5kVHJhY2sub25TaGVsZlNvdW5kOlxyXG4gICAgICAgICAgICAgICAgc291bmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm9uU2hlbGZTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQcmVmYWJTb3VuZFRyYWNrLnRpbGVQaWNrZWRTb3VuZDpcclxuICAgICAgICAgICAgICAgIHNvdW5kID0gY2MuaW5zdGFudGlhdGUodGhpcy50aWxlUGlja2VkU291bmQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUHJlZmFiU291bmRUcmFjay50cmlwbGVNYXRjaFNvcnRTb3VuZDpcclxuICAgICAgICAgICAgICAgIHNvdW5kID0gY2MuaW5zdGFudGlhdGUodGhpcy50cmlwbGVNYXRjaFNvcnRTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQcmVmYWJTb3VuZFRyYWNrLmNsZWFyU291bmQ6XHJcbiAgICAgICAgICAgICAgICBzb3VuZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2xlYXJTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc291bmQucGFyZW50ID0gdGhpcy5JbnN0YW50aWF0ZVNvdW5kQ29udGFpbmVyO1xyXG5cclxuICAgICAgICBjb25zdCBfU291bmRDb21wID0gc291bmQuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcclxuICAgICAgICBjb25zdCBhdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheShfU291bmRDb21wLmNsaXAsIGZhbHNlLCBfU291bmRDb21wLnZvbHVtZSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF1ZGlvKF9Tb3VuZENvbXApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zb3VuZHMucHVzaChfU291bmRDb21wKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVBdWRpbyhfU291bmRDb21wOiBjYy5BdWRpb1NvdXJjZSk6IHZvaWQge1xyXG4gICAgICAgIF9Tb3VuZENvbXAuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgbXV0ZVNvdW5kKHNvdW5kTmFtZTogc3RyaW5nLCBpc011dGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc291bmRzLmZpbmQoc291bmQgPT4gc291bmQubm9kZS5uYW1lID09PSBzb3VuZE5hbWUpO1xyXG4gICAgICAgIGlmIChpc011dGVkKSByZXN1bHQudm9sdW1lID0gMDtcclxuICAgICAgICBlbHNlIHJlc3VsdC52b2x1bWUgPSAxO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcFNvdW5kKHNvdW5kTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoIChzb3VuZE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBEZWZhdWx0U291bmRUcmFjay5Mb3NlU291bmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkxvc2VTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEZWZhdWx0U291bmRUcmFjay5XaW5Tb3VuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuV2luU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTG9vcGVkU291bmRUcmFjay5iZ1NvdW5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcEFsbFNvdW5kKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmdTb3VuZCAmJiAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLkxvc2VTb3VuZCAmJiB0aGlzLkxvc2VTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5XaW5Tb3VuZCAmJiB0aGlzLldpblNvdW5kLnN0b3AoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFsxXSBDbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMuXHJcbiAqIFsyXSBVc2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlLlxyXG4gKiBbM10gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAqIFs0XSBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAqXHJcbiAqIExlYXJuIG1vcmUgYWJvdXQgc2NyaXB0aW5nOiBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMy40L21hbnVhbC9lbi9zY3JpcHRpbmcvXHJcbiAqIExlYXJuIG1vcmUgYWJvdXQgQ0NDbGFzczogaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzMuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2RlY29yYXRvci5odG1sXHJcbiAqIExlYXJuIG1vcmUgYWJvdXQgbGlmZS1jeWNsZSBjYWxsYmFja3M6IGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8zLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbiAqL1xyXG4iXX0=