
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/config/GameConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7904cgh/K1K27W1cHf6o8Qe', 'GameConfig');
// scripts/config/GameConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigData = exports.adConfig = exports.animationConfig = exports.layoutConfig = exports.levelConfig = void 0;
exports.levelConfig = {
    row: 5,
    col: 3,
    numberLayer: 1,
    numberItem: 15,
    initialEmptySlot: 6,
};
exports.layoutConfig = {
    marginTop: 0,
    // offsetX: -17,
    // offsetY: -17,
    offsetX: -30,
    offsetY: -30,
    backItemOffsetY: 6,
};
exports.animationConfig = {
    toSlotDuration: 0.1,
    matchDuration: 0.15,
    spawnDuration: 0.3
};
exports.adConfig = {
    matchTimeBeforeShowEndCard: 8,
};
var ConfigData = /** @class */ (function () {
    function ConfigData() {
    }
    ConfigData.Game = {
        isEnableSound: false,
        isShowEndCard: false,
        isCanClick: false,
        isPlaying: false,
        isPlayedBgSound: false,
        isLoose: false,
        isWin: false,
        isMovedToNextLevel: false,
        isHasTimeCount: false,
        isHasCTA: true,
    };
    ConfigData.UI = {
        isActiveWarning: false,
    };
    ConfigData.Idea = {
        isShelfExplosionWhenHitRocket: false,
        fakeRocketPoses: [],
        shelf: [],
        shelfExplosionCount: 0,
        shelfEatenCount: 0,
    };
    ConfigData.OutSource = {
        isHasCart: true,
    };
    ConfigData.Helper = {
        maxRocketCanSpawn: 4,
    };
    return ConfigData;
}());
exports.ConfigData = ConfigData;
// export const adVersion = {
//   // ver: "1.1",
//   ver: "1.2",
// };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29uZmlnXFxHYW1lQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFhLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLEdBQUcsRUFBRSxDQUFDO0lBQ04sR0FBRyxFQUFFLENBQUM7SUFDTixXQUFXLEVBQUUsQ0FBQztJQUNkLFVBQVUsRUFBRSxFQUFFO0lBQ2QsZ0JBQWdCLEVBQUUsQ0FBQztDQUNwQixDQUFDO0FBQ1csUUFBQSxZQUFZLEdBQUc7SUFDMUIsU0FBUyxFQUFFLENBQUM7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFDWixPQUFPLEVBQUUsQ0FBQyxFQUFFO0lBQ1osZUFBZSxFQUFFLENBQUM7Q0FFbkIsQ0FBQztBQUVXLFFBQUEsZUFBZSxHQUFHO0lBQzdCLGNBQWMsRUFBRSxHQUFHO0lBQ25CLGFBQWEsRUFBRSxJQUFJO0lBQ25CLGFBQWEsRUFBRSxHQUFHO0NBQ25CLENBQUM7QUFDVyxRQUFBLFFBQVEsR0FBRztJQUN0QiwwQkFBMEIsRUFBRSxDQUFDO0NBQzlCLENBQUM7QUFHRjtJQUFBO0lBNkJBLENBQUM7SUE1QlEsZUFBSSxHQUFHO1FBQ1osYUFBYSxFQUFFLEtBQUs7UUFDcEIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsZUFBZSxFQUFFLEtBQUs7UUFDdEIsT0FBTyxFQUFFLEtBQUs7UUFDZCxLQUFLLEVBQUUsS0FBSztRQUNaLGtCQUFrQixFQUFFLEtBQUs7UUFDekIsY0FBYyxFQUFFLEtBQUs7UUFDckIsUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDO0lBQ0ssYUFBRSxHQUFHO1FBQ1YsZUFBZSxFQUFFLEtBQUs7S0FDdkIsQ0FBQTtJQUNNLGVBQUksR0FBRztRQUNaLDZCQUE2QixFQUFFLEtBQUs7UUFDcEMsZUFBZSxFQUFFLEVBQUU7UUFDbkIsS0FBSyxFQUFFLEVBQUU7UUFDVCxtQkFBbUIsRUFBRSxDQUFDO1FBQ3RCLGVBQWUsRUFBRSxDQUFDO0tBQ25CLENBQUE7SUFDTSxvQkFBUyxHQUFHO1FBQ2pCLFNBQVMsRUFBRSxJQUFJO0tBQ2hCLENBQUE7SUFDTSxpQkFBTSxHQUFHO1FBQ2QsaUJBQWlCLEVBQUUsQ0FBQztLQUNyQixDQUFBO0lBQ0gsaUJBQUM7Q0E3QkQsQUE2QkMsSUFBQTtBQTdCWSxnQ0FBVTtBQThCdkIsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEIsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBsZXZlbENvbmZpZyA9IHtcclxuICByb3c6IDUsXHJcbiAgY29sOiAzLFxyXG4gIG51bWJlckxheWVyOiAxLFxyXG4gIG51bWJlckl0ZW06IDE1LFxyXG4gIGluaXRpYWxFbXB0eVNsb3Q6IDYsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBsYXlvdXRDb25maWcgPSB7XHJcbiAgbWFyZ2luVG9wOiAwLFxyXG4gIC8vIG9mZnNldFg6IC0xNyxcclxuICAvLyBvZmZzZXRZOiAtMTcsXHJcbiAgb2Zmc2V0WDogLTMwLFxyXG4gIG9mZnNldFk6IC0zMCxcclxuICBiYWNrSXRlbU9mZnNldFk6IDYsXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFuaW1hdGlvbkNvbmZpZyA9IHtcclxuICB0b1Nsb3REdXJhdGlvbjogMC4xLFxyXG4gIG1hdGNoRHVyYXRpb246IDAuMTUsXHJcbiAgc3Bhd25EdXJhdGlvbjogMC4zXHJcbn07XHJcbmV4cG9ydCBjb25zdCBhZENvbmZpZyA9IHtcclxuICBtYXRjaFRpbWVCZWZvcmVTaG93RW5kQ2FyZDogOCxcclxufTtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnRGF0YSB7XHJcbiAgc3RhdGljIEdhbWUgPSB7XHJcbiAgICBpc0VuYWJsZVNvdW5kOiBmYWxzZSxcclxuICAgIGlzU2hvd0VuZENhcmQ6IGZhbHNlLFxyXG4gICAgaXNDYW5DbGljazogZmFsc2UsXHJcbiAgICBpc1BsYXlpbmc6IGZhbHNlLFxyXG4gICAgaXNQbGF5ZWRCZ1NvdW5kOiBmYWxzZSxcclxuICAgIGlzTG9vc2U6IGZhbHNlLFxyXG4gICAgaXNXaW46IGZhbHNlLFxyXG4gICAgaXNNb3ZlZFRvTmV4dExldmVsOiBmYWxzZSxcclxuICAgIGlzSGFzVGltZUNvdW50OiBmYWxzZSxcclxuICAgIGlzSGFzQ1RBOiB0cnVlLFxyXG4gIH07XHJcbiAgc3RhdGljIFVJID0ge1xyXG4gICAgaXNBY3RpdmVXYXJuaW5nOiBmYWxzZSxcclxuICB9XHJcbiAgc3RhdGljIElkZWEgPSB7XHJcbiAgICBpc1NoZWxmRXhwbG9zaW9uV2hlbkhpdFJvY2tldDogZmFsc2UsXHJcbiAgICBmYWtlUm9ja2V0UG9zZXM6IFtdLFxyXG4gICAgc2hlbGY6IFtdLFxyXG4gICAgc2hlbGZFeHBsb3Npb25Db3VudDogMCxcclxuICAgIHNoZWxmRWF0ZW5Db3VudDogMCxcclxuICB9XHJcbiAgc3RhdGljIE91dFNvdXJjZSA9IHtcclxuICAgIGlzSGFzQ2FydDogdHJ1ZSxcclxuICB9XHJcbiAgc3RhdGljIEhlbHBlciA9IHtcclxuICAgIG1heFJvY2tldENhblNwYXduOiA0LFxyXG4gIH1cclxufVxyXG4vLyBleHBvcnQgY29uc3QgYWRWZXJzaW9uID0ge1xyXG4vLyAgIC8vIHZlcjogXCIxLjFcIixcclxuLy8gICB2ZXI6IFwiMS4yXCIsXHJcbi8vIH07XHJcbiJdfQ==