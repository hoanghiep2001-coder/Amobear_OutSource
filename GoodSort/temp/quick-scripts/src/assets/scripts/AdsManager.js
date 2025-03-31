"use strict";
cc._RF.push(module, '90e40BwGAFK96eVWqu9Fh9X', 'AdsManager');
// scripts/AdsManager.ts

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
exports.AdsManager = void 0;
var SoundController_1 = require("./Controller/SoundController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AdsManager = /** @class */ (function (_super) {
    __extends(AdsManager, _super);
    function AdsManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.SoundController = null;
        return _this;
    }
    AdsManager.prototype.onLoad = function () {
    };
    AdsManager.prototype.start = function () {
        window.gameReady && window.gameReady();
    };
    AdsManager.prototype.installHandle = function () {
        // console.log("install");
        alert("install");
        this.SoundController.stopAllSound();
        // Constants.ironSource.isEndGame = true;
        window.gameEnd && window.gameEnd();
        //If ad network is tiktok
        if (typeof (playableSDK) != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }
        // If ad network is google ads
        if (typeof (ExitApi) != "undefined") {
            ExitApi.exit();
            return;
        }
        // If ad netwrok is ironsources
        if (typeof (dapi) != "undefined") {
            dapi.openStoreUrl();
            return;
        }
        // If ad network support MRAID 2.0
        if (typeof (mraid) != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open("https://play.google.com/store/apps/details?id=com.goods.tidy.challenge");
                return;
            }
            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/app/id6743524073?mt=8");
                return;
            }
            mraid.open("https://play.google.com/store/apps/details?id=com.goods.tidy.challenge");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    };
    __decorate([
        property(SoundController_1.SoundController)
    ], AdsManager.prototype, "SoundController", void 0);
    AdsManager = __decorate([
        ccclass
    ], AdsManager);
    return AdsManager;
}(cc.Component));
exports.AdsManager = AdsManager;

cc._RF.pop();